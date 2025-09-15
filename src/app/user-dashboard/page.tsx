"use client";
import React from "react";
import { DashboardHeader } from "@/app/user-dashboard/components/UserDashboardHeader";
import { HeroSection } from "@/app/user-dashboard/components/HeroSection";
import DashboardCards from "@/app/user-dashboard/components/DashboardCards";
import { AvailSidebar } from "@/app/user-dashboard/components/AvailableBalance";
import { ContestsSection } from "@/app/user-dashboard/components/ContestsSection";
import { DesignGrid } from "@/app/user-dashboard/components/MyRecentDesign";

const UserDashboard = () => {
  return (
    <div className="flex w-full min-h-screen items-start pt-5 justify-center bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-col w-[80%]">
        <DashboardHeader />
        <HeroSection />
        <DashboardCards />

        <div className="flex flex-col lg:flex-row items-start w-full gap-6">
          <div className="flex-1 w-full">
            <ContestsSection />
            <DesignGrid />
          </div>

          <div className="w-full lg:w-auto lg:flex-shrink-0 lg:sticky lg:top-6 lg:self-start">
            <AvailSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
