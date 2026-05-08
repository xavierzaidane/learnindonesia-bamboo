'use client'

import { Search, X } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

interface CourseFiltersProps {
  level: string
  category: string
  sortBy: string
  searchQuery: string
  onLevelChange: (level: string) => void
  onCategoryChange: (category: string) => void
  onSortChange: (sort: string) => void
  onSearchChange: (query: string) => void
  onClearFilters: () => void
}

const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']
const categories = [
  'All',
  'Vocabulary',
  'Grammar',
  'Speaking',
  'Reading',
  'Writing',
  'Culture',
]
const sortOptions = [
  { value: 'popular', label: 'Most Popular' },
  { value: 'newest', label: 'Newest' },
  { value: 'rating', label: 'Highest Rated' },
]

export function CourseFilters({
  level,
  category,
  sortBy,
  searchQuery,
  onLevelChange,
  onCategoryChange,
  onSortChange,
  onSearchChange,
  onClearFilters,
}: CourseFiltersProps) {
  const hasActiveFilters =
    level !== 'All' || category !== 'All' || searchQuery !== '' || sortBy !== 'popular'

  const activeFilterCount = [
    level !== 'All' ? 1 : 0,
    category !== 'All' ? 1 : 0,
    searchQuery !== '' ? 1 : 0,
    sortBy !== 'popular' ? 1 : 0,
  ].reduce((a, b) => a + b, 0)

  return (
    <div className="sticky top-0 z-20 bg-background/95 backdrop-blur support-[backdrop-filter]:bg-background/60 border-b">
      <div className="p-4 md:p-6 max-w-7xl mx-auto space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Search courses by title or tags..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Level Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Level</label>
            <ToggleGroup type="single" value={level} onValueChange={onLevelChange}>
              {levels.map((lv) => (
                <ToggleGroupItem key={lv} value={lv} className="text-xs">
                  {lv}
                </ToggleGroupItem>
              ))}
            </ToggleGroup>
          </div>

          {/* Category Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Category</label>
            <Select value={category} onValueChange={onCategoryChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Sort Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Sort By</label>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((opt) => (
                  <SelectItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Active Filters Badge & Clear Button */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Active filters:</span>
              <Badge variant="secondary">{activeFilterCount}</Badge>
            </div>
            <Button variant="ghost" size="sm" onClick={onClearFilters}>
              <X className="w-4 h-4 mr-1" />
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
