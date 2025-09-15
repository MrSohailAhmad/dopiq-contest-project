import React, { useState } from "react";

const TransactionHistory = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "completed", label: "Completed" },
    { id: "pending", label: "Pending" },
    { id: "failed", label: "Failed" },
  ];

  const transactions = [
    {
      id: 1,
      date: "Aug 25, 2023",
      transactionId: "#TX78291",
      source: "Contest-Tech Startup Logo",
      amount: "+$250.00",
      status: "completed",
    },
    {
      id: 2,
      date: "Aug 20, 2023",
      transactionId: "#TX78265",
      source: "Direct Hire-Brand Identity",
      amount: "+$250.00",
      status: "completed",
    },
    {
      id: 3,
      date: "Aug 18, 2023",
      transactionId: "#TX78210",
      source: "Bonus-Referral Program",
      amount: "+$250.00",
      status: "pending",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
            Completed
          </span>
        );
      case "pending":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-800 border border-orange-200">
            Pending
          </span>
        );
      case "failed":
        return (
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-800 border border-red-200">
            Failed
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Header with Tabs */}
        <div className="p-6 border-b border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Transaction History
            </h2>
          </div>

          {/* Tab Navigation */}
          <div className="flex w-full ">
            <div className="flex items-center justify-end w-full ml-auto ">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-2  rounded-full font-light transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-100">
              <tr>
                <th className="text-left py-4 px-6">
                  <input
                    type="checkbox"
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Date
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Transaction ID
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Source
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Amount
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {transactions.map((transaction) => (
                <tr
                  key={transaction.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="py-4 px-6">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {transaction.date}
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-sm text-blue-600 font-medium hover:text-blue-800 cursor-pointer">
                      {transaction.transactionId}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-900">
                    {transaction.source}
                  </td>
                  <td className="py-4 px-6 text-sm font-semibold text-green-600">
                    {transaction.amount}
                  </td>
                  <td className="py-4 px-6">
                    {getStatusBadge(transaction.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
