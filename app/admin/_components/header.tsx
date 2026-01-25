"use client";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AdminHeader() {
  return (
    <header className="sticky top-0 z-10 flex shrink-0 items-center gap-2 border-b bg-sidebar p-4">
      <SidebarTrigger className={"-ml-1"} />
      <Separator
        orientation="vertical"
        className="mr-2 data-[orientation=vertical]:h-8"
      />
      {/* <Breadcrumbs breadcrumbs={breadcrumbs} /> */}
    </header>
  );
}
