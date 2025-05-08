'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { FileText, Clock, Users, MessageSquare, Settings } from 'lucide-react'
import { Button } from '../ui/button'
import { useState } from 'react'

export const RightSidebar = () => {
  const [activePage, setActivePage] = useState('worksheets')

  return (
    <div>
      <div className="border-b p-4">
        <h2 className="font-medium">Client Contract Template</h2>
        <p className="text-xs text-gray-500">Last edited 2 days ago</p>
      </div>

      <div className="border-b">
        <Tabs defaultValue="details">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="details">Details</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>
          <TabsContent value="details" className="p-4">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 p-2">
                  <FileText className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Template Type</h3>
                  <p className="text-xs text-gray-500">Legal Contract</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 p-2">
                  <Clock className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Created</h3>
                  <p className="text-xs text-gray-500">May 5, 2023</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-full bg-gray-100 p-2">
                  <Users className="h-4 w-4 text-gray-600" />
                </div>
                <div>
                  <h3 className="text-sm font-medium">Shared with</h3>
                  <div className="mt-1 flex">
                    <Avatar className="h-6 w-6 border-2 border-white">
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6 border-2 border-white">
                      <AvatarFallback>AB</AvatarFallback>
                    </Avatar>
                    <Avatar className="-ml-2 h-6 w-6 border-2 border-white">
                      <AvatarFallback>+2</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="activity" className="p-4">
            <div className="space-y-4">
              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarFallback>CB</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Carol Bernier</span>
                    <span className="text-xs text-gray-500">1d</span>
                  </div>
                  <p className="text-sm">Posted a comment:</p>
                  <div className="mt-2 rounded-lg bg-gray-100 p-3">
                    <div className="flex items-center justify-center gap-4 p-2">
                      <div className="text-center">
                        <div className="mx-auto mb-1 rounded-full bg-[#e0f2fe] p-2">
                          <FileText className="h-4 w-4 text-[#0891b2]" />
                        </div>
                        <p className="text-xs">Electronic Signature</p>
                      </div>
                      <div className="text-center">
                        <div className="mx-auto mb-1 rounded-full bg-[#e0f2fe] p-2">
                          <MessageSquare className="h-4 w-4 text-[#0891b2]" />
                        </div>
                        <p className="text-xs">Legal audit</p>
                      </div>
                      <div className="text-center">
                        <div className="mx-auto mb-1 rounded-full bg-[#e0f2fe] p-2">
                          <Settings className="h-4 w-4 text-[#0891b2]" />
                        </div>
                        <p className="text-xs">Workflow</p>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      "This should say 'Learn more about the FormFlow way'"
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/diverse-person-portrait.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">Jane Doe (You)</span>
                    <span className="text-xs text-gray-500">1w</span>
                  </div>
                  <p className="text-sm">Created this document</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div className="p-4">
        <Button className="w-full bg-[#0891b2] hover:bg-[#0891b2]/90">Edit Worksheet</Button>
      </div>
    </div>
  )
}
