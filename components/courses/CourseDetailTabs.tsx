'use client'

import { useState } from 'react'
import { Star, Video, BookOpen, Award } from 'lucide-react'
import type { Course } from '@/lib/types'
import { Card } from '@/components/ui/card'
import { Tabs } from '@/components/ui/vercel-tabs'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { CourseSyllabus } from '@/components/courses/CourseSyllabus'

interface CourseDetailTabsProps {
  course: Course
  dummyReviews: Array<{
    id: string
    name: string
    avatar: string
    rating: number
    comment: string
    date: string
  }>
}

export function CourseDetailTabs({ course, dummyReviews }: CourseDetailTabsProps) {
  const [activeTab, setActiveTab] = useState('overview')

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'syllabus', label: 'Syllabus' },
    { id: 'reviews', label: 'Reviews' },
  ]

  return (
    <div className="w-full">
      <Tabs tabs={tabs} onTabChange={setActiveTab} />

      <div className="mt-8 space-y-8">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <>
            <div>
              <h2 className="text-2xl font-semibold mb-4">What you&apos;ll learn</h2>
              <ul className="space-y-3">
                {course.learnings.map((learning, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="text font-bold">-</span>
                    <span>{learning}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructor Card */}
            <div>
              <h2 className="text-2xl font-bold mb-4 border-t pt-5">Your Instructor</h2>
              <Card className="p-6">
                <div className="flex gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={course.instructor.avatar} />
                    <AvatarFallback>{course.instructor.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">{course.instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{course.instructor.bio}</p>
                  </div>
                </div>
              </Card>
            </div>
          </>
        )}

        {/* Syllabus Tab */}
        {activeTab === 'syllabus' && (
          <div>
            <h2 className="text-2xl font-semibold">Course Syllabus</h2>
            <h3 className="text-sm font-sm text-muted-foreground mb-4">Explore the topics covered in this course</h3>
            <CourseSyllabus modules={course.modules} isEnrolled={false} />
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === 'reviews' && (
          <div>
            <h2 className="text-2xl font-semibold mb-6">Student Reviews</h2>
            <div className="space-y-4">
              {dummyReviews.map((review) => (
                <div key={review.id} className="bg-white w-full max-w-7xl space-y-4 p-4 rounded-3xl border border-gray-300/60 text-gray-500 text-sm">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-1">
                      {Array(review.rating)
                        .fill(0)
                        .map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                    </div>
                    <p className="text-xs">{review.date}</p>
                  </div>
                  <p className="text-gray-700">&quot;{review.comment}&quot;</p>
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={review.avatar} />
                      <AvatarFallback>{review.name[0]}</AvatarFallback>
                    </Avatar>
                    <p className="text-gray-800 font-medium">{review.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
