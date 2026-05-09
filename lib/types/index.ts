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

export interface ForumReply {
  id: string
  author: {
    name: string
    avatar: string
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Native'
  }
  content: string
  likes: number
  createdAt: string
  isAccepted?: boolean
}

export interface ForumThread {
  id: string
  slug: string
  title: string
  body: string
  category: 'Grammar' | 'Vocabulary' | 'Pronunciation' | 'Culture' | 'Phrases' | 'Writing' | 'General'
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
  author: {
    name: string
    avatar: string
    level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Native'
  }
  tags: string[]
  replies: ForumReply[]
  views: number
  createdAt: string
  isPinned?: boolean
  isSolved?: boolean
  isHot?: boolean
}

export interface NewsBlock {
  type: 'paragraph' | 'heading' | 'subheading' | 'quote' | 'tip' | 'list'
  content: string
  items?: string[]
}

export interface NewsPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category:
    | 'Platform Update'
    | 'Language Tip'
    | 'Cultural Spotlight'
    | 'Learning Guide'
    | 'Community'
    | 'Event'
  thumbnail: string
  carouselImages?: { src: string; title: string }[]
  author: {
    name: string
    avatar: string
    role: string
  }
  publishedAt: string
  readTime: string
  tags: string[]
  content: NewsBlock[]
  isFeatured?: boolean
  isNew?: boolean
}
