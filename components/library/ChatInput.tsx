'use client'

import React, { useState, useRef, useEffect, useCallback } from 'react'
import { Plus, ChevronDown, ArrowUp, X, FileText, Loader2, Check, Archive } from 'lucide-react'

/* --- ICONS --- */
const Icons = {
  Plus: Plus,
  Thinking: ({ className = '' }: { className?: string }) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M10.3857 2.50977C14.3486 2.71054 17.5 5.98724 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 9.72386 2.72386 9.5 3 9.5C3.27614 9.5 3.5 9.72386 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.5225 13.7691 3.68312 10.335 3.50879L10 3.5L9.89941 3.49023C9.67145 3.44371 9.5 3.24171 9.5 3C9.5 2.72386 9.72386 2.5 10 2.5L10.3857 2.50977ZM10 5.5C10.2761 5.5 10.5 5.72386 10.5 6V9.69043L13.2236 11.0527C13.4706 11.1762 13.5708 11.4766 13.4473 11.7236C13.3392 11.9397 13.0957 12.0435 12.8711 11.9834L12.7764 11.9473L9.77637 10.4473C9.60698 10.3626 9.5 10.1894 9.5 10V6C9.5 5.72386 9.72386 5.5 10 5.5ZM3.66211 6.94141C4.0273 6.94159 4.32303 7.23735 4.32324 7.60254C4.32324 7.96791 4.02743 8.26446 3.66211 8.26465C3.29663 8.26465 3 7.96802 3 7.60254C3.00021 7.23723 3.29676 6.94141 3.66211 6.94141ZM4.95605 4.29395C5.32146 4.29404 5.61719 4.59063 5.61719 4.95605C5.6171 5.3214 5.3214 5.61709 4.95605 5.61719C4.59063 5.61719 4.29403 5.32146 4.29395 4.95605C4.29395 4.59057 4.59057 4.29395 4.95605 4.29395ZM7.60254 3C7.96802 3 8.26465 3.29663 8.26465 3.66211C8.26446 4.02743 7.96791 4.32324 7.60254 4.32324C7.23736 4.32302 6.94159 4.0273 6.94141 3.66211C6.94141 3.29676 7.23724 3.00022 7.60254 3Z" />
    </svg>
  ),
  SelectArrow: ChevronDown,
  ArrowUp: ArrowUp,
  X: X,
  FileText: FileText,
  Loader2: Loader2,
  Check: Check,
  Archive: Archive,
}

/* --- TYPES --- */
interface AttachedFile {
  id: string
  file: File
  type: string
  preview: string | null
  uploadStatus: string
  content?: string
}

interface FilePreviewCardProps {
  file: AttachedFile
  onRemove: (id: string) => void
}

interface Model {
  id: string
  name: string
  description: string
  badge?: string
}

interface ChatInputProps {
  onSend: (message: string) => void
  isLoading: boolean
  starterQuestions?: string[]
}

/* --- COMPONENTS --- */

// File Preview Card
const FilePreviewCard: React.FC<FilePreviewCardProps> = ({ file, onRemove }) => {
  const isImage = file.type.startsWith('image/') && file.preview

  return (
    <div className="relative group flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-700  dark:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all">
      {isImage ? (
        <div className="w-full h-full relative">
          <img src={file.preview!} alt={file.file.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
        </div>
      ) : (
        <div className="w-full h-full p-3 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-zinc-200 dark:bg-zinc-700 rounded">
              <FileText className="w-4 h-4 text-zinc-600 dark:text-zinc-400" />
            </div>
            <span className="text-[10px] font-medium text-zinc-600 dark:text-zinc-400 uppercase tracking-wider truncate">
              {file.file.name.split('.').pop()}
            </span>
          </div>
          <div className="space-y-0.5">
            <p className="text-lg font-medium text-zinc-900 dark:text-zinc-100 truncate" title={file.file.name}>
              {file.file.name}
            </p>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400">
              {(file.file.size / 1024).toFixed(1)} KB
            </p>
          </div>
        </div>
      )}

      {/* Remove Button */}
      <button
        onClick={() => onRemove(file.id)}
        className="absolute top-1 right-1 p-1 bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <X className="w-3 h-3" />
      </button>

      {/* Upload Status */}
      {file.uploadStatus === 'uploading' && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Loader2 className="w-5 h-5 text-white animate-spin" />
        </div>
      )}
    </div>
  )
}

// Model Selector
interface ModelSelectorProps {
  models: Model[]
  selectedModel: string
  onSelect: (modelId: string) => void
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ models, selectedModel, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentModel = models.find((m) => m.id === selectedModel) || models[0]

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center justify-center relative shrink-0 transition font-base duration-300 h-8 rounded-lg px-3 min-w-[4rem] active:scale-[0.98] whitespace-nowrap text-lg pl-2.5 pr-2 gap-1 ${
          isOpen
            ? 'bg-zinc-200 dark:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
            : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-700'
        }`}
      >
        <div className="font-medium text-lg whitespace-nowrap select-none">{currentModel.name}</div>
        <Icons.SelectArrow
          className={`shrink-0 opacity-75 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      {isOpen && (
        <div className="absolute bottom-full right-0 mb-2 w-[260px] bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded-lg shadow-lg overflow-hidden z-50 flex flex-col p-1.5">
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => {
                onSelect(model.id)
                setIsOpen(false)
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg flex items-start justify-between group transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-700"
            >
              <div className="flex flex-col gap-0.5">
                <span className="text-md font-normal text-zinc-900 dark:text-zinc-100">{model.name}</span>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">{model.description}</span>
              </div>
              {selectedModel === model.id && <Check className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-1" />}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* --- MAIN COMPONENT --- */
export function ChatInput({ onSend, isLoading, starterQuestions = [] }: ChatInputProps) {
  const [message, setMessage] = useState('')
  const [files, setFiles] = useState<AttachedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [selectedModel, setSelectedModel] = useState('sonnet')
  const [isThinkingEnabled, setIsThinkingEnabled] = useState(false)

  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const models = [
    { id: 'opus', name: 'Opus', description: 'Most capable' },
    { id: 'sonnet', name: 'Sonnet', description: 'Best for tasks' },
    { id: 'haiku', name: 'Haiku', description: 'Fastest' },
  ]

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 384) + 'px'
    }
  }, [message])

  // File Handling
  const handleFiles = useCallback((newFilesList: FileList | File[]) => {
    const newFiles = Array.from(newFilesList).map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      type: file.type || 'application/octet-stream',
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
      uploadStatus: 'pending',
    }))

