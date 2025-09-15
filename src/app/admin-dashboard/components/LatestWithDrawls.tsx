import React from "react";
import RecentContestsTable, { Column } from "@/components/DataTable/DataTable";

const LatestWithDrawls = () => {
  type Contest = {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    status: "Active" | "Pending" | "Completed";
  };

  const contests: Contest[] = [
    {
      id: "#CT1256",
      name: "Logo Design for Tech Startup",
      startDate: "Jun 12, 2025",
      endDate: "Jun 19, 2025",
      status: "Active",
    },
    {
      id: "#CT1257",
      name: "Packaging for Food Product",
      startDate: "Jun 10, 2025",
      endDate: "Jun 17, 2025",
      status: "Active",
    },
    {
      id: "#CT1258",
      name: "Website Redesign",
      startDate: "Jun 5, 2025",
      endDate: "Jun 12, 2025",
      status: "Pending",
    },
    {
      id: "#CT1259",
      name: "Mobile App UI",
      startDate: "Jun 3, 2025",
      endDate: "Jun 14, 2025",
      status: "Completed",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600";
      case "Pending":
        return "bg-yellow-100 text-yellow-600";
      case "Completed":
        return "bg-blue-100 text-blue-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const columns: Column<Contest>[] = [
    { key: "id", label: "Contest ID" },
    { key: "name", label: "Name" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-light ${getStatusStyle(
            value
          )}`}
        >
          {value}
        </span>
      ),
    },
  ];
  return (
    <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Latest WithDrawals</h2>
        <div className="flex space-x-1  p-1 rounded-lg">
          <button className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
            View All →
          </button>
        </div>
      </div>

      <RecentContestsTable data={contests} columns={columns} />
    </div>
  );
};

export default LatestWithDrawls;
