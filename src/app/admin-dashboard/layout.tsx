import React from "react";
import SideBar from "./components/SideBar";
import AdminDashboardNav from "./components/AdminDashboardNav";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen bg-gray-100 overflow-hidden">
      <SideBar />
      <div className="flex-1 flex flex-col min-w-0">
        <AdminDashboardNav />
        <div className="flex-1 p-6 overflow-y-auto">{children}</div>
      </div>
    </main>
  );
};

export default layout;
