import {getDocsRequiringUpdating} from './get-docs-requiring-updating'
import {updateAnalytic} from './update-analytic'

export const followerCount = () => {
  start()
  setInterval(start, 3600000)
}

const start = async () => {
  try {
    const analytics = await getDocsRequiringUpdating()

    for (let i = 0; i < analytics.length; i++) {
      await updateAnalytic(analytics[i])
    }
  } catch (e) {
    console.error('twitter followerCount failed')
    console.error(e)
    console.log('')
  }
}
