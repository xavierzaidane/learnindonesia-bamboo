import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { NewsArticle } from './NewsArticle'
import type { NewsPost } from '@/lib/types'
import { categoryBadgeStyles, newsPosts } from '@/lib/data/news'
import { cn } from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

interface NewsDetailsProps {
	post: NewsPost
}

export function NewsDetails({ post }: NewsDetailsProps) {
        const recentNews = newsPosts.slice(0, 5)
	return (
		<div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
			<div className="lg:col-span-3 pt-16">
				<div className="p-6 mb-6">
					<nav className="text-xs text-zinc-400 flex items-center gap-2 mb-6">
						<Link href="/news" className="hover:text-zinc-600 transition-colors">
							News
						</Link>
						<ChevronRight className="w-3 h-3" />
						<span>{post.category}</span>
						<ChevronRight className="w-3 h-3" />
						<span className="text-zinc-600 truncate">{post.title}</span>
					</nav>

					<span
						className={cn(
							'text-xs font-medium px-2.5 py-1 rounded-full',
							categoryBadgeStyles[post.category]
						)}
					>
						{post.category}
					</span>

					<h1 className="text-4xl font-semibold text-zinc-900 mt-3 mb-3 leading-tight">
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
							referrerPolicy="no-referrer"
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

				<div className="p-6">
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
				</div>
			</div>

			{/* Sidebar */}
					<div className="lg:col-span-1 ">
						<div className="sticky top-25 space-y-6">
							{/* About */}
							<div className="bg-white rounded-3xl border border-zinc-200 p-4">
								<h3 className="font-semibold text-md mb-3">About News</h3>
								<p className="text-sm text-zinc-600 leading-6">
									Stay updated with platform news, language tips, cultural insights, learning guides, and community updates to enhance your Indonesian journey.
								</p>
							</div>

							{/* Recent News */}
							<div className="bg-white rounded-3xl border border-zinc-200 p-4">
								<h3 className="font-semibold text-md mb-3">Recent News</h3>
								<Accordion type="single" collapsible className="w-full">
									{recentNews.map((post) => (
										<AccordionItem key={post.id} value={post.id}>
											<AccordionTrigger className="text-sm font-normal hover:no-underline">
												{post.title}
											</AccordionTrigger>
											<AccordionContent>
												<div className="space-y-2">
													<p className="text-xs text-zinc-600 leading-5">
														{post.excerpt}
													</p>
													<div className="flex items-center gap-2 text-xs text-zinc-500">
														<span>{post.publishedAt}</span>
														<span>·</span>
														<span>{post.readTime}</span>
													</div>
													<a
														href={`/news/${post.slug}`}
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
						</div>
					</div>
		</div>
	)
}
