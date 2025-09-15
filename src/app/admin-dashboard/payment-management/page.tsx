"use client";

import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";

import PlatformFreeReportTable from "./components/PlatformFreeReportTable";
import ContestPerformances from "./components/ContestPerformances";
import RevenueBreakdowns from "./components/PieChart";
import AnalyticsCards from "./components/PaymentCards";

const page = () => {
  const [activeTab, setActiveTab] = useState("Revenue Tracking");
  const tabs = [
    {
      title: "Revenue Tracking",
    },
    {
      title: "Customer Payments",
    },
    {
      title: "Design Payouts",
    },
  ];

  return (
    <div className="flex items-start w-full flex-col gap-5">
      <div className="flex items-center justify-center w-full flex-col gap-3 rounded-2xl">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <AnalyticsCards />
        <div className="flex w-full items-center justify-center gap-5">
          <ContestPerformances />
          <RevenueBreakdowns />
        </div>
        <PlatformFreeReportTable />
      </div>
    </div>
  );
};

export default page;
