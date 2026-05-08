'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { v4 as uuidv4 } from 'uuid'
import type { LibraryTopic, ChatMessage as ChatMessageType } from '@/lib/types'

import { ChatInput } from './ChatInput'
import { ChatMessage } from './ChatMessage'

interface LibraryChatProps {
  topic: LibraryTopic
}

function TypingIndicator() {
  return (
    <div className="flex items-start gap-3">
      <div className="shrink-0 w-7 h-7 rounded-sm bg-primary flex items-center justify-center">
        <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-bg-base rounded-sm" />
        </div>
      </div>
      <div className="bg-zinc-50 border border-zinc-200 rounded-2xl  px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-zinc-400 animate-bounce"
              style={{ animationDelay: `${i * 0.15}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function EmptyState({ topic, onQuestionClick }: { topic: LibraryTopic; onQuestionClick: (q: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4 py-16 text-center">
      <h2 className="text-5xl font-medium text-zinc-900 dark:text-zinc-50 mb-2">{topic.title}</h2>
      <p className="text-lg text-zinc-500 dark:text-zinc-400 max-w-sm">{topic.description}</p>
    </div>
  )
}

export function LibraryChat({ topic }: LibraryChatProps) {
  const [messages, setMessages] = useState<ChatMessageType[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [count, setCount] = useState(0)
  const scrollRef = useRef<HTMLDivElement>(null)

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth',
      })
    }
  }, [messages, isLoading])

  const handleSend = (userMessage: string) => {
    // Add user message
    const userMsg: ChatMessageType = {
      id: uuidv4(),
      role: 'user',
      content: userMessage,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMsg])
    setIsLoading(true)

    // Simulate delay and respond with hardcoded response
    setTimeout(() => {
      const assistantContent = topic.responses[count % topic.responses.length]
      const assistantMsg: ChatMessageType = {
        id: uuidv4(),
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, assistantMsg])
      setCount((c) => c + 1)
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {messages.length === 0 ? (
        // Empty state: scrollable area with title, description, and input below
        <div ref={scrollRef} className="flex-1 overflow-y-auto flex flex-col">
          <EmptyState topic={topic} onQuestionClick={handleSend} />
          <div className="px-4 py-4">
            <ChatInput onSend={handleSend} isLoading={isLoading} starterQuestions={topic.starterQuestions} />
          </div>
        </div>
      ) : (
        // Conversation mode: messages scrollable, input fixed at bottom
        <>
          <div ref={scrollRef} className="flex-1 overflow-y-auto">
            <div className="max-w-5xl mx-auto pt-40 w-full px-4 py-6 flex flex-col gap-4">
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isLoading && <TypingIndicator />}
            </div>
          </div>
          <ChatInput onSend={handleSend} isLoading={isLoading} starterQuestions={[]} />
        </>
      )}
    </div>
  )
}
