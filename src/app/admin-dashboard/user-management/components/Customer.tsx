"use client";
import DataTable, { Column } from "@/components/DataTable/DataTable";
import Tabs from "@/components/Tabs/Tabs";
import { Eye } from "lucide-react";
import { useState } from "react";

const Customer = () => {
  const [activeTab, setActiveTab] = useState("Customer");

  type Customer = {
    id: string;
    name: string;
    email: string;
    signupDate: string;
    status: "Active" | "Suspend";
    contests: number;
    spent: string;
    action: "Suspend" | "Activate";
  };

  const Customers: Customer[] = [
    {
      id: "#CUST-7821",
      name: "John Smith",
      email: "john@example.com",
      signupDate: "Jun 12, 2023",
      status: "Active",
      contests: 14,
      spent: "$2,450",
      action: "Suspend",
    },
    {
      id: "#CUST-7820",
      name: "Emma Johnson",
      email: "emma@example.com",
      signupDate: "Jun 10, 2023",
      status: "Active",
      contests: 15,
      spent: "$1,820",
      action: "Suspend",
    },
    {
      id: "#CUST-7819",
      name: "Michael Brown",
      email: "michael@example.com",
      signupDate: "Jun 8, 2023",
      status: "Suspend",
      contests: 0,
      spent: "$0",
      action: "Activate",
    },
    {
      id: "#CUST-7818",
      name: "Sarah Wilson",
      email: "sarah@example.com",
      signupDate: "Jun 5, 2023",
      status: "Suspend",
      contests: 24,
      spent: "$620",
      action: "Activate",
    },
    {
      id: "#CUST-7817",
      name: "David Miller",
      email: "david@example.com",
      signupDate: "Jun 3, 2023",
      status: "Active",
      contests: 41,
      spent: "$3,620",
      action: "Suspend",
    },
    {
      id: "#CUST-7816",
      name: "Jennifer Davis",
      email: "jennifer@example.com",
      signupDate: "May 30, 2023",
      status: "Suspend",
      contests: 14,
      spent: "$520",
      action: "Activate",
    },
  ];

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-600";
      case "Suspend":
        return "bg-orange-100 text-orange-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const getActionStyle = (action: string) => {
    switch (action) {
      case "Suspend":
        return "bg-red-100 text-red-600";
      case "Activate":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const columns: Column<Customer>[] = [
    { key: "id", label: "Customer ID" },
    {
      key: "name",
      label: "Full Name/Email",
      render: (_: string, row) => (
        <div>
          <div className="font-medium">{row.name}</div>
          <div className="text-sm text-gray-500">{row.email}</div>
        </div>
      ),
    },
    { key: "signupDate", label: "Signup Date" },
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
    { key: "contests", label: "Contests Created" },
    { key: "spent", label: "Total Spent" },
    {
      key: "action",
      label: "",
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <button className="bg-indigo-100 text-indigo-600 p-2 rounded">
            <Eye size={16} />
          </button>
          <span
            className={`px-3 py-1 rounded-full text-xs font-light ${getActionStyle(
              value
            )}`}
          >
            {value}
          </span>
        </div>
      ),
    },
  ];
  const tabes = [
    {
      title: "Customer",
    },
    {
      title: "Designer",
    },
  ];

  return (
    <div className="flex items-center justify-center flex-col gap-3 rounded-2xl">
      <Tabs tabs={tabes} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-full lg:col-span-2 bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium">{activeTab} Management</h2>
          <div className="flex space-x-1 p-1 rounded-lg">
            <button className="text-blue-500 text-sm flex items-center gap-1 hover:underline">
              View All →
            </button>
          </div>
        </div>

        <DataTable data={Customers} columns={columns} />
      </div>
    </div>
  );
};

export default Customer;
