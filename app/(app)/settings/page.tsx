import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@radix-ui/react-select'
import { User, Bell, HelpCircle, Settings } from 'lucide-react'

export default function SettingsPage() {
  return (
    <>
      <div className="p-6">
        <h1 className="mb-6 text-2xl font-bold">Settings</h1>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
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

                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
                      <SelectItem value="business-intelligence">
                        Business Intelligence Fundamentals
                      </SelectItem>
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
    </>
  )
}
