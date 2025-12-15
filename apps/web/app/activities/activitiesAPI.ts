import { publicApi } from '@workspace/core/api'

export interface Activities {
  data: {
    id: number
    title: string
    description: string
    thumbnail: string
    url: string
  }[]
}

/**
 * 모든 주요 활동을 조회한다.
 *
 * @returns Activities
 */
export const fetchActivities = async () => {
  const response = await publicApi.get('/data/activities.json')
  return response.data as Activities
}

/**
 * 최근 주요 활동 6건을 조회한다.
 *
 * @returns News (data 길이 최대 6)
 */
export const fetchTopActivities = async () => {
  const response = await publicApi.get('/data/activities.json')
  const all = response.data as Activities
  return { data: all.data.slice(0, 6) }
}
