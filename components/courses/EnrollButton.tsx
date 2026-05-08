'use client'

import { useState } from 'react'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { toast } from 'sonner'

interface EnrollButtonProps {
  courseTitle: string
}

export function EnrollButton({ courseTitle }: EnrollButtonProps) {
  const [isEnrolled, setIsEnrolled] = useState(false)

  const handleEnroll = () => {
    setIsEnrolled(true)
    toast.success(`You're enrolled in ${courseTitle}!`)
  }

  if (isEnrolled) {
    return (
      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
            <Check className="w-3 h-3 mr-1" />
            Enrolled
          </Badge>
        </div>
        <Button variant="outline" className="w-full" size="lg" disabled>
          Continue Learning
        </Button>
      </div>
    )
  }

  return (
    <Button onClick={handleEnroll} size="lg" className="w-full">
      Enroll for Free
    </Button>
  )
}
