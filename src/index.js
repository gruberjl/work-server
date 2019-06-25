import * as twitter from './twitter'

const start = async () => {
  await twitter.followerCount()
}

start()
