import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import type { LibraryTopic } from '@/lib/types'
import { cn } from '@/lib/utils'

interface LibraryCardProps {
  topic: LibraryTopic
}

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
}

export function LibraryCard({ topic }: LibraryCardProps) {
  return (
    <div className="flex flex-col lg:flex-row border bg-white border-zinc-200 rounded-3xl overflow-hidden">
      {/* LEFT — image */}
      <div className="relative w-full lg:w-1/3 aspect-[4/3] lg:aspect-auto min-h-48">
           <img src="/assets/anak.png" alt="anak indonesia" className='w-full h-full object-cover' />
        {/* Popular badge */}
        {topic.isPopular && (
          <span className="absolute top-3 left-3 bg-white text-zinc-900 text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
            Popular
          </span>
        )}
      </div>

      {/* MIDDLE — content */}
      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
        <div>
          {/* Level badge + Category badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className={cn('text-xs font-medium px-2.5 py-1 rounded-full', levelColors[topic.level])}>
              {topic.level}
            </span>
            <span className="bg-zinc-100 text-zinc-600 text-xs font-medium px-2.5 py-1 rounded-full">
              {topic.category}
            </span>
          </div>
          {/* Title */}
          <h4 className="text-xl font-medium mb-1">{topic.title}</h4>
          {/* Description */}
          <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{topic.description}</p>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {topic.tags.map((tag) => (
              <span key={tag} className="border border-zinc-200 text-zinc-500 text-xs px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>
        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <Link href={`/library/${topic.slug}`}>
            <button className="bg-primary text-white px-6 py-2.5 rounded-3xl text-sm font-medium hover:bg-zinc-800 transition-colors">
              Start learning
            </button>
          </Link>
          <button className="flex items-center gap-2 border border-zinc-200 px-6 py-2.5 rounded-3xl text-sm font-medium hover:bg-zinc-50 transition-colors">
            Preview questions <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* RIGHT — stats panel */}
      <div className="w-full lg:w-56 bg-white/20 p-6 lg:p-8 flex flex-col justify-center gap-6 border-t lg:border-t-0 lg:border-l border-zinc-200">
        <div>
          <p className="text-xl font-medium">{topic.starterQuestions.length}</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Questions</p>
        </div>
        <div>
          <p className="text-xl font-medium">{topic.level}</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Level</p>
        </div>
        <div>
          <p className="text-xl font-medium">{topic.category}</p>
          <p className="text-xs text-zinc-500 uppercase tracking-wider">Category</p>
        </div>
      </div>
    </div>
  )
}
