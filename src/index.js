import * as twitter from './twitter'

const start = async () => {
  await twitter.followerCount()
  await twitter.post()
}

start()
