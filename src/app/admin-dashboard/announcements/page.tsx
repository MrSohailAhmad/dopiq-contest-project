"use client";
import Tabs from "@/components/Tabs/Tabs";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState("Dashboard Banner");
  const tabs = [
    {
      title: "Dashboard Banner",
    },
    {
      title: "Email Broadcast",
    },
    {
      title: "History and Logs",
    },
  ];
  return (
    <div className="flex items-start w-full flex-col gap-5">
      <div className="flex items-center justify-center w-full flex-col gap-3 rounded-2xl">
        <Tabs tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default page;
