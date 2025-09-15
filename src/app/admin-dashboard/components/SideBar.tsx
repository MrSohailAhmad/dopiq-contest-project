"use client";

import React from "react";
import {
  Home,
  Users,
  Sparkles,
  BarChart3,
  Megaphone,
  Trophy,
  CreditCard,
  Gavel,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import dashboard_logo from "../../../assets/dashboard_logo.png";

// Icon mapping
const iconMap = {
  home: Home,
  users: Users,
  ai: Sparkles,
  analytics: BarChart3,
  announcements: Megaphone,
  contests: Trophy,
  payments: CreditCard,
  disputes: Gavel,
  settings: Settings,
  logout: LogOut,
};

// Navigation items
const navigationItems = [
  {
    id: "home",
    label: "Home",
    href: "/admin-dashboard",
    endPoint: "",
    icon: "home",
  },
  {
    id: "users",
    label: "User Management",
    href: "/admin-dashboard/user-management",
    endPoint: "user-management",
    icon: "users",
  },
  {
    id: "ai",
    label: "AI Logo Generator",
    href: "/admin-dashboard/ai",
    endPoint: "ai",
    icon: "ai",
  },
  {
    id: "analytics",
    label: "Reports & Analytics",
    href: "/admin-dashboard/analytics",
    endPoint: "analytics",
    icon: "analytics",
  },
  {
    id: "announcements",
    label: "Announcements",
    href: "/admin-dashboard/announcements",
    endPoint: "announcements",
    icon: "announcements",
  },
  {
    id: "contests",
    label: "Contest Management",
    href: "/admin-dashboard/contest-management",
    endPoint: "contest-management",
    icon: "contests",
  },
  {
    id: "payments",
    label: "Payment Management",
    href: "/admin-dashboard/payment-management",
    endPoint: "payment-management",
    icon: "payments",
  },
  {
    id: "disputes",
    label: "Dispute Management",
    href: "/admin-dashboard/dispute-management",
    endPoint: "dispute-management",
    icon: "disputes",
  },
];

const bottomNavigationItems = [
  {
    id: "settings",
    label: "Settings",
    href: "/admin-dashboard/settings",
    endPoint: "settings",
    icon: "settings",
  },
  {
    id: "logout",
    label: "Logout",
    href: "#",
    endPoint: "logout",
    icon: "logout",
    isDestructive: true,
  },
];

const SideBar = () => {
  const pathname = usePathname();

  // Function to check if a route is active
  const isRouteActive = (item: any) => {
    // For home route, check if pathname is exactly "/admin-dashboard" or "/admin-dashboard/"
    if (item.endPoint === "") {
      return (
        pathname === "/admin-dashboard" || pathname === "/admin-dashboard/"
      );
    }

    // For other routes, check if pathname exactly matches or starts with the endpoint
    const expectedPath = `/admin-dashboard/${item.endPoint}`;
    return pathname === expectedPath || pathname.startsWith(expectedPath + "/");
  };

  return (
    <aside className="w-[16%] bg-white h-screen flex flex-col rounded-3xl justify-between p-6">
      {/* Logo */}
      <div>
        <div className="mb-10">
          <Image alt="Dopiq Logo" className="h-8 w-auto" src={dashboard_logo} />
        </div>

        {/* Top navigation */}
        <nav className="flex flex-col space-y-2">
          {navigationItems.map((item) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap];
            const isActive = isRouteActive(item);

            return (
              <a
                key={item.id}
                href={item.href}
                className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <IconComponent size={20} />
                <span className="ml-4">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>

      {/* Bottom navigation */}
      <div>
        {bottomNavigationItems.map((item) => {
          const IconComponent = iconMap[item.icon as keyof typeof iconMap];
          const isActive = isRouteActive(item);

          return (
            <a
              key={item.id}
              href={item.href}
              className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                item.isDestructive
                  ? "text-red-500 hover:bg-red-50"
                  : isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <IconComponent size={20} />
              <span className="ml-4">{item.label}</span>
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
