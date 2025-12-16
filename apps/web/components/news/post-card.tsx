import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@workspace/ui/components/card.tsx'
import { CalendarIcon } from 'lucide-react'
import dayjs from 'dayjs'

export interface PostCardProps {
  id: number
  title: string
  thumbnail: string
  url: string
  postDate: string
}

export function PostCard({ id, title, thumbnail, url, postDate }: PostCardProps) {
  const dateLabel = dayjs(postDate).format('YYYY년 MM월 DD일')

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block h-full">
      <Card className="hover:bg-muted/50 flex h-full flex-col overflow-hidden transition-colors">
        <div className="relative aspect-[16/9] w-full">
          <Image src={thumbnail} alt="thumbnail" fill className="object-cover" />
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
