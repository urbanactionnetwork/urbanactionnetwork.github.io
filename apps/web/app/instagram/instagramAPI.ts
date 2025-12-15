import { publicApi } from '@workspace/core/api'

export interface Instagram {
  data: string[]
}

/**
 * 3건 인스타그램 링크를 조회한다.
 *
 * @returns Instagram
 */
export const fetchInstagram = async () => {
  const response = await publicApi.get('/data/instagram.json')
  return response.data as Instagram
}
