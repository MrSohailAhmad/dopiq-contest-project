import React from "react";
import { Search, MessageCircle, Bell } from "lucide-react";

const AdminDashboardNav = () => {
  return (
    <header className="flex w-full ml-5 !mt-0 !mb-0 bg-white rounded-3xl p-5 justify-between items-center ">
      <div>
        <h1 className="text-2xl font-semibold">👋 Hey! Christy Zamudio.</h1>
        <p className="text-gray-500">
          Welcome back, Here's your current platform snapshot.
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative rounded-full">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            className="pl-10 pr-3 py-2 border rounded-full w-72 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search User, Contests, Payments"
            type="text"
          />
        </div>
        <button className="relative p-2 text-gray-600 border border-gray-100 hover:bg-gray-200 rounded-full transition-colors">
          <MessageCircle size={20} />
          <span className="absolute -top-0 -right-0 block h-2 w-2 rounded-full bg-red-500" />
        </button>
        <button className="relative p-2 text-gray-600 border border-gray-100 hover:bg-gray-200 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute -top-0 -right-0  block h-2 w-2 rounded-full bg-red-500" />
        </button>
        <img
          alt="User avatar"
          className="w-10 h-10 rounded-full"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHObfVnP9pFVj3VFIWV_BP_3sxOYVl02eT2z5x1FUfjUbh8BgnlzfvmQ4kXPwPybgP81VSiXW3HZq23zqoz23LKIBy9PfelrhsPT0cO3GHUFJHnKXFU_3-rV5YmlPi4j0J05G1Apztw3whXvelr0k-3gfl6Zyx_pcuCm9lHxG0P1QcrmBR0rCEeH9bmvFGhWtmVr96Q7T_9degbcwYfN9L1cx_M-pnqpKZx8KZ4iOrXJkBzJ6yI0WCxpDangnRpbTIB92eg_lVTdU"
        />
      </div>
    </header>
  );
};

export default AdminDashboardNav;
