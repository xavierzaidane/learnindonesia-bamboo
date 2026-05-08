'use client'

import { useMemo, useState } from 'react'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ForumThread } from '@/lib/types'
import { X } from 'lucide-react'

interface ForumFiltersProps {
  threads: ForumThread[]
  onFilterChange: (filtered: ForumThread[]) => void
}

export function ForumFilters({ threads, onFilterChange }: ForumFiltersProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedLevel, setSelectedLevel] = useState('all')

  const hasActiveFilters =
    searchQuery || selectedCategory !== 'all' || selectedStatus !== 'all' || selectedLevel !== 'all'

  const filtered = useMemo(() => {
    let result = threads

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (thread) =>
          thread.title.toLowerCase().includes(query) ||
          thread.body.toLowerCase().includes(query) ||
          thread.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    // Category filter
    if (selectedCategory !== 'all') {
      result = result.filter((thread) => thread.category === selectedCategory)
    }

    // Status filter
    if (selectedStatus !== 'all') {
      if (selectedStatus === 'solved') {
        result = result.filter((thread) => thread.isSolved)
      } else if (selectedStatus === 'unsolved') {
        result = result.filter((thread) => !thread.isSolved)
      } else if (selectedStatus === 'hot') {
        result = result.filter((thread) => thread.isHot)
      } else if (selectedStatus === 'pinned') {
        result = result.filter((thread) => thread.isPinned)
      }
    }

    // Level filter
    if (selectedLevel !== 'all') {
      result = result.filter((thread) => thread.level === selectedLevel)
    }

    return result
  }, [threads, searchQuery, selectedCategory, selectedStatus, selectedLevel])

  const handleClear = () => {
    setSearchQuery('')
    setSelectedCategory('all')
    setSelectedStatus('all')
    setSelectedLevel('all')
  }

  // Call onFilterChange whenever filtered threads change
  useMemo(() => {
    onFilterChange(filtered)
  }, [filtered, onFilterChange])

  return (
    <div className="flex flex-col gap-4 mb-6">

      <div className="flex gap-3 flex-wrap">
        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
          <SelectTrigger className="w-40 border-zinc-200">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Grammar">Grammar</SelectItem>
            <SelectItem value="Vocabulary">Vocabulary</SelectItem>
            <SelectItem value="Pronunciation">Pronunciation</SelectItem>
            <SelectItem value="Culture">Culture</SelectItem>
            <SelectItem value="Phrases">Phrases</SelectItem>
            <SelectItem value="Writing">Writing</SelectItem>
            <SelectItem value="General">General</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
          <SelectTrigger className="w-40 border-zinc-200">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Threads</SelectItem>
            <SelectItem value="solved">Solved</SelectItem>
            <SelectItem value="unsolved">Unsolved</SelectItem>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="pinned">Pinned</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
          <SelectTrigger className="w-40 border-zinc-200">
            <SelectValue placeholder="Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Beginner">Beginner</SelectItem>
            <SelectItem value="Intermediate">Intermediate</SelectItem>
            <SelectItem value="Advanced">Advanced</SelectItem>
            <SelectItem value="All Levels">All Levels</SelectItem>
          </SelectContent>
        </Select>

        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClear}
            className="text-zinc-500 hover:text-zinc-900"
          >
            <X className="w-4 h-4 mr-1" />
            Clear
          </Button>
        )}
      </div>
    </div>
  )
}
