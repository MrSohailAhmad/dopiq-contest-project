import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen" id="layout-wrapper">
      <Navbar />
      <div className="pt-18 flex items-center justify-center w-full bg-white dark:bg-gray-900">
        {children}
      </div>
    </div>
  );
};

export default layout;
