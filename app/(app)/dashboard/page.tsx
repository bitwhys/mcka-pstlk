import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Progress } from '@radix-ui/react-progress'
import { BarChart2, CheckCircle, FileText } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-2xl font-bold">Dashboard</h1>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Assigned Worksheets</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-muted-foreground text-xs">4 due this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-muted-foreground text-xs">67% completion rate</p>
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
            <Progress value={67} className="mt-2 h-2" />
          </CardContent>
        </Card>
      </div>

      <h2 className="mb-4 text-lg font-medium">Due Soon</h2>
      <div className="mb-8 space-y-4">
        {[1, 2, 3].map(i => (
          <Card key={i} className="overflow-hidden">
            <div className="flex border-l-4 border-yellow-500">
              <div className="flex-1 p-4">
                <div className="flex justify-between">
                  <h3 className="font-medium">Data Analysis Worksheet {i}</h3>
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-600">
                    Due in {i} day{i > 1 ? 's' : ''}
                  </Badge>
                </div>
                <p className="mt-1 text-sm text-gray-500">
                  Business Intelligence Fundamentals - Module {i}
                </p>
              </div>
              <div className="flex items-center gap-2 p-4">
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

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex items-start gap-3">
                <div className={`rounded-full p-2 ${i % 2 === 0 ? 'bg-green-100' : 'bg-blue-100'}`}>
                  {i % 2 === 0 ? (
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <FileText className="h-4 w-4 text-blue-600" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">
                    {i % 2 === 0 ? 'Completed' : 'Started'}{' '}
                    {i % 2 === 0 ? 'Customer Analysis Worksheet' : 'Market Research Template'} {i}
                  </p>
                  <p className="text-xs text-gray-500">
                    {i} hour{i > 1 ? 's' : ''} ago
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
            {['Data Analysis Fundamentals', 'Business Intelligence', 'Market Research Methods'].map(
              (course, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between">
                    <p className="text-sm font-medium">{course}</p>
                    <p className="text-sm text-gray-500">{30 + i * 20}%</p>
                  </div>
                  <Progress value={30 + i * 20} className="h-2" />
                </div>
              )
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
