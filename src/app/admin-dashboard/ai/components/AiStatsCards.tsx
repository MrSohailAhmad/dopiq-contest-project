import {
  DollarSign,
  TrendingDown,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";
import React from "react";

const AiStatsCards = () => {
  const statsData = [
    {
      title: "Total Users",
      value: "24,583",
      change: "+4.3%",
      changeType: "positive",
      period: "From Last Week",
      icon: Users,
      iconColor: "text-white",
      bgColor: "bg-blue-500",
    },
    {
      title: "Active Contests",
      value: "142",
      change: "+8.3%",
      changeType: "positive",
      period: "From Last Week",
      icon: Trophy,
      iconColor: "text-white",
      bgColor: "bg-blue-500",
    },
    {
      title: "Revenue",
      value: "$18,256",
      change: "+22.3%",
      changeType: "positive",
      period: "From Last Week",
      icon: DollarSign,
      iconColor: "text-white",
      bgColor: "bg-blue-500",
    },
  ];
  return (
    <section className=" w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {statsData.map((stat, index) => {
        const IconComponent = stat.icon;
        const ChangeIcon =
          stat.changeType === "positive" ? TrendingUp : TrendingDown;

        return (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <p className="text-blue-900 text-lg font-medium">
                  {stat.title}
                </p>
                <p className="text-3xl font-bold mt-2 text-gray-900">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  <ChangeIcon
                    size={14}
                    className={`mr-1 ${
                      stat.changeType === "positive"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium ${
                      stat.changeType === "positive"
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {stat.change}
                  </span>
                  <span className="text-blue-500 text-sm ml-1">
                    {stat.period}
                  </span>
                </div>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <IconComponent size={24} className={stat.iconColor} />
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default AiStatsCards;
