import { Home, FileText, FileCheck, BookOpen, BarChart2, Settings } from "lucide-react";
import { Button } from "../ui/button";

export const LeftSidebar = () => {
  return (
    <div>
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
    </div>
  );
};
