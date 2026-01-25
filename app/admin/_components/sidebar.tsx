"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { isSameUrl } from "@/lib/utils";
import { adminNav } from "./sidebar-config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppLogo } from "@/components/app-logo";
import { NavUser } from "./nav-user";

export function AdminSidebar() {
  const pathname = usePathname();
  return (
    <Sidebar collapsible={"icon"}>
      {/* Sidebar Header */}
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuButton size={"lg"}>
            <AppLogo />
          </SidebarMenuButton>
        </SidebarMenu>
      </SidebarHeader>
      {/* Sidebar Content */}
      <SidebarContent className="px-1.5 md:px-0">
        {adminNav.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent className="flex flex-col gap-2">
              {group.items.map((item) => (
                <SidebarMenu key={item.title}>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      tooltip={item.title}
                      isActive={isSameUrl(pathname, item.url)}
                    >
                      <Link
                        href={item.url}
                        className="flex w-full items-center gap-2"
                      >
                        {item.icon && <item.icon className="size-14" />}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              ))}
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      {/* Sidebar Footer */}
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
    </Sidebar>
  );
}
