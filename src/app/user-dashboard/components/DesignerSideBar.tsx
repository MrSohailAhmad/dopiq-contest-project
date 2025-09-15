"use client";
import { ChevronRight, Lightbulb, MessageSquare, Trophy } from "lucide-react";
import Image from "next/image";

const recentActivities = [
  {
    title: "Modern Tech Startup Logo",
    time: "2 hours ago",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    title: 'New feedback on your "Restaurant Branding"',
    time: "2 hours ago",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    title: "You received a new contest invitation",
    time: "2 hours ago",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    title: "Modern Tech Startup Logo",
    time: "2 hours ago",
    image:
      "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
];

export const DesignerSideBar = () => {
  return (
    <aside className="w-80 sticky-sidebar space-y-6 self-start">
      {/* Recent Activity */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
        <div className="flex w-full items-center border-b border-gray-200 dark:border-gray-700 justify-between p-4">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Messages
          </h3>
          <button className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 p-2 ">
          {recentActivities.map((activity, index) => {
            return (
              <div
                key={index}
                className="flex items-start gap-2 p-3 rounded-2xl mb-2 bg-blue-500/20 dark:bg-blue-500/10"
              >
                <div className={`p-2 rounded-full  flex-shrink-0`}>
                  <Image
                    src={activity.image}
                    width={20}
                    height={20}
                    alt="user img"
                    className="w-10 h-10 rounded-full"
                  />
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
      {/* Balance Card */}
      <div className="bg-black rounded-2xl p-6 text-white">
        <div className="mb-4">
          {/* <div className="text-3xl font-bold mb-1">$340</div> */}
          <div className="text-white/80 font-medium">Hire a Pro Designer</div>
          <div className="text-sm text-white/70 mt-1">
            Work 1-on-1 with our top designer for your most important project
          </div>
        </div>

        <button className="w-full bg-gradient-to-b from-[#fff] to-[#dddcdc] text-black hover:bg-white/30 backdrop-blur-sm border border-white/30  py-3 rounded-full font-medium transition-all duration-200">
          Browse Designer
        </button>
      </div>
    </aside>
  );
};
