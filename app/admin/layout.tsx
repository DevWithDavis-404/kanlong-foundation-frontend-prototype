import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { Fragment } from "react/jsx-runtime";
import { AdminHeader } from "./_components/header";
import { AdminSidebar } from "./_components/sidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const SIDEBAR_STATE = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <Fragment>
      <SidebarProvider defaultOpen={SIDEBAR_STATE}>
        <AdminSidebar collapsible={"icon"} />
        <SidebarInset>
          <div className='bg-background flex flex-1 flex-col gap-4'>
            <AdminHeader />
            <main className='px-4 pb-4'>{children}</main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Fragment>
  );
}
