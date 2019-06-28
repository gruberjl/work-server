import {db} from 'lib'
import {getTwit} from '../lib'
import moment from 'moment'

export const updateAnalytic = async (analytic) => {
  const account = await db.accounts.get(analytic.accountId)
  const twit = await getTwit(account)

  const tweets = await twit.get('statuses/user_timeline', {count: 200, include_rts: false, exclude_replies: false})
    .then(r =>
      r.data.map(t => ({
        id: t.id_str,
        text: t.text,
        retweetCount: t.retweet_count,
        favoriteCount: t.favorite_count,
        createdAt: t.created_at
      }))
    )
    .catch(error => ({error}))

  if (tweets.error) {
    console.error(tweets.error)
    return
  }

  const dt = moment().format('YYYY-MM-DD')
  tweets.forEach(tweet => {
    const obj = analytic.tweets[tweet.id] || {history:{}}

    obj.id = tweet.id
    obj.text = tweet.text
    if (moment(tweet.createdAt).isValid())
      obj.createdAt = moment(tweet.createdAt).toISOString()
    else
      obj.createdAt = moment().toISOString()
    obj.history[dt] = {
      retweetCount: tweet.retweetCount,
      favoriteCount: tweet.favoriteCount
    }

    analytic.tweets[tweet.id] = obj
  })

  analytic.lastUpdate = dt
  await db.analytics.set(analytic)
}
