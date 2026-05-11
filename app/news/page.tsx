'use client'

import { useState } from 'react'
import { NewsCard } from '@/components/news/NewsCard'
import { NewsListing } from '@/components/news/NewsListing'
import { NewsFilters } from '@/components/news/NewsFilters'
import { newsPosts } from '@/lib/data/news'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function NewsPage() {
	const [filteredPosts, setFilteredPosts] = useState(newsPosts)
	const recentNews = newsPosts.slice(0, 5)

	return (
		<div className="min-h-screen">
            {/* Hero Section */}
       <div className="py-24 pt-40 pb-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/20 to-primary/20 max-w-[1230px] mx-auto rounded-br-[100px] rounded-bl-[100px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[4.7rem] font-medium leading-[0.95] text-brand-dark tracking-tight text-center mb-6">
            Knowledge
            <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary font-serif">Library<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-110 opacity-20"></span></span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                <path d="M2,8 Q25,2 50,8 T98,6" stroke="#3f5ec2" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8 font-medium max-w-xl mx-auto">
            Explore focused topics with AI-powered chat interactions
          </p>


        </div>
       
      </div>

           <div className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
				{/* Filters */}
				<div className="mb-10">
					<NewsFilters posts={newsPosts} onFilterChange={setFilteredPosts} />
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
					{/* Main Content */}
					<div className="lg:col-span-3">
						<NewsListing posts={filteredPosts} />
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
											<AccordionTrigger className="text-sm font-normal hover:text-gray-900">
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
			</div>
      
		</div>
	)
}
