import DataTable, { Column } from "@/components/DataTable/DataTable";
import { Eye } from "lucide-react";

const PlatformFreeReportTable = () => {
  const active = true;

  // Updated type to match the second image and include 'id'
  type AnalyticsTable = {
    id: string; // Added id field
    date: string;
    customer: string; // Changed from 'user' to 'customer'
    contestType: string; // Added contestType
    contestAmount: string; // Added contestAmount
    platformFee: string; // Added platformFee
    feePercentage: string; // Added feePercentage
    action: string;
  };

  // Updated data to match the second image and include 'id'
  const analyticsTable: AnalyticsTable[] = [
    {
      id: "#CT1256", // Added id
      date: "Jun 15, 2023",
      customer: "John Smith", // Updated from 'user'
      contestType: "Logo Design", // Added
      contestAmount: "$500.00", // Added
      platformFee: "$100.00", // Added
      feePercentage: "20%", // Added
      action: "Active",
    },
    {
      id: "#CT1255", // Added id
      date: "Jun 14, 2023",
      customer: "Emma Johnson", // Updated from 'user'
      contestType: "Packaging", // Added
      contestAmount: "$500.00", // Added
      platformFee: "$100.00", // Added
      feePercentage: "20%", // Added
      action: "Active",
    },
    {
      id: "#CT1254", // Added id
      date: "Jun 10, 2023",
      customer: "Michael Brown", // Updated from 'user'
      contestType: "Website", // Added
      contestAmount: "$500.00", // Added
      platformFee: "$100.00", // Added
      feePercentage: "20%", // Added
      action: "Active",
    },
    {
      id: "#CT1253", // Added id
      date: "Jun 8, 2023",
      customer: "Sarah Wilson", // Updated from 'user'
      contestType: "App UI", // Added
      contestAmount: "$500.00", // Added
      platformFee: "$100.00", // Added
      feePercentage: "20%", // Added
      action: "Active",
    },
  ];

  // Updated columns to match the second image and include 'id'
  const columns: Column<AnalyticsTable>[] = [
    { key: "id", label: "Contest ID" }, // Changed label to match image
    { key: "date", label: "Date" },
    { key: "customer", label: "Customer" }, // Changed key and label
    { key: "contestType", label: "Contest Type" }, // Added
    { key: "contestAmount", label: "Contest Amount" }, // Added
    { key: "platformFee", label: "Platform Fee" }, // Added
    { key: "feePercentage", label: "Fee Percentage" }, // Added
    {
      key: "action",
      label: "",
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <button className="bg-indigo-100 text-indigo-600 p-2 rounded">
            <Eye size={16} />
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Platform Free Report</h2>
        <div className="flex space-x-1 p-1 rounded-lg">
          <button className="px-4 py-2 border bg-white rounded-md text-black  shadow flex items-center justify-center gap-3 w-auto border-gray-300 text-sm">
            Last 7 Days
          </button>
        </div>
      </div>

      <DataTable data={analyticsTable} columns={columns} />
    </div>
  );
};

export default PlatformFreeReportTable;
