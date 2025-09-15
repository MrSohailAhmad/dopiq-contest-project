import React from "react";
import { Trophy, Send, Palette, DollarSign, Star } from "lucide-react";

const DashboardCards = () => {
  // Card data array
  const cards = [
    {
      title: "Ongoing Contest",
      value: 22,
      color: "bg-blue-500 hover:bg-blue-600",
      icon: Trophy,
    },
    {
      title: "Submissions Made",
      value: 156,
      color: "bg-green-500 hover:bg-green-600",
      icon: Send,
    },
    {
      title: "My Designs",
      value: 89,
      color: "bg-purple-500 hover:bg-purple-600",
      icon: Palette,
    },
    {
      title: "Total Earning",
      value: "$2,450",
      color: "bg-yellow-500 hover:bg-yellow-600",
      icon: DollarSign,
    },
    {
      title: "Average Rating",
      value: "4.8",
      color: "bg-red-500 hover:bg-red-600",
      icon: Star,
    },
  ];

  return (
    <div className="py-10">
      <div className="w-full">
        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900 p-6 flex flex-col items-start text-center hover:shadow-xl dark:hover:shadow-gray-700 transition-shadow duration-300"
            >
              {/* Card Icon */}
              <div
                className={`${card.color} relative p-4 rounded-full mb-4 transition-colors`}
              >
                <card.icon size={20} className="text-white" />
              </div>

              {/* Card Title */}
              <h2 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4 leading-tight">
                {card.title}
              </h2>

              {/* Card Value */}
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {card.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardCards;
