'use client'

import { useState, useMemo } from 'react'
import { library } from '@/lib/data/library'
import { LibraryCard } from '@/components/library/LibraryCard'

import type { LibraryTopic } from '@/lib/types'

export default function LibraryPage() {
  const [filteredTopics, setFilteredTopics] = useState<LibraryTopic[]>(library)

  // Featured topic
  const featuredTopic = library.find((t) => t.isFeatured)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
       <div className="py-24 pt-40 pb-15 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-primary/20 to-primary/20 max-w-[1230px] mx-auto rounded-br-[100px] rounded-bl-[100px] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl lg:text-[4.7rem] font-medium leading-[0.95] text-brand-dark tracking-tight text-center mb-4">
            Knowledge
            <span className="relative inline-block px-1">
              <span className="relative z-20 text-primary">Library<span className="absolute inset-0 bg-primary -z-10 rounded-lg transform -skew-x-3 scale-110 opacity-20"></span></span>
              <svg className="absolute -bottom-2 left-0 w-full h-4 z-10" viewBox="0 0 100 12" preserveAspectRatio="none" fill="none">
                <path d="M2,8 Q25,2 50,8 T98,6" stroke="#3f5ec2" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h1>
          <p className="text-xl text-center text-gray-600 mb-8 font-medium max-w-xl mx-auto">
            Explore focused topics with AI-powered chat interactions
          </p>

            {/* Search Bar */}
          <div className="w-full max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                className="w-full bg-white px-6 py-3 rounded-full border outline-none shadow-lg transition-colors"
              />
              <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pb-20 pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Featured Topic */}
        {featuredTopic && (
          <div className="space-y-6 mb-5">

            <LibraryCard topic={featuredTopic} />
          </div>
        )}



        {/* Topics List */}
        {filteredTopics.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">No topics found</h2>
            <p className="text-gray-600">Try adjusting your filters to find a topic.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredTopics.map((topic) => (
              <LibraryCard key={topic.id} topic={topic} />
            ))}
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(10px, -10px) scale(1.03);
          }
          50% {
            transform: translate(-10px, 10px) scale(0.97);
          }
          75% {
            transform: translate(-5px, -5px) scale(1.01);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-blob {
          animation: blob 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

