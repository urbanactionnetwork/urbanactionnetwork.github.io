'use client'

import { useMemo, useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@workspace/ui/components/pagination.tsx'
import { Skeleton } from '@workspace/ui/components/skeleton.tsx'
import { Card, CardContent, CardHeader } from '@workspace/ui/components/card.tsx'
import PostCard from '@/components/news/post-card'
import type { News } from '@/app/news/newsAPI'

export interface CardListProps {
  items: News['data']
  pageSize?: number // default 20 (5 x 4)
  loading?: boolean
}

export function PostCardList({ items, pageSize = 20, loading = false }: CardListProps) {
  const [page, setPage] = useState(1)
  const pageCount = Math.max(1, Math.ceil((items?.length ?? 0) / pageSize))
  const paged = useMemo(() => {
    const start = (page - 1) * pageSize
    return items.slice(start, start + pageSize)
  }, [items, page, pageSize])

  const go = (p: number) => setPage(Math.min(pageCount, Math.max(1, p)))

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, idx) => (
            <Card key={idx} className="overflow-hidden">
              <div className="relative aspect-[16/9] w-full">
                <Skeleton className="h-full w-full" />
              </div>
              <CardHeader>
                <Skeleton className="h-5 w-3/4" />
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-1/2" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {paged.map((n, index) => (
          <PostCard
            key={`${n.id}-${index}`}
            id={n.id}
            title={n.title}
            thumbnail={n.thumbnail}
            url={n.url}
            postDate={n.postDate}
          />
        ))}
      </div>

      {pageCount > 1 && (
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" onClick={(e) => (e.preventDefault(), go(page - 1))} />
            </PaginationItem>

            {Array.from({ length: pageCount }).map((_, i) => {
              const idx = i + 1
              const isEdge = idx === 1 || idx === pageCount
              const near = Math.abs(idx - page) <= 1
              if (!isEdge && !near) {
                if (idx === 2 || idx === pageCount - 1) return <PaginationEllipsis key={`e-${idx}`} />
                return null
              }
              return (
                <PaginationItem key={idx}>
                  <PaginationLink href="#" isActive={idx === page} onClick={(e) => (e.preventDefault(), go(idx))}>
                    {idx}
                  </PaginationLink>
                </PaginationItem>
              )
            })}

            <PaginationItem>
              <PaginationNext href="#" onClick={(e) => (e.preventDefault(), go(page + 1))} />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </div>
  )
}

export default PostCardList
