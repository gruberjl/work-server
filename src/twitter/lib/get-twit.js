import Twit from 'twit'
import {db} from 'lib'

export const getTwit = async (account) => {
  const app = await db.apps.get('twitter')
  const twit = new Twit({
    consumer_key: app.apiToken,
    consumer_secret: app.apiSecret,
    access_token: account.accessToken,
    access_token_secret: account.accessSecret,
    timeout_ms: 60*1000,
    strictSSL: true
  })

  return twit
}
