import { Fragment } from "react/jsx-runtime";
import { AdminSidebar } from "./_components/sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AdminHeader } from "./_components/header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Fragment>
      <SidebarProvider>
        <AdminSidebar />
        <SidebarInset>
          <div className="flex flex-1 flex-col gap-4 bg-background">
            <AdminHeader />
            <main className="px-4 pb-4">{children}</main>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </Fragment>
  );
}
