'use client'
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Filter, Plus, MoreVertical, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Badge  } from "@/components/ui/badge";

export default function Worksheets() {
  const [selectedDocument, setSelectedDocument] = useState("client-design");
  const [activePage, setActivePage] = useState("worksheets");

  return (
    <div>
      <div className="p-6">
        {/* Recent Templates Section */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">
              Worksheets{" "}
              <Badge className="ml-2 bg-gray-200 text-gray-700">4</Badge>
            </h2>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Plus className="h-4 w-4" />
                New
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Template Card 1 */}
            <Card
              className={`cursor-pointer transition-all ${
                selectedDocument === "patient-form"
                  ? "ring-2 ring-[#0891b2]"
                  : ""
              }`}
              onClick={() => setSelectedDocument("patient-form")}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/medical-form-page-1.png"
                    alt="Patient Health Form"
                    className="w-full h-40 object-cover object-top rounded-t-lg"
                  />
                  <div className="absolute top-0 right-0 left-0 h-12 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg">
                    <div className="p-2">
                      <img
                        src="/formflow-logo.png"
                        alt="Logo"
                        className="h-6"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-medium">Patient Health Form</h3>
                  <p className="text-xs text-gray-500">1 minute ago</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Template Card 2 */}
            <Card
              className={`cursor-pointer transition-all ${
                selectedDocument === "client-design"
                  ? "ring-2 ring-[#0891b2]"
                  : ""
              }`}
              onClick={() => setSelectedDocument("client-design")}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/contract-with-signatures.png"
                    alt="Client Contract"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-0 right-0 left-0 h-12 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg">
                    <div className="p-2">
                      <img
                        src="/formflow-logo.png"
                        alt="Logo"
                        className="h-6"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-medium">Client Contract</h3>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Template Card 3 */}
            <Card className="cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src="/meeting-notes-document.png"
                    alt="Meeting Notes"
                    className="w-full h-40 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-0 right-0 left-0 h-12 bg-gradient-to-b from-black/50 to-transparent rounded-t-lg">
                    <div className="p-2">
                      <img
                        src="/formflow-logo.png"
                        alt="Logo"
                        className="h-6"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-medium">Meeting Notes</h3>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        {/* Presentations Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-medium">
              Course Materials{" "}
              <Badge className="ml-2 bg-gray-200 text-gray-700">3</Badge>
            </h2>
            <Button variant="ghost" size="sm" className="text-[#0891b2]">
              Show all <ChevronDown className="ml-1 h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Presentation Card 1 */}
            <Card className="cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-40 bg-purple-700 rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-bold">
                        The State of Form Automation
                      </h3>
                      <p className="text-sm mt-2">2023 Report</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-medium">Automation Report</h3>
                  <p className="text-xs text-gray-500">3 days ago</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Presentation Card 2 */}
            <Card className="cursor-pointer border-2 border-[#0891b2]">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-40 bg-[#0a5a5a] rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="font-bold">Automate Your Form Process</h3>
                      <p className="text-sm mt-2">Client Presentation</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-medium">Form Automation</h3>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Presentation Card 3 */}
            <Card className="cursor-pointer">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="w-full h-40 bg-[#7dd3fc] rounded-t-lg flex items-center justify-center">
                    <div className="text-center text-gray-800 p-4">
                      <h3 className="font-bold">Sales Deck Template</h3>
                      <p className="text-sm mt-2">Company Overview</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between items-center p-3">
                <div>
                  <h3 className="font-medium">Sales Deck</h3>
                  <p className="text-xs text-gray-500">1 week ago</p>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
