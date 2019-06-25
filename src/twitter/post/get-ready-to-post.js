import {db} from 'lib'
import moment from 'moment'

export const getReadyToPost = async () => {
  const now = moment().toISOString()

  const docs = await db.engagements.getCollection()
    .where('provider', '==', 'twitter')
    .where('type', '==', 'post')
    .where('postAt', '<', now)
    .where('posted', '==', false)
    .get()
    .then(db.snapshotToDocs)
    .catch(error => ({error}))

  return docs
}
