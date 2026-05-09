import { Lightbulb } from 'lucide-react'
import type { NewsBlock } from '@/lib/types'

interface NewsArticleProps {
  blocks: NewsBlock[]
}

export function NewsArticle({ blocks }: NewsArticleProps) {
  return (
    <div>
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h2
              key={`${block.type}-${index}`}
              className="text-xl font-medium text-zinc-900 mt-10 mb-4 pb-2 border-b border-zinc-100"
            >
              {block.content}
            </h2>
          )
        }

        if (block.type === 'subheading') {
          return (
            <h3
              key={`${block.type}-${index}`}
              className="text-base font-medium text-zinc-900 mt-6 mb-3"
            >
              {block.content}
            </h3>
          )
        }

        if (block.type === 'quote') {
          return (
            <blockquote
              key={`${block.type}-${index}`}
              className="border-l-4 border-zinc-900 pl-5 py-1 my-6 bg-zinc-50 rounded-r-xl pr-5"
            >
              <p className="text-sm text-zinc-600 italic leading-7">{block.content}</p>
            </blockquote>
          )
        }

        if (block.type === 'tip') {
          return (
            <div
              key={`${block.type}-${index}`}
              className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 mb-6 flex gap-3"
            >
              <Lightbulb className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
              <p className="text-sm text-amber-900 leading-7">{block.content}</p>
            </div>
          )
        }

        if (block.type === 'list') {
          return (
            <ul key={`${block.type}-${index}`} className="mb-6 flex flex-col gap-2">
              {(block.items ?? []).map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-400 mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          )
        }

        return (
          <p
            key={`${block.type}-${index}`}
            className="text-base text-zinc-700 leading-8 mb-6"
          >
            {block.content}
          </p>
        )
      })}
    </div>
  )
}
