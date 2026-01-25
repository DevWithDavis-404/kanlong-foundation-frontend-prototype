"use client";

import { NavGroup } from "@/types/global";
import {
  IconHeartHandshake,
  IconInbox,
  IconLayoutDashboard,
  IconUsers,
} from "@tabler/icons-react";

export const adminNav: NavGroup[] = [
  {
    label: "CRM Platform",
    items: [
      {
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: IconLayoutDashboard,
      },
      {
        title: "Donations",
        url: "/admin/donations",
        icon: IconHeartHandshake,
      },
      {
        title: "Volunteers",
        url: "/admin/volunteers",
        icon: IconUsers,
      },
      {
        title: "Inbox",
        url: "/admin/inbox",
        icon: IconInbox,
      },
    ],
  },
];
