'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { courses } from '@/lib/data/courses'
import type { Course } from '@/lib/types'
import { CourseCard } from '@/components/courses/CourseCard'
import { SelectorChips } from '@/components/ui/selector-chips'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select'
import { BookOpen, Users, Award, Mic, Book, PenTool } from 'lucide-react'

const categories = [
  { label: 'All', value: 'All', icon: <Users size={16} /> },
  { label: 'Vocabulary', value: 'Vocabulary', icon: <BookOpen size={16} /> },
  { label: 'Grammar', value: 'Grammar', icon: <PenTool size={16} /> },
  { label: 'Speaking', value: 'Speaking', icon: <Mic size={16} /> },
  { label: 'Reading', value: 'Reading', icon: <Book size={16} /> },
  { label: 'Writing', value: 'Writing', icon: <PenTool size={16} /> },
]

export default function CoursesPage() {
  const [level, setLevel] = useState('All')
  const [category, setCategory] = useState('All')
  const [sortBy, setSortBy] = useState('popular')
  const [searchQuery, setSearchQuery] = useState('')

  // Featured course
  const featuredCourse = courses.find((c) => c.isFeatured)

  // Filter and sort courses
  const filteredCourses = useMemo(() => {
    const filtered = courses.filter((course) => {
      const matchesLevel = level === 'All' || course.level === level
      const matchesCategory = category === 'All' || course.category === category
      const matchesSearch =
        searchQuery === '' ||
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        ) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())

      return matchesLevel && matchesCategory && matchesSearch
    })

    if (sortBy === 'popular') {
      filtered.sort((a, b) => b.studentsEnrolled - a.studentsEnrolled)
    } else if (sortBy === 'newest') {
      filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0))
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating)
    }

    return filtered
  }, [level, category, sortBy, searchQuery])

  const handleClearFilters = () => {
    setLevel('All')
    setCategory('All')
    setSortBy('popular')
    setSearchQuery('')
  }

  const handleCategoryChange = (selected: string[]) => {
    setCategory(selected.length > 0 ? selected[0] : 'All')
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="py-24 pt-40 pb-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/20 to-primary/20 max-w-[1230px] mx-auto rounded-br-[100px] rounded-bl-[100px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[4.7rem] font-medium leading-[0.95] text-branding-dark tracking-tight text-center mb-4">
            Find Your
            <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary">Perfect<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-110 opacity-20"></span></span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                <path d="M2,8 Q25,2 50,8 T98,6" stroke="#3f5ec2" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
            {' '}Course
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8 font-medium max-w-xl mx-auto">
            Hundreds of high-quality Indonesian language courses ready to help your learning journey
          </p>

          {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white px-6 py-3 rounded-full border outline-none shadow-lg transition-colors"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Category Filter */}
          <div className="max-w-3xl mx-auto mt-6">
            <SelectorChips
              options={categories}
              value={category !== 'All' ? [category] : []}
              onChange={handleCategoryChange}
              singleSelect
            />
          </div>
        </div>


      </div>

      {/* Main Content */}
      <div className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-8 flex justify-between items-start">
          <div className="flex gap-2">
            <Select value={level} onValueChange={setLevel}>
              <SelectTrigger className="w-40">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">All Levels</SelectItem>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most Popular</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
              </SelectContent>
            </Select>
          </div>
           <div>
            <p className="text-2xl text-black font-bold">{filteredCourses.length} <span className="font-medium text-sm text-muted-foreground">courses</span></p>
          </div>
        </div>

        {filteredCourses.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="text-center max-w-md">
              <h2 className="text-2xl font-bold mb-2">No courses found</h2>
              <p className="text-gray-600 mb-6">Try adjusting your filters to find what you&apos;re looking for.</p>
              <Button onClick={handleClearFilters} className="rounded-full">Clear Filters</Button>
            </div>
          </div>
        ) : (
          <>
           

            {/* Courses Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>

   
          </>
        )}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -10px) scale(1.03);
          }
          50% {
            transform: translate(-10px, 10px) scale(0.97);
          }
          75% {
            transform: translate(-5px, -5px) scale(1.01);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
