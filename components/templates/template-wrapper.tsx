import { Card, CardContent } from "@/components/ui/card";

export function TemplateWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Card className="mx-auto max-w-6xl">
      <CardContent>
        {children}
      </CardContent>
    </Card>
  )
}