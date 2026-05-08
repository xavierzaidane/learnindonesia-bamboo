import { notFound } from 'next/navigation'
import { Star, Users, Clock, Award, Video, BookOpen } from 'lucide-react'
import { courses } from '@/lib/data/courses'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CourseDetailTabs } from '@/components/courses/CourseDetailTabs'
import { EnrollButton } from '@/components/courses/EnrollButton'
import { cn } from '@/lib/utils'

export function generateStaticParams() {
  return courses.map((course) => ({
    slug: course.slug,
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

const levelColors = {
  Beginner: 'bg-green-100 text-green-700',
  Intermediate: 'bg-amber-100 text-amber-700',
  Advanced: 'bg-red-100 text-red-700',
}

// Dummy reviews
const dummyReviews = [
  {
    id: '1',
    name: 'Sarah Johnson',
    avatar: 'https://i.pravatar.cc/80?u=sarah',
    rating: 5,
    comment:
      'Excellent course! The instructor explains everything clearly and the material is very well organized.',
    date: '2 weeks ago',
  },
  {
    id: '2',
    name: 'Muhammad Ali',
    avatar: 'https://i.pravatar.cc/80?u=ali',
    rating: 5,
    comment:
      'Super helpful for learning conversational Indonesian. I can already have basic conversations!',
    date: '1 month ago',
  },
  {
    id: '3',
    name: 'Lisa Chen',
    avatar: 'https://i.pravatar.cc/80?u=lisa',
    rating: 4,
    comment:
      'Great course overall. Some sections could use more practice exercises, but very informative.',
    date: '1 month ago',
  },
]

export const metadata = {
  title: 'Course Details',
}

export default async function CourseDetailPage({ params }: PageProps) {
  const resolvedParams = await params
  const course = courses.find((c) => c.slug === resolvedParams.slug)

  if (!course) {
    notFound()
  }

  // Calculate what's included
  const hasVideos = course.modules.some((m) =>
    m.lessons.some((l) => l.type === 'video')
  )
  const hasReadings = course.modules.some((m) =>
    m.lessons.some((l) => l.type === 'reading')
  )
  const hasQuizzes = course.modules.some((m) =>
    m.lessons.some((l) => l.type === 'quiz')
  )
  const hasExercises = course.modules.some((m) =>
    m.lessons.some((l) => l.type === 'exercise')
  )

  return (
    <div className="pt-25 pb-20 items-center justify-between gap-12 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="p-4">
        <div className="max-w-7xl mx-auto">
          <Badge className="mb-4">{course.level}</Badge>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4">{course.title}</h1>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            {course.longDescription}
          </p>

          {/* Stats */}
          <div className="flex gap-6 flex-wrap text-sm">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 fill-orange-400 text-orange-400" />
              <span className="font-semibold">{course.rating}</span>
              <span className="text-muted-foreground">({course.reviewCount} reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>{course.studentsEnrolled.toLocaleString()} students</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{course.duration}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex gap-2 mt-6 flex-wrap">
            {course.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2">
            {/* Course Thumbnail */}
               <img src="/assets/anak.png" alt="anak indonesia" className='w-full aspect-video rounded-3xl mb-8 object-cover' />

            {/* Badges */}
            <div className="flex gap-2 mb-8 flex-wrap">
              <Badge className={cn('text-xs', levelColors[course.level])}>
                {course.level}
              </Badge>
              <Badge variant="outline">{course.category}</Badge>
            </div>

            {/* Tabs */}
            <CourseDetailTabs course={course} dummyReviews={dummyReviews} />
          </div>

          {/* Right Column - Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Course Card */}
              <Card className="overflow-hidden">

                          <img src="/assets/anak.png" alt="anak indonesia" className='w-full aspect-video' />
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Video className="w-4 h-4" />
                      <span>{course.totalLessons} Lessons</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Badge className={cn('text-xs', levelColors[course.level])}>
                        {course.level}
                      </Badge>
                    </div>
                  </div>

                  {/* Enroll Button */}
                  <EnrollButton courseTitle={course.title} />

                  {/* Course Includes */}
                  <div className="pt-4 border-t space-y-3">
                    <h4 className="font-semibold text-sm">This course includes:</h4>
                    <ul className="space-y-2 text-sm">
                      {hasVideos && (
                        <li className="flex items-center gap-2">
                          <Video className="w-4 h-4" />
                          Video lessons
                        </li>
                      )}
                      {hasReadings && (
                        <li className="flex items-center gap-2">
                          <BookOpen className="w-4 h-4" />
                          Reading materials
                        </li>
                      )}
                      {hasQuizzes && (
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full border-2 border-current" />
                          Quizzes
                        </li>
                      )}
                      {hasExercises && (
                        <li className="flex items-center gap-2">
                          <div className="w-4 h-4 rounded border border-current" />
                          Exercises
                        </li>
                      )}
                      <li className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        Certificate
                      </li>
                    </ul>
                  </div>

                  {/* Share Button */}
                  <Button variant="outline" className="w-full">
                    Share Course
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
