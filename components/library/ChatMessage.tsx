'use client'

import type { ChatMessage as ChatMessageType } from '@/lib/types'

interface ChatMessageProps {
  message: ChatMessageType
}

const FormattedContent = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*)/g)

  return (
    <>
      {parts.map((part, idx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={idx}>{part.slice(2, -2)}</strong>
          )
        }
        return (
          <span key={idx}>
            {part.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < part.split('\n').length - 1 && <br />}
              </span>
            ))}
          </span>
        )
      })}
    </>
  )
}

export function ChatMessage({ message }: ChatMessageProps) {
  const formatTime = (date: Date) => {
    return new Date(date).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  }

  if (message.role === 'user') {
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-xs bg-primary text-white rounded-2xl px-4 py-3">
          <p className="text-lg">{message.content}</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex items-start gap-3 mb-4">
      <div className="shrink-0 w-7 h-7 rounded-sm bg-primary flex items-center justify-center">
         <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
          <div className="w-3 h-3 border-2 border-bg-base rounded-sm" />
        </div>
      </div>
      <div className="flex-1">
        <div className="px-4">
          <p className="text-lg text-zinc-900">
            <FormattedContent text={message.content} />
          </p>
        </div>
    
      </div>
    </div>
  )
}
