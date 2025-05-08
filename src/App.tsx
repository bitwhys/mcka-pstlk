import { cn } from "@/lib/utils";
import { ContentPlaceholder } from "@/components/content-placeholder";
import { Card, CardContent } from "./components/ui/card";
// import "./app.css";
import { Textarea } from "./components/ui/textarea";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { useId } from "react";
import { ShareButton } from "./components/share-button";
import { RefreshCcw } from "lucide-react";
const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

export default function App() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <div className="bg-[#111111] pb-32">
          <header className="py-10">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold tracking-tight text-white">
                Problem Statement Worksheet
              </h1>
            </div>
          </header>
        </div>

        <main className="-mt-32">
          <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
            <Card>
              <CardContent>
                <ProblemStatementWorksheet />
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </>
  );
}

function ProblemStatementWorksheet() {
  return (
    <>
      <div className="border-b border-gray-200 pb-5 sm:flex sm:items-center sm:justify-between">
        <h3 className="text-base font-semibold text-gray-900">Document Title</h3>
        <div className="flex gap-2 items-center sm:mt-0">
          <Button type="button" size="icon" variant="secondary">
            <RefreshCcw size={16} />
          </Button>
          <ShareButton />
          <Button type="button">Print Document</Button>
        </div>
      </div>
      <div className="mt-6 grid gap-8">
        <ResponseInput title="Problem question" rows={3} />
        <div className="grid grid-cols-3 gap-4">
          <ResponseInput title="Context" />
          <ResponseInput title="Constraints within solution space" />
          <ResponseInput title="Criteria for success" />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <ResponseInput title="Stakeholders" />
          <ResponseInput title="Scope of solution space" />
          <ResponseInput title="Key sources of insight" />
        </div>
      </div>
    </>
  );
}

function ResponseInput({ title, rows = 6 }: { title: string, rows?: number }) {
  const id = useId();
  return (
    <div className="*:not-first:mt-2">
      <Label htmlFor={id} className="text-base/7 font-semibold">{title}</Label>
      <Textarea id={id} placeholder="Leave a comment" className="border-2 border-gray-7 text-base focus-visible:border-primary [resize:none]" rows={rows} />
    </div>
  );
}
