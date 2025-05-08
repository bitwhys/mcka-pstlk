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
import { SiteBar } from "../../components/layouts/site-bar"


const DocumentDashboard = () => {
  const [selectedDocument, setSelectedDocument] = useState("client-design")
  const [activePage, setActivePage] = useState("worksheets")

  return (
    <div className="min-h-screen bg-[#c6e6f0] flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-7xl overflow-hidden flex">
       
      </div>
    </div>
  )
}

export { DocumentDashboard }