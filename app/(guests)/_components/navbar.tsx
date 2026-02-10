"use client";

import { AppLogo } from "@/components/app-logo";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IconLayoutSidebar } from "@tabler/icons-react";
import Link from "next/link";
import { navItems } from "./navbar-config";

export function GuestNavbar() {
  return (
    <section className='border-sidebar-border/80 bg-background sticky top-0 z-50 border-b'>
      <nav className='mx-auto flex h-16 items-center px-4 md:max-w-7xl'>
        {/* Mobile Navigation */}
        <div className='lg:hidden'>
          <Sheet>
            <SheetTrigger
              render={
                <Button variant='ghost' size='icon' className='mr-2 size-8.5'>
                  <IconLayoutSidebar className='h-5 w-5' />
                </Button>
              }
            />
            <SheetContent
              side='left'
              className='bg-background dark:bg-sidebar flex h-full w-64 flex-col items-stretch justify-between'
            >
              <SheetTitle className='sr-only'>Navigation Menu</SheetTitle>
              <SheetHeader className='flex justify-start text-left'>
                <AppLogo />
              </SheetHeader>
              <div className='flex h-full flex-1 flex-col space-y-4 p-4'>
                <div className='flex h-full flex-col justify-between text-sm'>
                  <div className='flex flex-col space-y-4'>
                    {navItems.map((item) => (
                      <Link
                        key={item.title}
                        href={item.url}
                        className='flex items-center space-x-2 font-medium'
                      >
                        {item.icon && <item.icon className='size-5' />}
                        <span>{item.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        <Link
          href={"/"}
          prefetch
          className='flex size-6 items-center space-x-2 text-sm font-light'
        >
          <AppLogo />
        </Link>

        {/* Navigation */}
        <div className='ml-auto hidden items-center space-x-6 lg:flex'>
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
        </div>
        <div className='ml-auto'>
          <ModeToggle />
        </div>
      </nav>
    </section>
  );
}
