import { publicApi } from '@workspace/core/api'

export interface News {
  data: {
    id: number
    title: string
    description: string
    thumbnail: string
    url: string
  }[]
}

/**
 * 모든 새소식을 조회한다.
 *
 * @returns News
 */
export const fetchNews = async () => {
  const response = await publicApi.get('/data/news.json')
  return response.data as News
}

/**
 * 최근 새소식 3건을 조회한다.
 *
 * @returns News (data 길이 최대 3)
 */
export const fetchTopNews = async () => {
  const response = await publicApi.get('/data/news.json')
  const all = response.data as News
  return { data: all.data.slice(0, 3) }
}
