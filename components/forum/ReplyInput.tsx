'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface ReplyInputProps {
  threadTitle: string
}

export function ReplyInput({ threadTitle }: ReplyInputProps) {
  const [input, setInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (input.trim()) {
      setSubmitted(true)
      setInput('')
      // Reset after 3 seconds for demo purposes
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  if (submitted) {
    return (
      <div className="border border-green-200 bg-green-50 rounded-2xl p-5 flex items-center gap-3">
        <CheckCircle className="w-5 h-5 text-green-600 shrink-0" />
        <p className="text-sm text-green-800">Your reply has been posted!</p>
      </div>
    )
  }

  return (
    <div className="border border-zinc-200 rounded-2xl p-5 bg-white">
      <p className="text-sm font-medium text-zinc-900 mb-3">Add a reply</p>
      <textarea
        placeholder="Share your knowledge or ask a follow-up..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full resize-none border border-zinc-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 min-h-24 max-h-48"
      />
      <div className="flex justify-end mt-3">
        <button
          onClick={handleSubmit}
          disabled={!input.trim()}
          className="bg-zinc-900 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-zinc-700 disabled:opacity-40 transition-colors"
        >
          Post reply
        </button>
      </div>
    </div>
  )
}
