import { notFound } from 'next/navigation'
import { library } from '@/lib/data/library'
import { LibraryChat } from '@/components/library/LibraryChat'

export function generateStaticParams() {
  return library.map((topic) => ({
    slug: topic.slug,
  }))
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export const metadata = {
  title: 'Topic Chat',
}

export default async function ChatPage({ params }: PageProps) {
  const resolvedParams = await params
  const topic = library.find((t) => t.slug === resolvedParams.slug)

  if (!topic) {
    notFound()
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden ">
      <LibraryChat topic={topic} />
    </div>
  )
}
