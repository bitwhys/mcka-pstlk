import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Search, Bell } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export const SiteBar = () => {
  return (
    <div>
      {/* Top Search Bar */}
      <div className="p-4 border-b flex items-center justify-between">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input placeholder="Search" className="pl-8" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
          </Button>
          <Avatar>
            <AvatarImage src="/diverse-person-portrait.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <span className="font-medium">Jane Doe</span>
        </div>
      </div>
    </div>
  );
};
