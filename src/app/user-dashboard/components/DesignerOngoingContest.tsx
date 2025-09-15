"use client";
import { useState } from "react";

import { ChevronRight, Lightbulb, MessageSquare, Trophy } from "lucide-react";
import { ContestCard } from "./ContestCard";
import Image from "next/image";
const recentActivities = [
  {
    title: "Modern Tech Startup Logo",
    time: "2 hours ago",
    icon: Trophy,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    title: 'New feedback on your "Restaurant Branding"',
    time: "2 hours ago",
    icon: MessageSquare,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    title: "You received a new contest invitation",
    time: "2 hours ago",
    icon: Lightbulb,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    title: "Modern Tech Startup Logo",
    time: "2 hours ago",
    icon: Trophy,
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
];

const designs = [
  {
    title: "Tech Startup Logo",
    status: "winner",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
    gradient: "from-amber-100 to-orange-100",
    color: "text-amber-600",
  },
  {
    title: "Restaurant Branding",
    status: "shortlisted",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=200&fit=crop",
    gradient: "from-blue-100 to-cyan-100",
    color: "text-blue-600",
  },
  {
    title: "Coffee Packaging",
    status: "review",
    image:
      "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=200&fit=crop",
    gradient: "from-purple-100 to-pink-100",
    color: "text-purple-600",
  },
  {
    title: "App Icon Design",
    status: "rejected",
    image:
      "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?w=300&h=200&fit=crop",
    gradient: "from-amber-100 to-yellow-100",
    color: "text-red-600",
  },
  {
    title: "Tech Startup Logo",
    status: "winner",
    image:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop",
    gradient: "from-green-100 to-emerald-100",
    color: "text-green-600",
  },
  {
    title: "Restaurant Branding",
    status: "shortlisted",
    image:
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=300&h=200&fit=crop",
    gradient: "from-blue-100 to-indigo-100",
    color: "text-indigo-600",
  },
];

export const OngoingContests = () => {
  //   const [activeTab, setActiveTab] = useState<"invitations" | "recommendations">(
  //     "invitations"
  //   );

  return (
    <section className="w-full mb-10">
      {/* Contests For You */}
      <div className="rounded-2xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Ongoing Contest
          </h2>
          <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 p-2 ">
          {recentActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-2 p-3 rounded-2xl mb-2 bg-blue-500/20 dark:bg-blue-500/10"
              >
                <div
                  className={`p-2 rounded-full ${activity.bgColor} flex-shrink-0`}
                >
                  <IconComponent className={`w-4 h-4 ${activity.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Your Active Contests */}
      <div className="rounded-2xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Recent Logos
          </h2>

          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => {
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200 group"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${design.gradient} relative overflow-hidden`}
                >
                  <Image
                    src={design.image}
                    alt={design.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Your Active Contests */}
      <div className="rounded-2xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Announcements
          </h2>

          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 p-2 ">
          {recentActivities.map((activity, index) => {
            const IconComponent = activity.icon;
            return (
              <div
                key={index}
                className="flex items-start gap-2 p-3 rounded-2xl mb-2 bg-blue-500/20 dark:bg-blue-500/10"
              >
                <div
                  className={`p-2 rounded-full ${activity.bgColor} flex-shrink-0`}
                >
                  <IconComponent className={`w-4 h-4 ${activity.iconColor}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-gray-100 leading-tight">
                    {activity.title}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {activity.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
