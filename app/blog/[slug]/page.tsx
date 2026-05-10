import { notFound } from 'next/navigation'
import { blogPosts } from '@/lib/data/blog'
import { BlogDetails } from '@/components/blog/BlogDetails'

interface BlogPageProps {
  params: Promise<{
    slug: string
  }>
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPage({ params }: BlogPageProps) {
  const resolvedParams = await params
  const post = blogPosts.find((item) => item.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <BlogDetails post={post} />
      </div>
    </div>
  )
}
