"use client";
import Tabs from "@/components/Tabs/Tabs";
import React, { useState } from "react";
import ActiveContest from "./components/ActiveContests";

const page = () => {
  const [activeTab, setActiveTab] = useState("Active Contests");
  const tabs = [
    {
      title: "Active Contests",
    },
    {
      title: "Closed Contests",
    },
    {
      title: "Flagged Contests",
    },
  ];
  return (
    <div className="flex items-start w-full flex-col gap-5">
      <div className="flex items-center justify-center w-full flex-col gap-3 rounded-2xl">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <ActiveContest />
    </div>
  );
};

export default page;
