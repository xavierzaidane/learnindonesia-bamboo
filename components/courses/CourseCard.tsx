import Link from 'next/link'
import { Star, Users, Clock, Play, BookOpen, CircleHelp, PenLine } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import type { Course } from '@/lib/types'
import { cn } from '@/lib/utils'

interface CourseCardProps {
  course: Course
}

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
}

const categoryColors: Record<string, string> = {
  'Vocabulary': 'bg-blue-600 text-white',
  'Grammar': 'bg-purple-600 text-white',
  'Speaking': 'bg-green-600 text-white',
  'Reading': 'bg-orange-600 text-white',
  'Writing': 'bg-pink-600 text-white',
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <div className="group relative overflow-hidden cursor-pointer rounded-t-4xl transition-all duration-300">
        {/* Image Section */}
        <div className="relative h-72 overflow-hidden rounded-b-4xl">

          <img src="/assets/anak.png" alt="anak indonesia" className='w-full h-full object-cover' />


          {/* Gradient Content Overlay - bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/70 to-transparent p-6 rounded-b-3xl">
            <h3 className="text-xl font-semibold text-white mb-1 break-words line-clamp-2">
              {course.title}
            </h3>
            <p className="text-sm text-white/80 font-normal">
              {course.category} • {course.duration}
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="py-6 px-4">
          {/* Rating and Level */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
                <span className="text-base font-bold text-gray-900">{course.rating}</span>
                <span className="text-sm text-gray-500">({course.reviewCount})</span>
              </div>
              <Badge className={cn('text-xs font-normal rounded-full', levelColors[course.level])}>
                {course.level}
              </Badge>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">{course.totalLessons} lessons</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-4 line-clamp-2 break-words">
            {course.description}
          </p>

          {/* Instructor Info */}
          <div className="flex items-center gap-2 mb-4">
            <img
              src={course.instructor.avatar}
              alt={course.instructor.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 truncate">
                {course.instructor.name}
              </p>
              <p className="text-xs text-gray-500 truncate">{course.instructor.bio}</p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Users className="w-3.5 h-3.5" />
              <span className="font-medium">{(course.studentsEnrolled / 1000).toFixed(1)}k students</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <Clock className="w-3.5 h-3.5" />
              <span className="font-medium">{course.duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
