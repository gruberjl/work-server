import {db} from 'lib'
import {getTwit} from '../lib'

export const submitPost = async (engagement) => {
  const account = await db.accounts.get(engagement.accountId)
  const twit = await getTwit(account)

  const tweet = await twit.post('statuses/update', { status: engagement.message })
    .then(r => r.data)
    .catch(error => ({error}))

  if (tweet.error) {
    console.error(tweet.error)
    return
  }

  engagement.posted = true
  engagement.providerId = tweet.id_str
  await db.engagements.set(engagement)
}
