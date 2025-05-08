"use client"

import { useState } from "react"
import {
  Search,
  Home,
  FileText,
  MessageSquare,
  Users,
  Settings,
  ChevronDown,
  MoreVertical,
  Clock,
  BarChart2,
  CheckCircle,
  BookOpen,
  Filter,
  Plus,
  Download,
  Bell,
  User,
  HelpCircle,
  FileCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { SiteBar } from "./site-bar"


const DocumentDashboard = () => {
  const [selectedDocument, setSelectedDocument] = useState("client-design")
  const [activePage, setActivePage] = useState("worksheets")

  return (
    <div className="min-h-screen bg-[#c6e6f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl overflow-hidden flex">
        {/* Left Sidebar */}
        <div className="w-64 bg-[#0a5a5a] text-white p-4 flex flex-col">
          <div className="mb-8">
            <h1 className="text-xl font-semibold">DataFormPro_</h1>
          </div>

          <nav className="space-y-1 flex-1">
            <Button
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-[#0c6e6e] hover:text-white ${
                activePage === "dashboard" ? "bg-[#0c6e6e]" : ""
              }`}
              onClick={() => setActivePage("dashboard")}
            >
              <Home className="mr-2 h-4 w-4" />
              Dashboard
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-[#0c6e6e] hover:text-white ${
                activePage === "worksheets" ? "bg-[#0c6e6e]" : ""
              }`}
              onClick={() => setActivePage("worksheets")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Worksheets
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-[#0c6e6e] hover:text-white ${
                activePage === "submissions" ? "bg-[#0c6e6e]" : ""
              }`}
              onClick={() => setActivePage("submissions")}
            >
              <FileCheck className="mr-2 h-4 w-4" />
              Submissions
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-[#0c6e6e] hover:text-white ${
                activePage === "courses" ? "bg-[#0c6e6e]" : ""
              }`}
              onClick={() => setActivePage("courses")}
            >
              <BookOpen className="mr-2 h-4 w-4" />
              Courses
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-[#0c6e6e] hover:text-white ${
                activePage === "progress" ? "bg-[#0c6e6e]" : ""
              }`}
              onClick={() => setActivePage("progress")}
            >
              <BarChart2 className="mr-2 h-4 w-4" />
              Progress
            </Button>
            <Button
              variant="ghost"
              className={`w-full justify-start text-white hover:bg-[#0c6e6e] hover:text-white ${
                activePage === "settings" ? "bg-[#0c6e6e]" : ""
              }`}
              onClick={() => setActivePage("settings")}
            >
              <Settings className="mr-2 h-4 w-4" />
              Settings
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <SiteBar />

          {/* Content Area */}
          <div className="flex-1 overflow-auto">
            {/* Dashboard Page */}
            {activePage === "dashboard" && (
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Assigned Worksheets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">12</div>
                      <p className="text-xs text-muted-foreground">4 due this week</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">8</div>
                      <p className="text-xs text-muted-foreground">67% completion rate</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2">
                        <div className="text-2xl font-bold">67%</div>
                        <BarChart2 className="h-4 w-4 text-[#0891b2]" />
                      </div>
                      <Progress value={67} className="h-2 mt-2" />
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-lg font-medium mb-4">Due Soon</h2>
                <div className="space-y-4 mb-8">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="overflow-hidden">
                      <div className="flex border-l-4 border-yellow-500">
                        <div className="p-4 flex-1">
                          <div className="flex justify-between">
                            <h3 className="font-medium">Data Analysis Worksheet {i}</h3>
                            <Badge variant="outline" className="text-yellow-600 bg-yellow-50">
                              Due in {i} day{i > 1 ? "s" : ""}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">Business Intelligence Fundamentals - Module {i}</p>
                        </div>
                        <div className="flex items-center p-4 gap-2">
                          <Button variant="outline" size="sm">
                            View
                          </Button>
                          <Button size="sm" className="bg-[#0891b2] hover:bg-[#0891b2]/90">
                            Start
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Activity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className={`p-2 rounded-full ${i % 2 === 0 ? "bg-green-100" : "bg-blue-100"}`}>
                            {i % 2 === 0 ? (
                              <CheckCircle className="h-4 w-4 text-green-600" />
                            ) : (
                              <FileText className="h-4 w-4 text-blue-600" />
                            )}
                          </div>
                          <div>
                            <p className="text-sm font-medium">
                              {i % 2 === 0 ? "Completed" : "Started"}{" "}
                              {i % 2 === 0 ? "Customer Analysis Worksheet" : "Market Research Template"} {i}
                            </p>
                            <p className="text-xs text-gray-500">
                              {i} hour{i > 1 ? "s" : ""} ago
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {["Data Analysis Fundamentals", "Business Intelligence", "Market Research Methods"].map(
                        (course, i) => (
                          <div key={i} className="space-y-1">
                            <div className="flex justify-between">
                              <p className="text-sm font-medium">{course}</p>
                              <p className="text-sm text-gray-500">{30 + i * 20}%</p>
                            </div>
                            <Progress value={30 + i * 20} className="h-2" />
                          </div>
                        ),
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Worksheets Page */}
            {activePage === "worksheets" && (
              <div className="p-6">
                {/* Recent Templates Section */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">
                      Worksheets <Badge className="ml-2 bg-gray-200 text-gray-700">4</Badge>
                    </h2>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Filter className="h-4 w-4" />
                        Filter
                      </Button>
                      <Button variant="outline" size="sm" className="flex items-center gap-1">
                        <Plus className="h-4 w-4" />
                        New
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* Template Card 1 */}
                    <Card
                      className={`cursor-pointer transition-all ${
                        selectedDocument === "patient-form" ? "ring-2 ring-[#0891b2]" : ""
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
                              <img src="/formflow-logo.png" alt="Logo" className="h-6" />
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
                        selectedDocument === "client-design" ? "ring-2 ring-[#0891b2]" : ""
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
                              <img src="/formflow-logo.png" alt="Logo" className="h-6" />
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
                              <img src="/formflow-logo.png" alt="Logo" className="h-6" />
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
                      Course Materials <Badge className="ml-2 bg-gray-200 text-gray-700">3</Badge>
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
                              <h3 className="font-bold">The State of Form Automation</h3>
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
            )}

            {/* Submissions Page */}
            {activePage === "submissions" && (
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Submissions</h1>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="bg-white text-[#0891b2] border-[#0891b2]">
                      All
                    </Button>
                    <Button variant="ghost" size="sm">
                      Pending
                    </Button>
                    <Button variant="ghost" size="sm">
                      Graded
                    </Button>
                    <Button variant="ghost" size="sm">
                      Drafts
                    </Button>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Filter className="h-4 w-4" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      Export
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg border overflow-hidden">
                  <div className="grid grid-cols-12 gap-4 p-4 border-b bg-gray-50 font-medium text-sm">
                    <div className="col-span-4">Worksheet</div>
                    <div className="col-span-2">Course</div>
                    <div className="col-span-2">Submitted</div>
                    <div className="col-span-2">Status</div>
                    <div className="col-span-2">Actions</div>
                  </div>

                  {[
                    {
                      name: "Market Analysis Worksheet",
                      course: "Business Intelligence",
                      status: "Graded",
                      score: "92%",
                    },
                    { name: "Customer Segmentation Form", course: "Data Analysis", status: "Pending", score: "" },
                    { name: "SWOT Analysis Template", course: "Business Strategy", status: "Graded", score: "85%" },
                    { name: "Competitive Analysis Framework", course: "Market Research", status: "Draft", score: "" },
                    {
                      name: "Financial Projection Worksheet",
                      course: "Business Planning",
                      status: "Pending",
                      score: "",
                    },
                  ].map((submission, i) => (
                    <div key={i} className="grid grid-cols-12 gap-4 p-4 border-b items-center text-sm">
                      <div className="col-span-4 font-medium">{submission.name}</div>
                      <div className="col-span-2 text-gray-600">{submission.course}</div>
                      <div className="col-span-2 text-gray-600">
                        {i === 3 ? "—" : `${i + 1} day${i > 0 ? "s" : ""} ago`}
                      </div>
                      <div className="col-span-2">
                        {submission.status === "Graded" && (
                          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
                            {submission.status} • {submission.score}
                          </Badge>
                        )}
                        {submission.status === "Pending" && (
                          <Badge variant="outline" className="text-yellow-600 bg-yellow-50 hover:bg-yellow-50">
                            {submission.status}
                          </Badge>
                        )}
                        {submission.status === "Draft" && (
                          <Badge variant="outline" className="text-gray-600 bg-gray-50 hover:bg-gray-50">
                            {submission.status}
                          </Badge>
                        )}
                      </div>
                      <div className="col-span-2 flex gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        {submission.status === "Draft" && (
                          <Button size="sm" className="bg-[#0891b2] hover:bg-[#0891b2]/90">
                            Edit
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Courses Page */}
            {activePage === "courses" && (
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Courses</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {[
                    { name: "Business Intelligence Fundamentals", progress: 75, worksheets: 12, completed: 9 },
                    { name: "Data Analysis for Business", progress: 40, worksheets: 10, completed: 4 },
                    { name: "Market Research Methods", progress: 20, worksheets: 8, completed: 2 },
                  ].map((course, i) => (
                    <Card key={i} className="cursor-pointer hover:shadow-md transition-shadow">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{course.name}</CardTitle>
                          <Badge className="bg-[#0891b2]">Active</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>

                        <div className="flex justify-between text-sm">
                          <div>
                            <span className="text-gray-500">Worksheets:</span>
                            <span className="ml-1 font-medium">{course.worksheets}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Completed:</span>
                            <span className="ml-1 font-medium">{course.completed}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full bg-[#0891b2] hover:bg-[#0891b2]/90">View Course</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <h2 className="text-lg font-medium mb-4">Available Courses</h2>
                <div className="space-y-4">
                  {[
                    "Advanced Data Visualization",
                    "Business Strategy & Planning",
                    "Financial Analysis for Business Analysts",
                    "Customer Analytics & Insights",
                  ].map((course, i) => (
                    <Card key={i} className="cursor-pointer hover:shadow-md transition-shadow">
                      <div className="flex items-center p-4">
                        <div className="flex-1">
                          <h3 className="font-medium">{course}</h3>
                          <p className="text-sm text-gray-500">8 worksheets • 4 week course</p>
                        </div>
                        <Button variant="outline" className="mr-2">
                          Learn More
                        </Button>
                        <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90">Enroll</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Progress Page */}
            {activePage === "progress" && (
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Progress Tracking</h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Overall Completion</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">67%</div>
                      <Progress value={67} className="h-2 mt-2" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Worksheets Completed</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18/27</div>
                      <p className="text-xs text-muted-foreground">3 completed this week</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Average Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">87%</div>
                      <p className="text-xs text-muted-foreground">+2% from last month</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium">Time Spent</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">42h</div>
                      <p className="text-xs text-muted-foreground">8h this week</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardHeader>
                      <CardTitle>Course Progress</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {[
                        { name: "Business Intelligence Fundamentals", progress: 75 },
                        { name: "Data Analysis for Business", progress: 40 },
                        { name: "Market Research Methods", progress: 20 },
                      ].map((course, i) => (
                        <div key={i} className="space-y-1">
                          <div className="flex justify-between">
                            <p className="text-sm font-medium">{course.name}</p>
                            <p className="text-sm text-gray-500">{course.progress}%</p>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Recent Scores</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { name: "Market Analysis Worksheet", score: 92 },
                          { name: "SWOT Analysis Template", score: 85 },
                          { name: "Customer Journey Mapping", score: 78 },
                          { name: "Competitive Analysis Framework", score: 90 },
                        ].map((worksheet, i) => (
                          <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div
                                className={`p-2 rounded-full ${worksheet.score >= 90 ? "bg-green-100" : worksheet.score >= 80 ? "bg-blue-100" : "bg-yellow-100"}`}
                              >
                                <FileCheck
                                  className={`h-4 w-4 ${worksheet.score >= 90 ? "text-green-600" : worksheet.score >= 80 ? "text-blue-600" : "text-yellow-600"}`}
                                />
                              </div>
                              <p className="text-sm font-medium">{worksheet.name}</p>
                            </div>
                            <Badge
                              className={`${worksheet.score >= 90 ? "bg-green-100 text-green-800" : worksheet.score >= 80 ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"}`}
                            >
                              {worksheet.score}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <h2 className="text-lg font-medium mb-4">Skill Development</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    { skill: "Data Analysis", level: 75 },
                    { skill: "Business Intelligence", level: 60 },
                    { skill: "Market Research", level: 45 },
                    { skill: "Financial Analysis", level: 30 },
                    { skill: "Strategic Planning", level: 50 },
                    { skill: "Data Visualization", level: 65 },
                  ].map((skill, i) => (
                    <Card key={i}>
                      <CardContent className="pt-6">
                        <div className="text-center mb-4">
                          <h3 className="font-medium">{skill.skill}</h3>
                          <div className="text-3xl font-bold mt-2">{skill.level}%</div>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Page */}
            {activePage === "settings" && (
              <div className="p-6">
                <h1 className="text-2xl font-bold mb-6">Settings</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-1">
                    <div className="space-y-1">
                      <h2 className="text-lg font-medium">Settings</h2>
                      <p className="text-sm text-gray-500">Manage your account settings and preferences.</p>
                    </div>

                    <div className="mt-4 space-y-1">
                      <Button variant="ghost" className="w-full justify-start font-normal text-[#0891b2]">
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                      <Button variant="ghost" className="w-full justify-start font-normal">
                        <Bell className="mr-2 h-4 w-4" />
                        Notifications
                      </Button>
                      <Button variant="ghost" className="w-full justify-start font-normal">
                        <Settings className="mr-2 h-4 w-4" />
                        Preferences
                      </Button>
                      <Button variant="ghost" className="w-full justify-start font-normal">
                        <HelpCircle className="mr-2 h-4 w-4" />
                        Help & Support
                      </Button>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Profile Settings</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="h-16 w-16">
                            <AvatarImage src="/diverse-person-portrait.png" />
                            <AvatarFallback>JD</AvatarFallback>
                          </Avatar>
                          <div>
                            <Button variant="outline" size="sm">
                              Change Avatar
                            </Button>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">First Name</label>
                            <Input defaultValue="Jane" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Last Name</label>
                            <Input defaultValue="Doe" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input defaultValue="jane.doe@example.com" />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Student ID</label>
                            <Input defaultValue="BDA-2023-1234" readOnly className="bg-gray-50" />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium">Current Course</label>
                          <Select defaultValue="business-intelligence">
                            <SelectTrigger>
                              <SelectValue placeholder="Select a course" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="business-intelligence">Business Intelligence Fundamentals</SelectItem>
                              <SelectItem value="data-analysis">Data Analysis for Business</SelectItem>
                              <SelectItem value="market-research">Market Research Methods</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="pt-4">
                          <Button className="bg-[#0891b2] hover:bg-[#0891b2]/90">Save Changes</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

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
                          <span className="text-sm font-medium">Carol Bernier</span>
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
        )}
      </div>
    </div>
  )
}

export { DocumentDashboard }