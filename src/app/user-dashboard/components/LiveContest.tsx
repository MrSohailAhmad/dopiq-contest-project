import { Star } from "lucide-react";
import { ContestCard } from "./ContestCard";

export default function LiveContest() {
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

  return (
    <div className="min-h-screen bg-gray-50 p-6 my-10">
      {/* Header Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 border-b-2 border-blue-500 pb-2">
              <span className="text-gray-900 font-medium">All Contest</span>
              <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                6
              </span>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-gray-600">Available Submission</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                0
              </span>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-gray-600">My Submission</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                0
              </span>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-gray-600">Complete Contest</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                0
              </span>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center space-x-2 transition-colors">
            <Star className="w-4 h-4" />
            <span>Start A New Contest</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-end justify-end gap-2">
            <button className="border border-gray-300 py-3 px-4 rounded-full">
              All Types
            </button>
            <button className="border border-gray-300 py-3 px-4 rounded-full">
              0$ to 1000$
            </button>
          </div>
        </div>

        {/* Contest List */}
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
    </div>
  );
}
