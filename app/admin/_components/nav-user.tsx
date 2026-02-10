"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { UserInfo } from "@/components/user-info";
import { User } from "@/types/models";
import { IconLogout, IconSelector, IconSettings } from "@tabler/icons-react";
import Link from "next/link";

const user: User = {
  id: 1,
  name: "Test User",
  email: "test@example.com",
  phone: "09123456789",
  created_at: new Date().toISOString(),
};

export function NavUser() {
  const { open } = useSidebar();
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size={"lg"}>
                <UserInfo user={user} />
                <IconSelector className='ml-auto' />
              </SidebarMenuButton>
            }
          />
          <DropdownMenuContent
            className='min-w-60 rounded-lg'
            side={open ? "top" : "right"}
          >
            <DropdownMenuGroup>
              <DropdownMenuLabel>
                <UserInfo user={user} />
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <IconSettings />
                Settings
              </DropdownMenuItem>
              <DropdownMenuItem
                className={"w-full hover:cursor-pointer"}
                render={
                  <Link href={"/"}>
                    <IconLogout />
                    Logout
                  </Link>
                }
              />
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
