import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { LessonList } from './LessonList'
import type { Module } from '@/lib/types'

interface CourseSyllabusProps {
  modules: Module[]
  isEnrolled?: boolean
}

function calculateModuleDuration(lessons: { duration: string }[]): string {
  const totalMinutes = lessons.reduce((acc, lesson) => {
    const minutes = parseInt(lesson.duration.split(' ')[0])
    return acc + minutes
  }, 0)

  const hours = Math.floor(totalMinutes / 60)
  const minutes = totalMinutes % 60

  if (hours === 0) return `${minutes} min`
  if (minutes === 0) return `${hours} h`
  return `${hours}h ${minutes}m`
}

export function CourseSyllabus({ modules, isEnrolled = false }: CourseSyllabusProps) {
  return (
    <div className="space-y-4 border-t">
      <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
        {modules.map((module, index) => {
          const moduleDuration = calculateModuleDuration(module.lessons)

          return (
            <AccordionItem key={module.id} value={`item-${index}`}>
              <AccordionTrigger className="hover:no-underline">
                <div className="flex items-center gap-3 text-left flex-1">
                  <div>
                    <p className="font-medium">{module.title}</p>
                    <div className="flex gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {module.lessons.length} lessons
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {moduleDuration}
                      </Badge>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4">
                  <LessonList lessons={module.lessons} isEnrolled={isEnrolled} />
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}
