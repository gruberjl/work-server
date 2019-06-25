import {getReadyToPost} from './get-ready-to-post'
import {submitPost} from './submit-post'

export const post = () => {
  start()
  setInterval(start, 300000)
}

const start = async () => {
  try {
    const engagements = await getReadyToPost()

    for (let i = 0; i < engagements.length; i++) {
      await submitPost(engagements[i])
    }
  } catch (e) {
    console.error('twitter post failed')
    console.error(e)
    console.log('')
  }
}
