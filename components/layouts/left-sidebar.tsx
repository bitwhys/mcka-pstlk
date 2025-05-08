import {
  Home,
  FileText,
  FileCheck,
  BookOpen,
  BarChart2,
  Settings,
  MoreHorizontal,
  Plus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { useState } from 'react'
import medicalFormOne from '@/assets/medical-form-1.png'
import medicalFormTwo from '@/assets/medical-form-2.png'
import Image from 'next/image'
export const LeftSidebar = () => {
  const [activeTab, setActiveTab] = useState('pages')
  const [zoom, setZoom] = useState(50)

  return (
    <>
      <Tabs defaultValue="pages" className="h-full w-full">
        <TabsList className="grid w-full grid-cols-2 rounded-none">
          <TabsTrigger value="pages" onClick={() => setActiveTab('pages')}>
            Pages
          </TabsTrigger>
          <TabsTrigger value="components" onClick={() => setActiveTab('components')}>
            Components
          </TabsTrigger>
        </TabsList>
        <TabsContent value="pages" className="space-y-4 p-4">
          <div className="overflow-hidden rounded-md border">
            <div className="relative">
              <Image src={medicalFormOne} alt="Page 1 preview" className="w-full object-cover" />
              <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between bg-white p-2">
                <span className="text-sm font-medium">Page 1</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-md border">
            <div className="relative">
              <Image src={medicalFormTwo} alt="Page 2 preview" className="w-full object-cover" />
              <div className="absolute right-0 bottom-0 left-0 flex items-center justify-between bg-white p-2">
                <span className="text-sm font-medium">Page 2</span>
                <Button variant="ghost" size="icon" className="h-6 w-6">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>

          <Button
            variant="ghost"
            className="flex w-full items-center justify-center gap-1 text-[#0891b2]"
          >
            <Plus className="h-4 w-4" />
            <span>Add new</span>
          </Button>
        </TabsContent>
        <TabsContent value="components">
          <div className="p-4">
            <p className="text-sm text-gray-500">Component library</p>
          </div>
        </TabsContent>
      </Tabs>
    </>
  )
}
