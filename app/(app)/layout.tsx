import { AppSidebar } from '@/components/layouts/app-sidebar'
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from '@/components/ui/breadcrumb'
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import type { Metadata } from 'next'
import { SiteBar } from '@/components/layouts/site-bar'

export default function SidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="bg-page-background">
        <div className="@container px-4 md:px-6 lg:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <SiteBar />
            <div className="bg-page-background flex-1 overflow-hidden">{children}</div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
