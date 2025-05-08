'use client'

import { useState } from 'react'
import {
  ChevronLeft,
  MoreHorizontal,
  Edit2,
  Copy,
  Trash2,
  ChevronDown,
  Plus,
  Minus,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { LeftSidebar } from '@/components/layouts/left-sidebar'
import { RightSidebar } from '@/components/layouts/right-sidebar'
import { Card, CardContent } from '@/components/ui/card'
import { useRouter } from 'next/navigation'
import Breadcrumbs from './breadcrumbs'

export default function BuilderLayout({ children }: { children: React.ReactNode }) {
  const [activeTab, setActiveTab] = useState('pages')
  const [zoom, setZoom] = useState(50)
  const router = useRouter()

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="shrink-0 border-b">
        <div className="flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8 lg:py-1.5">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => router.back()}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {/* <div className="flex items-center gap-2">
              <span className="font-medium">Template Name</span>
              <span className="text-orange-500">★</span>
            </div> */}
          </div>

          <Breadcrumbs />
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 rounded-full bg-gray-100 px-2 py-1">
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span className="text-sm text-gray-600">Draft</span>
            </div>
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button variant="outline" size="sm">
              Save
            </Button>
            <Button size="sm" className="">
              Publish
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>
      <div className="flex h-full w-full flex-1 items-start">
        <aside className="sticky top-8 hidden w-64 shrink-0 border-r lg:block">
          {/* Left column area */}
          <LeftSidebar />
        </aside>
        <section className="bg-gray-4 relative h-full flex-1 overflow-auto p-4 pb-8">
          {/* Main area */}
          {/* document toolbar */}
          <div className="mb-4 flex justify-center">
            <div className="flex items-center rounded-md bg-white shadow-sm">
              <Button variant="ghost" className="rounded-r-none border-r">
                <span>Image</span>
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="border-r">
                <Edit2 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="border-r">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* template here */}
          {children}
          {/* zoom controls */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="flex items-center overflow-hidden rounded-md border">
              <Button variant="ghost" className="h-8 rounded-none px-2">
                <span className="text-sm">{zoom}%</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none border-r border-l"
                onClick={() => setZoom(Math.min(zoom + 10, 100))}
              >
                <Plus className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-none"
                onClick={() => setZoom(Math.max(zoom - 10, 10))}
              >
                <Minus className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        <aside className="sticky top-8 hidden w-80 shrink-0 border-l xl:block">
          {/* Right column area */}
          <RightSidebar />
        </aside>
      </div>
    </div>
  )
}

