'use client'

import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
// chips used instead of Select dropdown
import type { NewsPost } from '@/lib/types'

interface BlogFiltersProps {
  posts: NewsPost[]
  onFilterChange: (filtered: NewsPost[]) => void
}

const categories: Array<NewsPost['category'] | 'All'> = [
  'All',
  'Platform Update',
  'Language Tip',
  'Cultural Spotlight',
  'Learning Guide',
  'Community',
  'Event',
]

const sortOptions = [
  { value: 'newest', label: 'Newest' },
  { value: 'oldest', label: 'Oldest' },
  { value: 'quickest', label: 'Quickest Read' },
]

const parseReadTime = (value: string) => {
  const match = value.match(/\d+/)
  return match ? Number(match[0]) : 0
}

const getDateValue = (value: string) => {
  const timestamp = new Date(value).getTime()
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export function BlogFilters({ posts, onFilterChange }: BlogFiltersProps) {
  const [category, setCategory] = useState<NewsPost['category'] | 'All'>('All')
  const [sortBy, setSortBy] = useState('newest')

  const hasActiveFilters = category !== 'All' || sortBy !== 'newest'

  const filteredPosts = useMemo(() => {
    const filtered = posts.filter((post) => {
      if (category !== 'All' && post.category !== category) {
        return false
      }
      return true
    })

    const sorted = [...filtered]
    sorted.sort((a, b) => {
      if (sortBy === 'quickest') {
        return parseReadTime(a.readTime) - parseReadTime(b.readTime)
      }

      const dateA = getDateValue(a.publishedAt)
      const dateB = getDateValue(b.publishedAt)

      if (sortBy === 'oldest') {
        return dateA - dateB
      }

      return dateB - dateA
    })

    return sorted
  }, [posts, category, sortBy])

  useEffect(() => {
    onFilterChange(filteredPosts)
  }, [filteredPosts, onFilterChange])

  const handleClear = () => {
    setCategory('All')
    setSortBy('newest')
  }

  return (
    <div className="space-y-5 ">
      {/* Category Filter + Sort - Scrollable Chips */}
      <div className="relative w-full ">
        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide -mb-5" style={{ scrollbarWidth: 'none' }}>
          <div className="flex items-center gap-2 flex-nowrap w-full px-1 ">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all rounded-full h-9 px-4 py-2 shrink-0 border ${
                  category === cat
                    ? 'bg-primary text-white border-primary shadow-md'
                    : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-xs'
                }`}
              >
                {cat}
              </button>
            ))}

            <div className="flex items-center gap-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSortBy(option.value)}
                  className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all rounded-full h-9 px-4 py-2 shrink-0 border ${
                    sortBy === option.value
                      ? 'bg-primary text-white border-primary shadow-md'
                      : 'bg-white border-zinc-200 text-zinc-900 hover:bg-zinc-50 shadow-xs'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>

        {hasActiveFilters && (
          <button
            onClick={handleClear}
            className="inline-flex items-center gap-1 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            Clear filters
          </button>
        )}
          </div>
        </div>
      </div>

      {/* Sort Dropdown & Clear Button Row */}
     
        
      </div>

  )
}
