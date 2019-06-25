import {getReadyToPost} from './get-ready-to-post'
import {submitPost} from './submit-post'

export const post = async () => {
  const engagements = await getReadyToPost()

  for (let i = 0; i < engagements.length; i++) {
    await submitPost(engagements[i])
  }
}
