"use client";

import { Heading } from "lucide-react";
import AdminStatsCards from "../components/AdminStatsCards";
import AnalyticsInsights from "../components/AnalyticsInsights";
import UserGrowth from "../components/UserGrowth";
import RecentContest from "../components/RecentContest";
import LatestWithDrawalsAndOpenDeputes from "../components/LatestWithDrawalsAndOpenDeputes";

const page = () => {
  return (
    <div className="flex items-start w-full flex-col gap-5">
      <AdminStatsCards />
      <Heading />
      <AnalyticsInsights />
      <UserGrowth />
      <RecentContest />
      <LatestWithDrawalsAndOpenDeputes />
    </div>
  );
};

export default page;
