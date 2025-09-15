import React, { useState } from "react";
import {
  ChevronDown,
  Wallet,
  Clock,
  TrendingUp,
  CreditCard,
} from "lucide-react";

const WithdrawFunds = () => {
  const [selectedPayment, setSelectedPayment] = useState("payoneer");
  const [withdrawalAmount, setWithdrawalAmount] = useState("200");

  const balanceCards = [
    {
      title: "Available Balance",
      amount: "$1,250.00",
      icon: Wallet,
      bgColor: "bg-green-500",
    },
    {
      title: "Pending Balance",
      amount: "$450.00",
      icon: Clock,
      bgColor: "bg-orange-500",
    },
    {
      title: "Total Earnings",
      amount: "$8,725.00",
      icon: TrendingUp,
      bgColor: "bg-purple-500",
    },
  ];

  const paymentMethods = [
    {
      id: "bank",
      name: "Bank Transfer",
      icon: "🏦",
    },
    {
      id: "paypal",
      name: "Paypal",
      icon: "PayPal",
    },
    {
      id: "credit",
      name: "Credit Transfer",
      icon: "VISA",
    },
    {
      id: "payoneer",
      name: "Payoneer",
      icon: "⭕",
    },
  ];

  return (
    <div className="w-full">
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {balanceCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 ${card.bgColor} rounded-full flex items-center justify-center`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <p className="text-gray-600 text-sm mb-1">{card.title}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {card.amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Withdraw Funds Section */}
      <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Withdraw Funds
        </h2>

        {/* Payment Methods */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedPayment(method.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between ${
                selectedPayment === method.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-sm">
                  {method.icon === "PayPal" ? (
                    <span className="text-blue-600 font-bold text-xs">
                      PayPal
                    </span>
                  ) : method.icon === "VISA" ? (
                    <CreditCard className="w-4 h-4 text-blue-600" />
                  ) : (
                    <span>{method.icon}</span>
                  )}
                </div>
                <span className="font-medium text-gray-900 text-sm">
                  {method.name}
                </span>
              </div>
              {selectedPayment === method.id && (
                <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Withdrawal Amount */}
        <div className="mb-6">
          <label className="block text-gray-900 font-medium mb-3">
            Withdrawal Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg">
              $
            </span>
            <input
              type="text"
              value={withdrawalAmount}
              onChange={(e) => setWithdrawalAmount(e.target.value)}
              className="w-full pl-8 pr-4 py-4 border border-gray-300 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="200"
            />
          </div>
          <p className="text-gray-500 text-sm mt-2">Minimum withdrawal: $200</p>
        </div>

        {/* Account Details */}
        <div className="mb-8">
          <label className="block text-gray-900 font-medium mb-3">
            Account Details
          </label>
          <div className="relative">
            <button className="w-full p-4 border border-gray-300 rounded-xl text-left flex items-center justify-between bg-white hover:border-gray-400 transition-colors">
              <span className="text-gray-700">
                Payoneer - Account#abc@gmail.com
              </span>
              <ChevronDown className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Withdraw Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-colors duration-200">
            Withdraw Funds
          </button>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;
