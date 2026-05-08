import Image from 'next/image'
import { ForumReply } from '@/lib/types'
import { CheckCircle, ThumbsUp } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReplyCardProps {
  reply: ForumReply
}

const levelColors: Record<string, string> = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
  Native: 'bg-zinc-100 text-zinc-600',
}

export function ReplyCard({ reply }: ReplyCardProps) {
  return (
    <div
      className={cn(
        'border rounded-2xl p-5 transition-all',
        reply.isAccepted
          ? 'border-green-200 bg-green-50'
          : 'border-zinc-200 bg-white'
      )}
    >
      {/* Author row */}
      <div className="flex items-center gap-3 mb-3">
        <Image
          src={reply.author.avatar}
          alt={reply.author.name}
          width={32}
          height={32}
          className="w-8 h-8 rounded-full object-cover"
          unoptimized
        />
        <div>
          <p className="text-sm font-medium">{reply.author.name}</p>
          <p className="text-xs text-zinc-400">{reply.createdAt}</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span
            className={cn(
              'text-xs font-medium px-2.5 py-1 rounded-full',
              levelColors[reply.author.level as keyof typeof levelColors]
            )}
          >
            {reply.author.level}
          </span>
          {reply.isAccepted && (
            <span className="bg-green-600 text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1">
              <CheckCircle className="w-3 h-3" /> Accepted
            </span>
          )}
        </div>
      </div>

      {/* Reply content */}
      <p className="text-sm text-zinc-700 leading-7">{reply.content}</p>

      {/* Like row */}
      <div className="flex items-center gap-2 mt-4 pt-3 border-t border-zinc-100">
        <button className="flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-900 transition-colors">
          <ThumbsUp className="w-3.5 h-3.5" />
          {reply.likes} helpful
        </button>
      </div>
    </div>
  )
}
