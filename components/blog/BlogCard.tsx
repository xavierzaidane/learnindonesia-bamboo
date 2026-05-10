import Image from 'next/image'
import Link from 'next/link'
import type { NewsPost } from '@/lib/types'
import { cn } from '@/lib/utils'
import { blogCategoryBadgeStyles } from '@/lib/data/blog'

interface BlogCardProps {
  post: NewsPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className="border border-zinc-200 rounded-3xl overflow-hidden hover:border-zinc-300 hover:shadow-sm transition-all group bg-white">
        {/* Thumbnail */}
        <div className="relative aspect-video w-full">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-[1.02] transition-transform duration-300"
            referrerPolicy="no-referrer"
          />
          {post.isNew && (
            <span className="absolute top-3 left-3 bg-white text-zinc-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
              New
            </span>
          )}
          <span
            className={cn(
              'absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full',
              blogCategoryBadgeStyles[post.category]
            )}
          >
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-sm font-medium text-zinc-900 mb-2 line-clamp-2 group-hover:text-zinc-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-xs text-zinc-500 line-clamp-2 mb-4">{post.excerpt}</p>

          {/* Author + meta */}
          <div className="flex items-center gap-2 flex-wrap">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={24}
              height={24}
              className="rounded-full w-6 h-6"
              unoptimized
            />
            <span className="text-xs text-zinc-500">{post.author.name}</span>
            <span className="text-zinc-300">·</span>
            <span className="text-xs text-zinc-400">{post.publishedAt}</span>
            <span className="text-zinc-300">·</span>
            <span className="text-xs text-zinc-400">{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
