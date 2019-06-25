require('@babel/polyfill')
require('@babel/register')
const twitter = require('./twitter')

const start = async () => {
  await twitter.followerCount()
  await twitter.post()
}

start()
