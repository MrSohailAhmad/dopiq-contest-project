"use client";
import { useState } from "react";

import { ChevronRight } from "lucide-react";
import { ContestCard } from "./ContestCard";

const invitationContests = [
  {
    title: "Elegant Logo for Jewelry Brand",
    prize: "$300",
    rating: 4.2,
    entries: 12,
    timeLeft: "3 days left",
    status: "open" as const,
    category: "Logo Design",
    invitedBy: "James Wilson",
  },
];

const activeContests = [
  {
    title: "Modern Logo for Tech Startup",
    prize: "$300",
    rating: 4.2,
    entries: 24,
    category: "Logo Design",
    timeLeft: "3 days left",
    status: "open" as const,
    buttonText: "Submit Design",
  },
  {
    title: "Product Packaging for Coffee Brand",
    prize: "$500",
    rating: 4.2,
    entries: 32,
    category: "Packaging Design",
    timeLeft: "1 day left",
    status: "open" as const,
    buttonText: "View Feedback",
    buttonVariant: "secondary" as const,
  },
  {
    title: "Product Packaging for Coffee Brand",
    prize: "$500",
    rating: 4.2,
    entries: 32,
    category: "Packaging ",
    timeLeft: "1 day left",
    status: "open" as const,
    buttonText: "View Feedback",
    buttonVariant: "secondary" as const,
  },
];

export const DirectHireSection = () => {
  const [activeTab, setActiveTab] = useState<"invitations" | "recommendations">(
    "invitations"
  );

  return (
    <section className="w-full">
      {/* Contests For You */}
      <div className="rounded-2xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Contests For You
          </h2>
        </div>

        <div className="flex gap-8 mb-6">
          <button
            onClick={() => setActiveTab("invitations")}
            className={`pb-2 border-b-2 font-medium transition-colors ${
              activeTab === "invitations"
                ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Invitations
            <span className="ml-2 bg-blue-600 dark:bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              2
            </span>
          </button>
          <button
            onClick={() => setActiveTab("recommendations")}
            className={`pb-2 border-b-2 font-medium transition-colors ${
              activeTab === "recommendations"
                ? "border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            Recommend for you
            <span className="ml-2 bg-blue-600 dark:bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
              0
            </span>
          </button>
        </div>

        {activeTab === "invitations" && (
          <div className="space-y-4 bg-white dark:bg-gray-800 rounded-2xl">
            {invitationContests.map((contest, index) => (
              <ContestCard
                key={index}
                type="invitation"
                title={contest.title}
                prize={contest.prize}
                rating={contest.rating}
                entries={contest.entries}
                timeLeft={contest.timeLeft}
                status={contest.status}
                category={contest.category}
                invitedBy={contest.invitedBy}
                buttonText="Accept"
              />
            ))}
          </div>
        )}
      </div>

      {/* Your Active Contests */}
      <div className="rounded-2xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 mt-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Active Direct Hire People
          </h2>

          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            View All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeContests.map((contest, index) => (
            <ContestCard
              key={index}
              type="active"
              title={contest.title}
              prize={contest.prize}
              rating={contest.rating}
              entries={contest.entries}
              timeLeft={contest.timeLeft}
              status={contest.status}
              category={contest.category}
              buttonText={contest.buttonText}
              buttonVariant={contest.buttonVariant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
