'use client'
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@radix-ui/react-tabs";
import { FileText, Clock, Users, MessageSquare, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { useState } from "react";

export const RightSidebar = () => {
  const [activePage, setActivePage] = useState("worksheets")

  return (
    <div>
      {/* Right Sidebar - Document Details */}
      {activePage === "worksheets" && (
        <div className="w-80 border-l">
          <div className="p-4 border-b">
            <h2 className="font-medium">Client Contract Template</h2>
            <p className="text-xs text-gray-500">Last edited 2 days ago</p>
          </div>

          <div className="border-b">
            <Tabs defaultValue="details">
              <TabsList className="w-full grid grid-cols-2">
                <TabsTrigger value="details">Details</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="p-4">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <FileText className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Template Type</h3>
                      <p className="text-xs text-gray-500">Legal Contract</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Clock className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Created</h3>
                      <p className="text-xs text-gray-500">May 5, 2023</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-gray-100 p-2 rounded-full">
                      <Users className="h-4 w-4 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">Shared with</h3>
                      <div className="flex mt-1">
                        <Avatar className="h-6 w-6 border-2 border-white">
                          <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 -ml-2 border-2 border-white">
                          <AvatarFallback>AB</AvatarFallback>
                        </Avatar>
                        <Avatar className="h-6 w-6 -ml-2 border-2 border-white">
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
                        <span className="text-sm font-medium">
                          Carol Bernier
                        </span>
                        <span className="text-xs text-gray-500">1d</span>
                      </div>
                      <p className="text-sm">Posted a comment:</p>
                      <div className="mt-2 bg-gray-100 p-3 rounded-lg">
                        <div className="flex items-center justify-center gap-4 p-2">
                          <div className="text-center">
                            <div className="bg-[#e0f2fe] p-2 rounded-full mx-auto mb-1">
                              <FileText className="h-4 w-4 text-[#0891b2]" />
                            </div>
                            <p className="text-xs">Electronic Signature</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-[#e0f2fe] p-2 rounded-full mx-auto mb-1">
                              <MessageSquare className="h-4 w-4 text-[#0891b2]" />
                            </div>
                            <p className="text-xs">Legal audit</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-[#e0f2fe] p-2 rounded-full mx-auto mb-1">
                              <Settings className="h-4 w-4 text-[#0891b2]" />
                            </div>
                            <p className="text-xs">Workflow</p>
                          </div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
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
                        <span className="text-sm font-medium">
                          Jane Doe (You)
                        </span>
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
            <Button className="w-full bg-[#0891b2] hover:bg-[#0891b2]/90">
              Edit Worksheet
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
