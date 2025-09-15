import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen" id="layout-wrapper">
      <Navbar />
      <div className="pt-18 flex items-center bg-gray-100 dark:bg-gray-900 h-screen justify-center w-full">
        {children}
      </div>
    </div>
  );
};

export default layout;
