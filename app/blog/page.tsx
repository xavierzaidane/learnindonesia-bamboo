'use client'

import { useState } from 'react'
import { BlogCard } from '@/components/blog/BlogCard'
import { BlogListing } from '@/components/blog/BlogListing'
import { BlogFilters } from '@/components/blog/BlogFilters'
import { blogPosts } from '@/lib/data/blog'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'

export default function BlogPage() {
	const [filteredPosts, setFilteredPosts] = useState(blogPosts)
	const recentBlogs = blogPosts.slice(0, 5)

	return (
		<div className="min-h-screen">
            {/* Hero Section */}
       <div className="py-24 pt-40 pb-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/20 to-primary/20 max-w-[1230px] mx-auto rounded-br-[100px] rounded-bl-[100px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[4.7rem] font-medium leading-[0.95] text-brand-dark tracking-tight text-center mb-6">
            Discover
            <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary font-serif">Insights<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-110 opacity-20"></span></span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                <path d="M2,8 Q25,2 50,8 T98,6" stroke="#3f5ec2" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8 font-medium max-w-xl mx-auto">
            Deep dives into language learning, cultural traditions, and practical techniques
          </p>


        </div>
       
      </div>

           <div className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
				{/* Filters */}
				<div className="mb-10 ">
					<BlogFilters posts={blogPosts} onFilterChange={setFilteredPosts} />
				</div>

				<BlogListing posts={filteredPosts} />
			</div>
      </div>
	)
}
