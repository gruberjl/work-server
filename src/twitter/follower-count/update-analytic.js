import {db} from 'lib'
import {getTwit} from '../lib'
import moment from 'moment'

export const updateAnalytic = async (analytic) => {
  const account = await db.accounts.get(analytic.accountId)
  const twit = await getTwit(account)

  const followers = await twit.get('followers/ids', {stringify_ids: true})
    .then(r => r.data.ids)
    .catch(error => ({error}))

  if (followers.error) {
    console.error(followers.error)
    return
  }

  const dt = moment().format('YYYY-MM-DD')
  analytic.followerCounts[dt] = followers.length
  analytic.lastUpdate = dt
  await db.analytics.set(analytic)
}
