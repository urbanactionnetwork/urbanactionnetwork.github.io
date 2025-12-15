import { publicApi } from '@workspace/core/api'

export interface Staff {
  data: {
    name: string
    mail?: string
    imageUrl?: string
    affiliation?: string
    group: string
  }[]
}

/**
 * 함께하는 사람들을 조회한다.
 *
 * @returns Staff
 */
export const fetchStaff = async () => {
  const response = await publicApi.get('/data/staff.json')
  return response.data as Staff
}
