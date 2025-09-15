"use client";
import { Search, HelpCircle, MessageSquare, Bell, Menu } from "lucide-react";
import Image from "next/image";
import logo from "../../../assets/logo.png";

export const DashboardHeader = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 rounded-2xl px-6 py-4 shadow-md">
      <div className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={logo}
            alt="logo"
            className="w-32 h-8"
            width={128}
            height={32}
          />
        </div>

        {/* Center: Search */}
        <div className="hidden md:flex flex-1 max-w-md ml-auto mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search Contests"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm text-gray-700 dark:text-gray-200"
            />
          </div>
        </div>

        {/* Right: Menu + Actions */}
        <div className="flex items-center gap-4">
          {/* Help Center Button */}
          <button className="hidden md:flex items-center gap-2 border px-3 py-2 rounded-full border-gray-300 dark:border-gray-600 text-blue-600 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <HelpCircle className="w-5 h-5" />
            <span className="text-sm font-light">Help Center</span>
          </button>

          {/* Messages & Notifications */}
          <div className="flex items-center gap-2">
            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <MessageSquare className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>

            <button className="relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-700 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
          </div>

          {/* User Avatar */}
          <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200 dark:border-gray-600">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHObfVnP9pFVj3VFIWV_BP_3sxOYVl02eT2z5x1FUfjUbh8BgnlzfvmQ4kXPwPybgP81VSiXW3HZq23zqoz23LKIBy9PfelrhsPT0cO3GHUFJHnKXFU_3-rV5YmlPi4j0J05G1Apztw3whXvelr0k-3gfl6Zyx_pcuCm9lHxG0P1QcrmBR0rCEeH9bmvFGhWtmVr96Q7T_9degbcwYfN9L1cx_M-pnqpKZx8KZ4iOrXJkBzJ6yI0WCxpDangnRpbTIB92eg_lVTdU"
              alt="User Avatar"
              className="w-full h-full object-cover"
              width={32}
              height={32}
            />
          </div>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </nav>
  );
};
