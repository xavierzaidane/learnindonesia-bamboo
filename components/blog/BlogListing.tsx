'use client'

import { useCallback, useState } from 'react'
import type { NewsPost } from '@/lib/types'
import { BlogCard } from './BlogCard'

interface BlogListingProps {
  posts: NewsPost[]
}

export function BlogListing({ posts }: BlogListingProps) {
  const [filteredPosts, setFilteredPosts] = useState<NewsPost[]>(posts)
  const isEmpty = filteredPosts.length === 0

  return (
    <div className="space-y-6">
      {isEmpty ? (
        <div className="border border-dashed border-zinc-200 rounded-2xl p-10 text-center text-sm text-zinc-500">
          No articles match your filters. Try a different search.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      )}
    </div>
  )
}
