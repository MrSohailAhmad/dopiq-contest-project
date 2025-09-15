import DataTable, { Column } from "@/components/DataTable/DataTable";
import React from "react";

const RecentActivity = () => {
  const active = true;

  type Activity = {
    id: string;
    date: string;
    user: string;
    logosGenerated: number;
    creditsUsed: number;
    cost: string;
  };

  const activity: Activity[] = [
    {
      id: "#CT1256",
      date: "Jun 15, 2023",
      user: "John Designer",
      logosGenerated: 12,
      creditsUsed: 232,
      cost: "$632",
    },
    {
      id: "#CT1253",
      date: "Jun 15, 2023",
      user: "Sarah Creative",
      logosGenerated: 5,
      creditsUsed: 454,
      cost: "$454",
    },
    {
      id: "#CT1252",
      date: "Jun 15, 2023",
      user: "Michael Artist",
      logosGenerated: 9,
      creditsUsed: 123,
      cost: "$123",
    },
    {
      id: "#CT1251",
      date: "Jun 15, 2023",
      user: "Emma Designer",
      logosGenerated: 34,
      creditsUsed: 456,
      cost: "$456",
    },
  ];

  const columns: Column<Activity>[] = [
    { key: "date", label: "Date" },
    { key: "user", label: "User" },
    { key: "logosGenerated", label: "Logos Generated" },
    { key: "creditsUsed", label: "Credits Used" },
    { key: "cost", label: "Cost" },
  ];

  return (
    <div className="w-full lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Recent Usage Activity</h2>
        <div className="flex space-x-1 p-1 rounded-lg">
          <button
            className={`px-4 py-2 border ${
              active ? "bg-blue-50" : "bg-white"
            } rounded-md border-gray-300 shadow text-sm`}
          >
            Day
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow text-sm">
            Week
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow text-sm">
            Month
          </button>
        </div>
      </div>

      <DataTable data={activity} columns={columns} />
    </div>
  );
};

export default RecentActivity;
