import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'accounts'

export const accounts = {
  getCollection: () => getCollection(dbName),
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
