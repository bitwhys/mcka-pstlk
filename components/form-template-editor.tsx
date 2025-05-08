"use client"

import { useState } from "react"
import { ChevronLeft, MoreHorizontal, Edit2, Copy, Trash2, ChevronDown, Plus, Minus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function FormTemplateEditor() {
  const [activeTab, setActiveTab] = useState("pages")
  const [zoom, setZoom] = useState(50)

  return (
    <div className="min-h-screen bg-[#c6e6f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl overflow-hidden">
        {/* Top Navigation */}
        <div className="flex items-center justify-between border-b p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="font-medium">Template Name</span>
            <span className="text-orange-500">★</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gray-100">
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
              <span className="text-sm text-gray-600">Draft</span>
            </div>
            <Button variant="outline" size="sm">
              Discard
            </Button>
            <Button variant="outline" size="sm">
              Save
            </Button>
            <Button size="sm" className="bg-[#0891b2] hover:bg-[#0891b2]/90 text-white">
              Publish
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex h-[calc(100vh-80px)] max-h-[800px]">
          {/* Left Sidebar */}
          <div className="w-64 border-r">
            <Tabs defaultValue="pages" className="w-full">
              <TabsList className="w-full grid grid-cols-2 rounded-none">
                <TabsTrigger value="pages" onClick={() => setActiveTab("pages")}>
                  Pages
                </TabsTrigger>
                <TabsTrigger value="components" onClick={() => setActiveTab("components")}>
                  Components
                </TabsTrigger>
              </TabsList>
              <TabsContent value="pages" className="p-4 space-y-4">
                <div className="border rounded-md overflow-hidden">
                  <div className="relative">
                    <img src="/medical-form-page-1.png" alt="Page 1 preview" className="w-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-2 flex justify-between items-center">
                      <span className="text-sm font-medium">Page 1</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md overflow-hidden">
                  <div className="relative">
                    <img src="/medical-form-page-2.png" alt="Page 2 preview" className="w-full object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-white p-2 flex justify-between items-center">
                      <span className="text-sm font-medium">Page 2</span>
                      <Button variant="ghost" size="icon" className="h-6 w-6">
                        <MoreHorizontal className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <Button variant="ghost" className="w-full flex items-center justify-center gap-1 text-[#0891b2]">
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
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto p-4 bg-gray-50 relative">
            <div className="flex justify-center mb-4">
              <div className="bg-white rounded-md shadow-sm flex items-center">
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

            <div className="bg-white border rounded-lg mx-auto max-w-3xl p-6 shadow-sm">
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold">NEW PATIENT HEALTH HISTORY FORM</h2>
                <p className="text-xs mt-2">
                  All questions contained in this questionnaire are strictly confidential
                  <br />
                  and will become part of your medical record
                </p>
              </div>

              <div className="border rounded-md mb-4">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b">
                      <td className="border-r p-1 w-1/4 font-medium">Name:</td>
                      <td className="border-r p-1 w-1/2">(Last, First, M.I.):</td>
                      <td className="p-1 w-1/4 font-medium">DOB:</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Marital status:</td>
                      <td className="border-r p-1" colSpan={2}>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Single</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Partnered</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Married</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Separated</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Divorced</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Widowed</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Contact Phone:</td>
                      <td className="border-r p-1" colSpan={2}></td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Address:</td>
                      <td className="border-r p-1" colSpan={2}></td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Email:</td>
                      <td className="border-r p-1" colSpan={2}></td>
                    </tr>
                    <tr>
                      <td className="border-r p-1 font-medium">Previous or referring Doctor:</td>
                      <td className="border-r p-1"></td>
                      <td className="p-1 font-medium">Date of last physical exam:</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="text-[10px] mb-4">
                <p className="mb-2">
                  <strong>Patient Consent Form / HIPAA Consent Form</strong>
                </p>
                <p className="mb-1">
                  I understand that as part of my healthcare, this practice originates and maintains health records
                  describing my health history, symptoms, examination and test results, diagnoses, treatment, and any
                  plans for future care or treatment.
                </p>
                <p className="mb-1">
                  I understand that this information serves as a basis for planning my care and treatment, a means of
                  communication among the many health professionals who contribute to my care, a source of information
                  for applying my diagnosis and treatment information to my bill, a means by which a third-party payer
                  can verify that services billed were actually provided, and a tool for routine healthcare operations
                  such as assessing quality and reviewing the competence of healthcare professionals.
                </p>
                <p className="mb-1">
                  I understand that I have the right to request restrictions as to how my health information may be used
                  or disclosed to carry out treatment, payment, or healthcare operations and that the organization is
                  not required to agree to the restrictions requested. I understand that I may revoke this consent in
                  writing, except to the extent that the organization has already taken action in reliance thereon.
                </p>
                {/* More consent text would go here */}
              </div>

              <div className="border rounded-md mb-4">
                <div className="bg-gray-100 p-1 text-center font-medium text-xs">PERSONAL HEALTH HISTORY</div>
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b">
                      <td className="border-r p-1 w-1/4 font-medium">Childhood illness:</td>
                      <td className="p-1">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Measles</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Mumps</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Rubella</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Chickenpox</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Rheumatic Fever</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Polio</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Immunizations and dates:</td>
                      <td className="p-1">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Tetanus</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Pneumonia</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Hepatitis</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Chickenpox</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>Influenza</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-3 h-3 border"></div>
                            <span>MMR</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">
                        List any medical problems that other doctors have diagnosed:
                      </td>
                      <td className="p-1 h-20"></td>
                    </tr>
                    <tr>
                      <td className="border-r p-1 font-medium">Surgeries:</td>
                      <td className="p-1">
                        <table className="w-full border text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="border-r p-1 w-1/4">Year</th>
                              <th className="border-r p-1 w-2/5">Reason</th>
                              <th className="p-1">Hospital</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(5)].map((_, i) => (
                              <tr key={i} className="border-b">
                                <td className="border-r p-1 h-6"></td>
                                <td className="border-r p-1"></td>
                                <td className="p-1"></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-center mt-4 items-center gap-2">
              <div className="flex items-center border rounded-md overflow-hidden">
                <Button variant="ghost" className="h-8 px-2 rounded-none">
                  <span className="text-sm">{zoom}%</span>
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-none border-l border-r"
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
          </div>

          {/* Right Sidebar */}
          <div className="w-64 border-l">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium">Image</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6">
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="p-4 space-y-6">
              <div>
                <h4 className="text-sm font-medium mb-2">Coordinates</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <Label htmlFor="x-coord" className="text-xs">
                      X
                    </Label>
                    <Input id="x-coord" defaultValue="160" className="h-8" />
                  </div>
                  <div>
                    <Label htmlFor="y-coord" className="text-xs">
                      Y
                    </Label>
                    <Input id="y-coord" defaultValue="256" className="h-8" />
                  </div>
                  <div>
                    <Label htmlFor="width" className="text-xs">
                      W
                    </Label>
                    <Input id="width" defaultValue="320" className="h-8" />
                  </div>
                  <div>
                    <Label htmlFor="height" className="text-xs">
                      H
                    </Label>
                    <Input id="height" defaultValue="40" className="h-8" />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-sm font-medium">Property</h4>
                  <Switch checked={true} />
                </div>

                <div className="border rounded-md">
                  <div className="p-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-[#0891b2] font-bold">A</span>
                      <div>
                        <p className="text-sm font-medium">First name</p>
                        <p className="text-xs text-gray-500">first_name</p>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-gray-400" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium">Default value</h4>
                <Switch checked={true} />
              </div>

              <Button variant="outline" className="w-full">
                Upload image
              </Button>

              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium">Label</h4>
                <Switch />
              </div>

              <div className="flex justify-between items-center">
                <h4 className="text-sm font-medium">Is required</h4>
                <Switch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChevronRight(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}
