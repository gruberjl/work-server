import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'analytics'

export const analytics = {
  getCollection: () => getCollection(dbName),
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
