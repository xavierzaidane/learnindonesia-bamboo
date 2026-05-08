import Image from 'next/image'
import { ForumThread } from '@/lib/types'
import { Eye, CheckCircle } from 'lucide-react'
import { ReplyCard } from './ReplyCard'
import { ReplyInput } from './ReplyInput'
import { cn } from '@/lib/utils'

interface ThreadPostProps {
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

export function ThreadPost({ thread }: ThreadPostProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Main Content */}
      <div className="lg:col-span-3">
        {/* ORIGINAL POST */}
        <div className="border border-zinc-200 rounded-3xl bg-white p-6 mb-6 mt-15">
        {/* Author row */}
        <div className="flex items-center gap-3 mb-4">
          <Image
            src={thread.author.avatar}
            alt={thread.author.name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-full object-cover"
            unoptimized
          />
          <div>
            <p className="text-sm font-medium">{thread.author.name}</p>
            <p className="text-xs text-zinc-400">{thread.createdAt}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <span
              className={cn(
                'text-xs font-medium px-2.5 py-1 rounded-full',
                levelColors[thread.author.level as keyof typeof levelColors]
              )}
            >
              {thread.author.level}
            </span>
            {thread.isSolved && (
              <span className="bg-green-100 text-green-700 text-xs font-medium px-2.5 py-1 rounded-full">
                Solved
              </span>
            )}
          </div>
        </div>

        {/* Thread title */}
        <h1 className="text-lg font-medium text-zinc-900 mb-3">{thread.title}</h1>

        {/* Body */}
        <p className="text-sm text-zinc-700 leading-7">{thread.body}</p>

        {/* Tags row */}
        <div className="flex gap-2 mt-4 flex-wrap">
          {thread.tags.map((tag) => (
            <span
              key={tag}
              className="border border-zinc-200 text-zinc-400 text-xs px-2.5 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Bottom row: category + views */}
        <div className="flex items-center gap-3 mt-4 pt-4 border-t border-zinc-100">
          <span
            className={cn(
              'text-xs font-medium px-2.5 py-1 rounded-full',
              categoryColors[thread.category as keyof typeof categoryColors]
            )}
          >
            {thread.category}
          </span>
          <span className="text-xs text-zinc-400 ml-auto flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" /> {thread.views} views
          </span>
        </div>
      </div>

      {/* REPLIES SECTION */}
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-zinc-900">
          {thread.replies.length} Replies
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {thread.replies.map((reply) => (
          <ReplyCard key={reply.id} reply={reply} />
        ))}
      </div>

      {/* Reply input at the bottom */}
      <ReplyInput threadTitle={thread.title} />
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-24 space-y-6">
          {/* About Thread */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-4">
            <h3 className="font-semibold text-md text-zinc-900 mb-4">About This Thread</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="text-xs text-zinc-500 uppercase font-medium">Category</p>
                <p className={cn('text-sm font-medium px-2.5 py-1 rounded-full inline-block mt-1', categoryColors[thread.category as keyof typeof categoryColors])}>
                  {thread.category}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-medium">Level</p>
                <p className={cn('text-sm font-medium px-2.5 py-1 rounded-full inline-block mt-1', levelColors[thread.level as keyof typeof levelColors])}>
                  {thread.level}
                </p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-medium">Views</p>
                <p className="text-sm font-medium mt-1">{thread.views}</p>
              </div>
              <div>
                <p className="text-xs text-zinc-500 uppercase font-medium">Replies</p>
                <p className="text-sm font-medium mt-1">{thread.replies.length}</p>
              </div>
            </div>
          </div>

          {/* Author Info */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-4">
            <h3 className="font-semibold text-md text-zinc-900 mb-4">Author</h3>
            <div className="flex items-center gap-3">
              <Image
                src={thread.author.avatar}
                alt={thread.author.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                unoptimized
              />
              <div>
                <p className="text-sm font-medium text-zinc-900">{thread.author.name}</p>
                <p className={cn('text-xs font-medium px-2 py-0.5 rounded-full inline-block mt-1', levelColors[thread.author.level as keyof typeof levelColors])}>
                  {thread.author.level}
                </p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {thread.tags.length > 0 && (
            <div className="bg-white rounded-3xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-md text-zinc-900 mb-3">Tags</h3>
              <div className="flex gap-2 flex-wrap">
                {thread.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-zinc-200 text-zinc-400 text-xs px-2.5 py-1 rounded-full hover:bg-zinc-50 cursor-pointer transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Status */}
          {(thread.isSolved || thread.isHot || thread.isPinned) && (
            <div className="bg-white rounded-3xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-md text-zinc-900 mb-3">Status</h3>
              <div className="flex flex-col gap-2">
                {thread.isSolved && (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-green-700 font-medium">Solved</span>
                  </div>
                )}
                {thread.isHot && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-orange-700 font-medium">🔥 Hot</span>
                  </div>
                )}
                {thread.isPinned && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-blue-700 font-medium">📌 Pinned</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
