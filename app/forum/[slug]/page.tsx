import { notFound } from 'next/navigation'
import { forumThreads } from '@/lib/data/forum'
import { ThreadPost } from '@/components/forum/ThreadPost'

interface ThreadPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return forumThreads.map((thread) => ({
    slug: thread.slug,
  }))
}

export default async function ThreadPage({ params }: ThreadPageProps) {
  const { slug } = await params
  const thread = forumThreads.find((t) => t.slug === slug)

  if (!thread) {
    notFound()
  }

  return (
    <div className="min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <ThreadPost thread={thread} />
      </div>
    </div>
  )
}
