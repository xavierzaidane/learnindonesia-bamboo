import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { NewsArticle } from '@/components/news/NewsArticle'
import type { NewsPost } from '@/lib/types'
import { blogCategoryBadgeStyles } from '@/lib/data/blog'
import { cn } from '@/lib/utils'
import { blogPosts } from '@/lib/data/blog'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

interface BlogDetailsProps {
  post: NewsPost
}

export function BlogDetails({ post }: BlogDetailsProps) {
  const recentBlogs = blogPosts.slice(0, 5)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      <div className="lg:col-span-3 pt-16">
        <div className="border border-zinc-200 rounded-3xl bg-white p-6 mb-6">
          <nav className="text-xs text-zinc-400 flex items-center gap-2 mb-6">
            <Link href="/blog" className="hover:text-zinc-600 transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3" />
            <span>{post.category}</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-zinc-600 truncate">{post.title}</span>
          </nav>

          <span
            className={cn(
              'text-xs font-medium px-2.5 py-1 rounded-full',
              blogCategoryBadgeStyles[post.category]
            )}
          >
            {post.category}
          </span>

          <h1 className="text-3xl font-medium text-zinc-900 mt-3 mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-zinc-500 text-base mb-6">{post.excerpt}</p>

          <div className="flex items-center gap-3 py-4 border-t border-b border-zinc-100">
            <Image
              src={post.author.avatar}
              alt={post.author.name}
              width={36}
              height={36}
              className="rounded-full w-9 h-9"
              unoptimized
            />
            <div>
              <p className="text-sm font-medium text-zinc-900">{post.author.name}</p>
              <p className="text-xs text-zinc-400">{post.author.role}</p>
            </div>
            <div className="ml-auto flex items-center gap-3 text-xs text-zinc-400">
              <span>{post.publishedAt}</span>
              <span>·</span>
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="relative aspect-video w-full rounded-2xl overflow-hidden mt-8">
            <Image
              src={post.thumbnail}
              alt={post.title}
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="bg-white border border-zinc-200 rounded-3xl p-6">
          <NewsArticle blocks={post.content} />

          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-zinc-100">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="border border-zinc-200 text-zinc-500 text-xs px-3 py-1 rounded-full"
              >
                #{tag}
              </span>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 border border-zinc-200 px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-zinc-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Back to Blog
            </Link>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="lg:col-span-1">
        <div className="sticky top-25 space-y-6">
          {/* About */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-4">
            <h3 className="font-semibold text-md mb-3">About Blog</h3>
            <p className="text-sm text-zinc-600 leading-6">
              Explore in-depth articles on language learning, cultural insights, practical tips, and expert guidance to enhance your Indonesian journey.
            </p>
          </div>

          {/* Recent Blog Posts */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-4">
            <h3 className="font-semibold text-md mb-3">Recent Articles</h3>
            <Accordion type="single" collapsible className="w-full">
              {recentBlogs.map((blogPost) => (
                <AccordionItem key={blogPost.id} value={blogPost.id}>
                  <AccordionTrigger className="text-sm font-normal hover:no-underline">
                    {blogPost.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <p className="text-xs text-zinc-600 leading-5">
                        {blogPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <span>{blogPost.publishedAt}</span>
                        <span>·</span>
                        <span>{blogPost.readTime}</span>
                      </div>
                      <a
                        href={`/blog/${blogPost.slug}`}
                        className="inline-block text-xs font-medium text-primary hover:text-primary/80 transition-colors mt-2"
                      >
                        Read more →
                      </a>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Author Info */}
          <div className="bg-white rounded-3xl border border-zinc-200 p-4">
            <h3 className="font-semibold text-md text-zinc-900 mb-4">Author</h3>
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                width={40}
                height={40}
                className="w-10 h-10 rounded-full object-cover"
                unoptimized
              />
              <div>
                <p className="text-sm font-medium text-zinc-900">{post.author.name}</p>
                <p className="text-xs text-zinc-400 mt-1">{post.author.role}</p>
              </div>
            </div>
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="bg-white rounded-3xl border border-zinc-200 p-4">
              <h3 className="font-semibold text-md text-zinc-900 mb-3">Tags</h3>
              <div className="flex gap-2 flex-wrap">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-zinc-200 text-zinc-400 text-xs px-2.5 py-1 rounded-full hover:bg-zinc-50 cursor-pointer transition"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
