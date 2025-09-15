import DataTable, { Column } from "@/components/DataTable/DataTable";
import { ArrowDownWideNarrow, Eye } from "lucide-react";

const ActiveContest = () => {
  const active = true;

  // Updated type to reflect the columns in the image
  type ContestData = {
    id: string;
    contestTitle: string;
    customer: string;
    startDate: string;
    endDate: string;
    submissions: number;
    winner: string;
    payment: string;
    action: string;
  };

  // Updated data array to match the image and include IDs
  const contestData: ContestData[] = [
    {
      id: "CT001", // Unique ID
      contestTitle: "Design for Tech Startup",
      customer: "John Smith",
      startDate: "Jun 15, 2023",
      endDate: "July 15, 2023",
      submissions: 15,
      winner: "No",
      payment: "Paid",
      action: "Active",
    },
    {
      id: "CT002", // Unique ID
      contestTitle: "Design for Food Product",
      customer: "Emma Johnson",
      startDate: "Jun 14, 2023",
      endDate: "July 14, 2023",
      submissions: 12,
      winner: "No",
      payment: "On Hold",
      action: "Active",
    },
    {
      id: "CT003", // Unique ID
      contestTitle: "Website Redesign",
      customer: "Michael Brown",
      startDate: "Jun 10, 2023",
      endDate: "July 10, 2023",
      submissions: 0,
      winner: "Yes",
      payment: "Paid",
      action: "Active",
    },
    {
      id: "CT004", // Unique ID
      contestTitle: "Mobile App UI",
      customer: "Sarah Wilson",
      startDate: "Jun 8, 2023",
      endDate: "July 8, 2023",
      submissions: 2,
      winner: "Yes",
      payment: "Released",
      action: "Active",
    },
    {
      id: "CT005", // Unique ID
      contestTitle: "Brand Identity",
      customer: "David Miller",
      startDate: "Jun 5, 2023",
      endDate: "July 5, 2023",
      submissions: 5,
      winner: "Yes",
      payment: "Paid",
      action: "Active",
    },
    {
      id: "CT006", // Unique ID
      contestTitle: "Brand Identity",
      customer: "David Miller",
      startDate: "Jun 5, 2023",
      endDate: "July 5, 2023",
      submissions: 5,
      winner: "Yes",
      payment: "Refunded",
      action: "Active",
    },
  ];

  const getActionStyle = (action: string) => {
    switch (action) {
      case "Suspend":
        return "bg-red-100 text-red-600";
      case "Active":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const columns: Column<ContestData>[] = [
    // You might want to add 'id' to your columns if you display it
    { key: "id", label: "ID" },
    { key: "contestTitle", label: "Contest Title" },
    { key: "customer", label: "Customer" },
    { key: "startDate", label: "Start Date" },
    { key: "endDate", label: "End Date" },
    { key: "submissions", label: "Submissions" },
    { key: "winner", label: "Winner" },
    { key: "payment", label: "Payment" },
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

  return (
    <div className="w-full lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Active Contests</h2>
        <div className="flex space-x-1 p-1 rounded-lg">
          <button className="px-4 py-2 border bg-white rounded-md text-black  shadow flex items-center justify-center gap-3 w-auto border-gray-300 text-sm">
            Last 7 Days
          </button>
          <button className="px-4 py-2 border bg-blue-500 rounded-md text-white shadow flex items-center justify-center gap-3 w-[10rem] text-sm">
            <ArrowDownWideNarrow size={16} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Render the DataTable with the new data and columns */}
      <DataTable data={contestData} columns={columns} />
    </div>
  );
};

export default ActiveContest;