    setFiles((prev) => [...prev, ...newFiles])

    newFiles.forEach((f) => {
      setTimeout(() => {
        setFiles((prev) => prev.map((p) => (p.id === f.id ? { ...p, uploadStatus: 'complete' } : p)))
      }, 800 + Math.random() * 1000)
    })
  }, [])

  // Drag & Drop
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }
  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    if (e.dataTransfer.files) handleFiles(e.dataTransfer.files)
  }

  const handleSend = () => {
    if (!message.trim() || isLoading) return
    onSend(message)
    setMessage('')
    setFiles([])
    if (textareaRef.current) textareaRef.current.style.height = 'auto'
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const hasContent = message.trim().length > 0

  return (
    <div className="shrink-0  border-zinc-200 dark:border-zinc-700 dark:bg-zinc-800 px-4 py-4" onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
      <div className="max-w-5xl mx-auto flex flex-col gap-3">
        {/* File Preview */}
        {files.length > 0 && (
          <div className="flex gap-3 overflow-x-auto pb-2">
            {files.map((file) => (
              <FilePreviewCard
                key={file.id}
                file={file}
                onRemove={(id) => setFiles((prev) => prev.filter((f) => f.id !== id))}
              />
            ))}
          </div>
        )}      

        {/* Input Section */}
        <div className="flex flex-col gap-3 p-4 rounded-3xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900">
          {/* Textarea */}
          <div className="relative max-h-32 overflow-y-auto">
            <textarea
              ref={textareaRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask anything about this topic..."
              rows={1}
              className="w-full bg-transparent border-0 outline-none text dark:text-zinc-100 text-lg placeholder:text-zinc-400 dark:placeholder:text-zinc-500 resize-none overflow-hidden py-0 leading-relaxed font-normal"
              style={{ minHeight: '1.5em' }}
            />
          </div>

          {/* Action Bar */}
          <div className="flex gap-2 items-center justify-between">
            {/* Left: File Upload */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="inline-flex items-center justify-center w-8 h-8 rounded-lg transition-colors hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 active:scale-95"
              type="button"
              aria-label="Upload files"
            >
              <Plus className="w-5 h-5" />
            </button>

            {/* Right: Model Selector + Thinking + Send */}
            <div className="flex gap-2 items-center">
              {/* Thinking Toggle */}
              <button
                onClick={() => setIsThinkingEnabled(!isThinkingEnabled)}
                className={`transition-all w-8 h-8 flex items-center justify-center rounded-lg active:scale-95 ${
                  isThinkingEnabled ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30' : 'text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-700'
                }`}
                aria-pressed={isThinkingEnabled}
                aria-label="Extended thinking"
              >
                <Icons.Thinking className="w-5 h-5" />
              </button>

              {/* Model Selector */}
              <ModelSelector models={models} selectedModel={selectedModel} onSelect={setSelectedModel} />

              {/* Send Button */}
              <button
                onClick={handleSend}
                disabled={!hasContent || isLoading}
                className={`inline-flex items-center justify-center w-8 h-8 rounded-lg transition-all active:scale-95 ${
                  hasContent && !isLoading ? 'bg-primary dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200' : 'bg-zinc-200 dark:bg-zinc-700 text-zinc-400 dark:text-zinc-500 cursor-not-allowed'
                }`}
                type="button"
                aria-label="Send message"
              >
                {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <ArrowUp className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
        {/* Starter Questions */}
        {starterQuestions.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
            {starterQuestions.map((q, i) => (
              <button
                key={i}
                onClick={() => onSend(q)}
                disabled={isLoading}
                className="text-left border border-zinc-200 dark:border-zinc-700 rounded-3xl bg-white px-4 py-3 text-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {q}
              </button>
            ))}
          </div>
        )}

        {/* Drag Overlay */}
        {isDragging && (
          <div className="absolute inset-0 bg-zinc-900/50 border-2 border-dashed border-blue-500 rounded-2xl flex flex-col items-center justify-center backdrop-blur-sm pointer-events-none">
            <Archive className="w-10 h-10 text-blue-400 mb-2 animate-bounce" />
            <p className="text-blue-400 font-medium">Drop files to upload</p>
          </div>
        )}

        {/* Hidden Input */}
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={(e) => {
            if (e.target.files) handleFiles(e.target.files)
            e.target.value = ''
          }}
          className="hidden"
        />
      </div>

      <p className="text-xs text-zinc-500 dark:text-zinc-400 text-center mt-3">Press Enter to send · Shift+Enter for new line</p>
    </div>
  )
}

