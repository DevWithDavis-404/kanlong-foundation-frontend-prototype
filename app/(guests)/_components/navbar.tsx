"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { navItems } from "./navbar-config";
import { AppLogoIcon } from "@/components/app-logo-icon";

export function GuestNavbar() {
  return (
    <div className="sticky top-0 flex items-center justify-between px-10 py-4">
      {/* Logo */}
      <AppLogoIcon />

      {/* Navigation */}
      <NavigationMenu>
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuLink
              key={item.title}
              className={navigationMenuTriggerStyle()}
              render={<Link href={item.url}>{item.title}</Link>}
            />
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Other */}
      <div className="">
        <Button
          nativeButton={false}
          render={<Link href={"/admin/dashboard"}>Admin</Link>}
        />
      </div>
    </div>
  );
}
