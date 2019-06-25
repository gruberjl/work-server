import {getCollection, set, get, remove, allDocs} from './lib'

const dbName = 'engagements'

export const engagements = {
  getCollection: () => getCollection(dbName),
  set: set(dbName),
  get: get(dbName),
  remove: remove(dbName),
  allDocs: allDocs(dbName)
}
