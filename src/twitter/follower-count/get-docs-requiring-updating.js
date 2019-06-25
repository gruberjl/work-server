import {db} from 'lib'
import moment from 'moment'

export const getDocsRequiringUpdating = async () => {
  const dt = moment().format('YYYY-MM-DD')

  const docs = await db.analytics.getCollection()
    .where('provider', '==', 'twitter')
    .where('lastUpdate', '<', dt)
    .get()
    .then(db.snapshotToDocs)
    .catch(error => ({error}))

  return docs
}
