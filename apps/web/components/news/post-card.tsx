import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card.tsx'
import { CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs'

export interface PostCardProps {
  id: number
  title: string
  thumbnail: string | null | undefined // null이나 undefined 가능성 명시 (선택 사항)
  url: string
  postDate: string
}

export function PostCard({ id, title, thumbnail, url, postDate }: PostCardProps) {
  const dateLabel = dayjs(postDate).format('YYYY년 MM월 DD일')
  
  // thumbnail이 빈 값일 경우 대체 이미지 경로 설정
  const imageSource = thumbnail || '/placeholder.png'

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="hover:bg-muted/50 flex h-full flex-col overflow-hidden transition-colors">
        <div className="relative aspect-[16/9] w-full">
          <Image 
            src={imageSource} 
            alt={title} // alt 텍스트를 'thumbnail' 대신 제목으로 넣으면 SEO와 접근성에 더 좋습니다.
            fill 
            className="object-cover" 
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-2 text-base md:text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent className="mt-auto">
          {dateLabel ? (
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <CalendarIcon className="size-4" />
              <span>{dateLabel}</span>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </Link>
  )
}

export default PostCard