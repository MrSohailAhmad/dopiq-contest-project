import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import { FormProvider } from "../context/FormContext";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <FormProvider>
      <div className="min-h-screen" id="layout-wrapper">
        <Navbar />
        <div className="pt-18 flex items-center bg-gray-100 dark:bg-gray-900 h-screen justify-center w-full">
          {children}
        </div>
      </div>
    </FormProvider>
  );
};

export default layout;
