"use client";
import AdminStatsCards from "./components/AdminStatsCards";
import AnalyticsInsights from "./components/AnalyticsInsights";
import Heading from "./components/Header";
import LatestWithDrawalsAndOpenDeputes from "./components/LatestWithDrawalsAndOpenDeputes";
import RecentContest from "./components/RecentContest";
import UserGrowth from "./components/UserGrowth";

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
