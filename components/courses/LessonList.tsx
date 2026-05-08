import { Play, BookOpen, CircleHelp, PenLine, Lock, Check } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import type { Lesson } from '@/lib/types'
import { cn } from '@/lib/utils'

interface LessonListProps {
  lessons: Lesson[]
  isEnrolled?: boolean
}

const lessonIcons = {
  video: Play,
  reading: BookOpen,
  quiz: CircleHelp,
  exercise: PenLine,
}

export function LessonList({ lessons, isEnrolled = false }: LessonListProps) {
  return (
    <div className="space-y-2">
      {lessons.map((lesson) => {
        const IconComponent = lessonIcons[lesson.type]
        const isLocked = !lesson.isFree && !isEnrolled

        return (
          <div
            key={lesson.id}
            className={cn(
              'flex items-center gap-3 p-3 rounded-lg border transition-colors',
              isLocked ? 'bg-muted/50 border-muted' : 'hover:bg-muted/50 border-muted'
            )}
          >
            {/* Icon */}
            <IconComponent className="w-5 h-5 text-muted-foreground flex-shrink-0" />

            {/* Lesson Title */}
            <div className="flex-1 min-w-0">
              <p className={cn('text-sm font-medium truncate', isLocked && 'text-muted-foreground')}>
                {lesson.title}
              </p>
            </div>

            {/* Badges and Icons */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {lesson.isFree && (
                <Badge variant="outline" className="text-xs">
                  Free
                </Badge>
              )}

              <Badge variant="secondary" className="text-xs whitespace-nowrap">
                {lesson.duration}
              </Badge>

              {isLocked && <Lock className="w-4 h-4 text-muted-foreground" />}

              {!isLocked && lesson.isCompleted && (
                <Check className="w-4 h-4 text-green-600" />
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}
