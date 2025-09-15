import { Search, Eye, Edit, X, Trash2, Trophy, Star } from "lucide-react";

export default function MyContest() {
  const contests = [
    {
      id: "CON12345",
      title: "Modern Tech Startup Logo",
      status: "Active",
      entries: 52,
      prize: "$200",
      createdOn: "Aug 18, 2025",
      deadline: "3 Days Left",
      statusColor: "bg-green-100 text-green-800",
      deadlineColor: "text-red-500",
    },
    {
      id: "CON12890",
      title: "Café Branding Contest",
      status: "Completed",
      entries: 134,
      prize: "$350",
      createdOn: "June 30, 2025",
      deadline: "Ended",
      statusColor: "bg-gray-100 text-gray-800",
      deadlineColor: "text-red-500",
    },
    {
      id: "CON13021",
      title: "AI SaaS App Logo",
      status: "Draft",
      entries: 0,
      prize: "TBD",
      createdOn: "Aug 20, 2023",
      deadline: "Not Set",
      statusColor: "bg-orange-100 text-orange-800",
      deadlineColor: "text-red-500",
    },
    {
      id: "CON12345",
      title: "Modern Tech Startup Logo",
      status: "Active",
      entries: 52,
      prize: "$200",
      createdOn: "Aug 18, 2025",
      deadline: "3 Days Left",
      statusColor: "bg-green-100 text-green-800",
      deadlineColor: "text-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header Navigation */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 border-b-2 border-blue-500 pb-2">
              <span className="text-gray-900 font-medium">All Contest</span>
              <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-1">
                4
              </span>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-gray-600">Active Contest</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                3
              </span>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-gray-600">Completed Contest</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                2
              </span>
            </div>
            <div className="flex items-center space-x-2 pb-2">
              <span className="text-gray-600">Draft Contest</span>
              <span className="bg-gray-400 text-white text-xs rounded-full px-2 py-1">
                1
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
      <div className="bg-white rounded-lg shadow-sm">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">
              All Contests
            </h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search Contests.."
                className="pl-10 pr-4 py-2 border rounded-full border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none w-64"
              />
            </div>
          </div>
        </div>

        {/* Contest List */}
        <div className="divide-y flex items-center justify-center gap-3 flex-col w-full p-4  divide-gray-200">
          {contests.map((contest, index) => (
            <div
              key={index}
              className="p-6 hover:bg-gray-50 bg-blue-50 border w-full rounded-2xl border-gray-200"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Trophy Icon */}
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>

                  {/* Contest Info */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-medium text-gray-900">
                        {contest.title}
                      </h3>
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${contest.statusColor}`}
                      >
                        {contest.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mb-3">#{contest.id}</p>

                    {/* Stats Row */}
                    <div className="flex items-center space-x-8 text-sm">
                      <div>
                        <span className="text-gray-500">Entries</span>
                        <div className="font-medium text-green-600">
                          {contest.entries}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Prize</span>
                        <div className="font-medium text-blue-600">
                          {contest.prize}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">Created On</span>
                        <div className="font-medium text-gray-900">
                          {contest.createdOn}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-500">
                          {contest.status === "Completed"
                            ? "Ended"
                            : contest.status === "Draft"
                            ? "Not Set"
                            : "3 Days Left"}
                        </span>
                        <div className={`font-medium ${contest.deadlineColor}`}>
                          {contest.status === "Completed"
                            ? "Jul 15, 2023"
                            : contest.status === "Draft"
                            ? "NA"
                            : "Aug 21, 2025"}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <X className="w-4 h-4" />
                  </button>
                  <button className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
