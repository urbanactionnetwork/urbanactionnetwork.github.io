import { publicApi } from '@workspace/core/api'

export interface News {
  data: {
    id: number
    title: string
    thumbnail: string
    url: string
    postDate: string
  }[]
}

/**
 * 모든 공지사항을 조회한다.
 *
 * @returns News
 */
export const fetchNews = async () => {
  const response = await publicApi.get('/data/news.json')
  return response.data as News
}

/**
 * 최근 공지사항 3건을 조회한다.
 *
 * @returns News (data 길이 최대 3)
 */
export const fetchTopNews = async () => {
  const response = await publicApi.get('/data/news.json')
  const all = response.data as News
  return { data: all.data.slice(0, 3) }
}
