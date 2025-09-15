"use client";

import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";

import DisputeCasesList from "./components/DisputeCasesList";
import AnalyticsCards from "./components/PaymentCards";
import RevenueBreakdowns from "./components/DisputesByStatusPieChart";
import PlatformFreeReportTable from "./components/PlatformFreeReportTable";

const page = () => {
  const [activeTab, setActiveTab] = useState("Disputes Cases");
  const tabs = [
    {
      title: "Disputes Cases",
    },
    // {
    //   title: "Customer Payments",
    // },
    // {
    //   title: "Design Payouts",
    // },
  ];

  return (
    <div className="flex items-start w-full flex-col gap-5">
      <div className="flex items-center justify-center w-full flex-col gap-3 rounded-2xl">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <AnalyticsCards />
        <PlatformFreeReportTable />
        <div className="flex w-full items-center justify-center gap-5">
          <DisputeCasesList />
          <RevenueBreakdowns />
        </div>
      </div>
    </div>
  );
};

export default page;
