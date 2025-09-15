import DataTable, { Column } from "@/components/DataTable/DataTable";
import { ArrowDownWideNarrow } from "lucide-react";

const TopUserAndCreditConsumption = () => {
  const active = true;

  type TopUserAndCreditConsumption = {
    id: string;
    date: string;
    user: string;
    logosGenerated: number;
    creditsUsed: number;
    cost: string;
  };

  const topUserAndCreditConsumption: TopUserAndCreditConsumption[] = [
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

  const columns: Column<TopUserAndCreditConsumption>[] = [
    { key: "date", label: "Date" },
    { key: "user", label: "User" },
    { key: "logosGenerated", label: "Logos Generated" },
    { key: "creditsUsed", label: "Credits Used" },
    { key: "cost", label: "Cost" },
  ];

  return (
    <div className="w-full lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Top User And Credit Consumption</h2>
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
          <button className="px-4 py-2 border bg-blue-500 rounded-md text-white shadow flex items-center justify-center gap-3 w-[7rem] text-sm">
            <ArrowDownWideNarrow size={16} />
            Export
          </button>
        </div>
      </div>

      <DataTable data={topUserAndCreditConsumption} columns={columns} />
    </div>
  );
};

export default TopUserAndCreditConsumption;
