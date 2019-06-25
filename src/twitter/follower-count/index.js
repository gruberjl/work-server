import {getDocsRequiringUpdating} from './get-docs-requiring-updating'
import {updateAnalytic} from './update-analytic'

export const followerCount = async () => {
  const analytics = await getDocsRequiringUpdating()

  for (let i = 0; i < analytics.length; i++) {
    await updateAnalytic(analytics[i])
  }
}
