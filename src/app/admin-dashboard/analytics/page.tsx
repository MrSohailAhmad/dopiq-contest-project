"use client";

import Tabs from "@/components/Tabs/Tabs";
import { useState } from "react";
import AnalyticsCards from "./components/AnaliticsCards";
import AnalyticsCharts from "./components/AnalyticsCharts";
import AnalyticsTable from "./components/AnalyticsTable";
import PieChart from "./components/PieChart";

const page = () => {
  const [activeTab, setActiveTab] = useState("User Growth");
  const tabs = [
    {
      title: "User Growth",
    },
    {
      title: "Revenue",
    },
    {
      title: "Contests",
    },
  ];

  return (
    <div className="flex items-start w-full flex-col gap-5">
      <div className="flex items-center justify-center w-full flex-col gap-3 rounded-2xl">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        <AnalyticsCards />
        <div className="flex w-full items-center justify-center gap-5">
          <AnalyticsCharts />
          <PieChart />
        </div>
        <AnalyticsTable />
      </div>
    </div>
  );
};

export default page;
