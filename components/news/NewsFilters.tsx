'use client'

import { useEffect, useMemo, useState } from 'react'
import { X } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import type { NewsPost } from '@/lib/types'

interface NewsFiltersProps {
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

export function NewsFilters({ posts, onFilterChange }: NewsFiltersProps) {
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

            {/* Divider */}
            <div className="w-px h-6 bg-zinc-200 mx-2 shrink-0" />

            {/* Sort Select in chips */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="rounded-full h-9 px-4 py-2 shrink-0 border border-zinc-200 bg-white hover:bg-zinc-50 shadow-xs w-auto">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Clear Button */}
            {hasActiveFilters && (
              <button
                onClick={handleClear}
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all rounded-full h-9 px-4 py-2 shrink-0 border border-zinc-200 bg-background text-zinc-900 hover:bg-zinc-50 shadow-xs"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>
        </div>
        {/* Gradient overlays */}
     
      </div>
    </div>
  )
}
