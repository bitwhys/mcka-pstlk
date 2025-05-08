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

export default function WorksheetsPage() {
  const [activeTab, setActiveTab] = useState('pages')
  const [zoom, setZoom] = useState(50)
  const router = useRouter()

  return (
    <div className="flex h-full flex-col overflow-hidden">
      <header className="shrink-0 border-b">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
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
          {/* <ContentPlaceholder className="h-96" /> */}
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

          <Card className="mx-auto max-w-3xl">
            <CardContent>
              <div className="mb-4 text-center">
                <h2 className="text-lg font-bold">NEW PATIENT HEALTH HISTORY FORM</h2>
                <p className="mt-2 text-xs">
                  All questions contained in this questionnaire are strictly confidential
                  <br />
                  and will become part of your medical record
                </p>
              </div>

              <div className="mb-4 rounded-md border">
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b">
                      <td className="w-1/4 border-r p-1 font-medium">Name:</td>
                      <td className="w-1/2 border-r p-1">(Last, First, M.I.):</td>
                      <td className="w-1/4 p-1 font-medium">DOB:</td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">Marital status:</td>
                      <td className="border-r p-1" colSpan={2}>
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Single</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Partnered</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Married</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Separated</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Divorced</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
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

              <div className="mb-4 text-[10px]">
                <p className="mb-2">
                  <strong>Patient Consent Form / HIPAA Consent Form</strong>
                </p>
                <p className="mb-1">
                  I understand that as part of my healthcare, this practice originates and maintains
                  health records describing my health history, symptoms, examination and test
                  results, diagnoses, treatment, and any plans for future care or treatment.
                </p>
                <p className="mb-1">
                  I understand that this information serves as a basis for planning my care and
                  treatment, a means of communication among the many health professionals who
                  contribute to my care, a source of information for applying my diagnosis and
                  treatment information to my bill, a means by which a third-party payer can verify
                  that services billed were actually provided, and a tool for routine healthcare
                  operations such as assessing quality and reviewing the competence of healthcare
                  professionals.
                </p>
                <p className="mb-1">
                  I understand that I have the right to request restrictions as to how my health
                  information may be used or disclosed to carry out treatment, payment, or
                  healthcare operations and that the organization is not required to agree to the
                  restrictions requested. I understand that I may revoke this consent in writing,
                  except to the extent that the organization has already taken action in reliance
                  thereon.
                </p>
                {/* More consent text would go here */}
              </div>

              <div className="mb-4 rounded-md border">
                <div className="bg-gray-100 p-1 text-center text-xs font-medium">
                  PERSONAL HEALTH HISTORY
                </div>
                <table className="w-full text-xs">
                  <tbody>
                    <tr className="border-b">
                      <td className="w-1/4 border-r p-1 font-medium">Childhood illness:</td>
                      <td className="p-1">
                        <div className="flex flex-wrap gap-4">
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Measles</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Mumps</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Rubella</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Chickenpox</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Rheumatic Fever</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
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
                            <div className="h-3 w-3 border"></div>
                            <span>Tetanus</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Pneumonia</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Hepatitis</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Chickenpox</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>Influenza</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="h-3 w-3 border"></div>
                            <span>MMR</span>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="border-r p-1 font-medium">
                        List any medical problems that other doctors have diagnosed:
                      </td>
                      <td className="h-20 p-1"></td>
                    </tr>
                    <tr>
                      <td className="border-r p-1 font-medium">Surgeries:</td>
                      <td className="p-1">
                        <table className="w-full border text-xs">
                          <thead>
                            <tr className="border-b">
                              <th className="w-1/4 border-r p-1">Year</th>
                              <th className="w-2/5 border-r p-1">Reason</th>
                              <th className="p-1">Hospital</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[...Array(5)].map((_, i) => (
                              <tr key={i} className="border-b">
                                <td className="h-6 border-r p-1"></td>
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
            </CardContent>
          </Card>

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
        <aside className="sticky top-8 hidden w-96 shrink-0 border-l xl:block">
          {/* Right column area */}
          <RightSidebar />
        </aside>
      </div>
    </div>
  )
}

function ChevronRight(props: React.SVGProps<SVGSVGElement>) {
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
