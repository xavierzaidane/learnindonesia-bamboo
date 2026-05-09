'use client'

import { useState, useMemo } from 'react'
import { forumThreads } from '@/lib/data/forum'
import { ForumCard } from '@/components/forum/ForumCard'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

import { Checkbox } from '@/components/ui/checkbox'
import { Field } from '@/components/ui/field'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

export default function ForumPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedLevels, setSelectedLevels] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string[]>([])

  // Filter logic
  const filteredThreads = useMemo(() => {
    let result = forumThreads

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
    if (selectedCategories.length > 0) {
      result = result.filter((thread) => selectedCategories.includes(thread.category))
    }

    // Level filter
    if (selectedLevels.length > 0) {
      result = result.filter((thread) => selectedLevels.includes(thread.level))
    }

    // Status filter
    if (selectedStatus.length > 0) {
      result = result.filter((thread) => {
        if (selectedStatus.includes('solved') && thread.isSolved) return true
        if (selectedStatus.includes('unsolved') && !thread.isSolved) return true
        if (selectedStatus.includes('hot') && thread.isHot) return true
        if (selectedStatus.includes('pinned') && thread.isPinned) return true
        return false
      })
    }

    return result
  }, [searchQuery, selectedCategories, selectedLevels, selectedStatus])

  const allThreadsToDisplay = filteredThreads

  // Handler functions
  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev =>
      checked ? [...prev, category] : prev.filter(c => c !== category)
    )
  }

  const handleLevelChange = (level: string, checked: boolean) => {
    setSelectedLevels(prev =>
      checked ? [...prev, level] : prev.filter(l => l !== level)
    )
  }

  const handleStatusChange = (status: string, checked: boolean) => {
    setSelectedStatus(prev =>
      checked ? [...prev, status] : prev.filter(s => s !== status)
    )
  }

  const hasActiveFilters =
    searchQuery ||
    selectedCategories.length > 0 ||
    selectedLevels.length > 0 ||
    selectedStatus.length > 0

  const handleClearFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedLevels([])
    setSelectedStatus([])
  }

  return (
    <div className="min-h-screen bg-zinc-50">
       <div className="py-24 pt-40 pb-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/20 to-primary/20 max-w-[1230px] mx-auto rounded-br-[100px] rounded-bl-[100px] relative overflow-hidden">
          <h1 className="text-5xl md:text-6xl lg:text-[4.7rem] font-medium leading-[0.95] text-brand-dark tracking-tight text-center mb-6">
            Discuss
            <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary font-serif">Anything<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-110 opacity-20"></span></span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                <path d="M2,8 Q25,2 50,8 T98,6" stroke="#3f5ec2" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8 font-medium max-w-xl mx-auto">
            Hundreds of high-quality Indonesian language courses ready to help your learning journey
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Find any threads..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white px-6 py-3 rounded-full border outline-none shadow-lg transition-colors"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 ">
            <div className="sticky top-24 space-y-6">
            {/* About */}
            <div className="bg-white rounded-3xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-md text mb-3">About Forum</h3>
              <p className="text-sm text-zinc-600 leading-6">
                A community space where Indonesian language learners help each other master grammar, vocabulary, pronunciation, and more.
              </p>
            </div>

            {/* Filters */}
            <div className="p-4">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-semibold text-md text">Filters</h3>
                {hasActiveFilters && (
                  <Button
                    onClick={handleClearFilters}
                    variant="ghost"
                    size="sm"
                    className="h-auto p-0 text-xs text-blue-600 hover:text-blue-700"
                  >
                    Clear all
                  </Button>
                )}
              </div>

              <Accordion type="single" collapsible defaultValue="categories" className="w-full">
                {/* Categories */}
                <AccordionItem value="categories">
                  <AccordionTrigger className="text-sm">Categories</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {['Grammar', 'Vocabulary', 'Pronunciation', 'Culture', 'Phrases', 'Writing', 'General'].map(
                        (category) => (
                          <Field key={category} orientation="horizontal">
                            <Checkbox
                              id={`category-${category}`}
                              checked={selectedCategories.includes(category)}
                              onCheckedChange={(checked) =>
                                handleCategoryChange(category, checked as boolean)
                              }
                            />
                            <Label
                              htmlFor={`category-${category}`}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {category}
                            </Label>
                          </Field>
                        )
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Status */}
                <AccordionItem value="status">
                  <AccordionTrigger className="text-sm">Status</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {[
                        { id: 'solved', label: 'Solved' },
                        { id: 'unsolved', label: 'Unsolved' },
                        { id: 'hot', label: 'Hot' },
                        { id: 'pinned', label: 'Pinned' },
                      ].map((status) => (
                        <Field key={status.id} orientation="horizontal">
                          <Checkbox
                            id={`status-${status.id}`}
                            checked={selectedStatus.includes(status.id)}
                            onCheckedChange={(checked) =>
                              handleStatusChange(status.id, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={`status-${status.id}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {status.label}
                          </Label>
                        </Field>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Levels */}
                <AccordionItem value="levels">
                  <AccordionTrigger className="text-sm">Levels</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                        <Field key={level} orientation="horizontal">
                          <Checkbox
                            id={`level-${level}`}
                            checked={selectedLevels.includes(level)}
                            onCheckedChange={(checked) =>
                              handleLevelChange(level, checked as boolean)
                            }
                          />
                          <Label
                            htmlFor={`level-${level}`}
                            className="text-sm font-normal cursor-pointer"
                          >
                            {level}
                          </Label>
                        </Field>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
          </div>
          {/* Main Feed */}
          <div className="lg:col-span-3">
            {/* Threads list - Reddit style */}
            {allThreadsToDisplay.length > 0 ? (
              <div className="space-y-3">
                {allThreadsToDisplay.map((thread) => (
                  <ForumCard key={thread.id} thread={thread} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-lg border border-zinc-200">
                <p className="text-zinc-500 text-sm">
                  No threads found matching your filters.
                </p>
              </div>
            )}
          </div>

          
        </div>
      </div>
    </div>
  )
}
