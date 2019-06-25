import {getCollection} from './get-collection'

export const get = (dbName) => (id) => {
  const collection = getCollection(dbName)

  return collection.doc(id).get()
    .then(doc => doc.data())
    .catch(error => ({error}))
}
