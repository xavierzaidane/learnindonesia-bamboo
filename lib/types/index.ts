export interface Lesson {
  id: string
  title: string
  slug: string
  duration: string // e.g. "12 min"
  type: 'video' | 'reading' | 'quiz' | 'exercise'
  isFree: boolean
  isCompleted?: boolean
}

export interface Module {
  id: string
  title: string
  lessons: Lesson[]
}

export interface Course {
  id: string
  slug: string
  title: string
  description: string
  longDescription: string
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  category: 'Vocabulary' | 'Grammar' | 'Speaking' | 'Reading' | 'Writing' | 'Culture'
  thumbnail: string // use picsum.photos or unsplash placeholder
  instructor: {
    name: string
    avatar: string
    bio: string
  }
  duration: string // e.g. "4 hours 30 min"
  totalLessons: number
  studentsEnrolled: number
  rating: number // 1–5
  reviewCount: number
  tags: string[]
  learnings: string[] // what students will learn
  modules: Module[]
  isPopular?: boolean
  isFeatured?: boolean
  isNew?: boolean
}

export interface LibraryTopic {
  id: string
  slug: string
  title: string
  description: string
  category: 'Grammar' | 'Vocabulary' | 'Pronunciation' | 'Culture' | 'Phrases' | 'Writing'
  level: 'Beginner' | 'Intermediate' | 'Advanced'
  thumbnail: string
  tags: string[]
  starterQuestions: string[]
  responses: string[]
  isPopular?: boolean
  isFeatured?: boolean
}

export interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
  isStreaming?: boolean
}
