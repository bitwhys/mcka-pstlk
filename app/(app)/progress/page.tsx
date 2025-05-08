'use client'
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileCheck } from "lucide-react";
import { useState } from "react";
import { Badge  } from "@/components/ui/badge";

export default function ProgressPage() {

  return (
    <>
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
    </>
  );
}