import { publicApi } from '@workspace/core/api'

export interface News {
  data: {
    id: string
    title: string
    description: string
    thumbnail: string
  }[]
}

/**
 * 모든 새소식을 조회한다.
 *
 * @returns News
 */
export const fetchNews = async () => {
  const response = await publicApi.get('/data/news/all-news.json')
  return response.data as News
}

/**
 * 모든 새소식을 조회한다.
 *
 * @returns News
 */
export const fetchTopNews = async () => {
  const response = await publicApi.get('/data/news/top-news.json')
  return response.data as News
}

