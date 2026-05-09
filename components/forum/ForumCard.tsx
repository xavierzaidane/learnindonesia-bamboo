import Link from 'next/link'
import Image from 'next/image'
import { ForumThread } from '@/lib/types'
import { MessageCircle, Eye, Pin, CheckCircle, Flame } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ForumCardProps {
  thread: ForumThread
}

const categoryColors: Record<string, string> = {
  Grammar: 'bg-purple-100 text-purple-700',
  Vocabulary: 'bg-blue-100 text-blue-700',
  Pronunciation: 'bg-yellow-100 text-yellow-700',
  Culture: 'bg-orange-100 text-orange-700',
  Phrases: 'bg-pink-100 text-pink-700',
  Writing: 'bg-teal-100 text-teal-700',
  General: 'bg-zinc-100 text-zinc-600',
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
  'All Levels': 'bg-zinc-100 text-zinc-600',
  Native: 'bg-zinc-100 text-zinc-600',
}

export function ForumCard({ thread }: ForumCardProps) {
  return (
    <Link href={`/forum/${thread.slug}`}>
      <div className="bg-white border border-zinc-200 rounded-3xl hover:border-zinc-300  transition-all cursor-pointer overflow-hidden flex mb-2">
        {/* Left Vote Column - Reddit style */}
        <div className="flex flex-col items-center justify-start w-12 bg-zinc-50 border-r border-zinc-200 p-2 gap-1">
          <button className="hover:bg-zinc-200 rounded-3xl p-1 transition-colors">
            <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          </button>
          <span className="text-sm font-medium text-zinc-600">
            {thread.views > 999 ? `${(thread.views / 1000).toFixed(1)}k` : thread.views}
          </span>
          <button className="hover:bg-zinc-200 rounded-3xl p-1 transition-colors">
            <svg className="w-4 h-4 text-zinc-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-3">
          {/* Header Row - Category, Author, Time */}
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span
              className={cn(
                'text-sm font-medium px-2 py-0.5 rounded-3xl',
                categoryColors[thread.category as keyof typeof categoryColors]
              )}
            >
              t/{thread.category.replace(/\s+/g, '')}
            </span>
            <span className="text-sm text-zinc-500">
              Posted by {thread.author.name} • {thread.createdAt}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-md font-semibold text-zinc-900 mb-2 line-clamp-2">
            {thread.title}
          </h3>

          {/* Body Preview */}
          <p className="text-sm text-zinc-600 mb-3 line-clamp-2">
            {thread.body}
          </p>

          {/* Tags and Status Badges */}
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            {thread.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center gap-1 bg-zinc-100 text-zinc-600 text-sm px-1.5 py-0.5 rounded-3xl"
              >
                #{tag}
              </span>
            ))}
            {thread.isSolved && (
              <span className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-sm font-medium px-1.5 py-0.5 rounded-3xl">
                <CheckCircle className="w-3 h-3" />
                Solved
              </span>
            )}
            {thread.isHot && (
              <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 text-sm font-medium px-1.5 py-0.5 rounded-3xl">
                <Flame className="w-3 h-3" />
                Hot
              </span>
            )}
            {thread.isPinned && (
              <span className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 text-sm font-medium px-1.5 py-0.5 rounded-3xl">
                <Pin className="w-3 h-3" />
              </span>
            )}
          </div>

          {/* Footer - Stats */}
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-1 hover:text-zinc-700 transition-colors">
              <MessageCircle className="w-3.5 h-3.5" />
              {thread.replies.length} comments
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-3.5 h-3.5" />
              {thread.views} views
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
