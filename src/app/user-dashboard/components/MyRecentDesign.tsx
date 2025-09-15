import { ChevronRight, Trophy, Star, X, Clock } from "lucide-react";
import Image from "next/image";

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

const getStatusConfig = (status: string) => {
  switch (status) {
    case "winner":
      return {
        icon: Trophy,
        text: "Winner",
        className: "bg-status-success/10 text-status-success",
      };
    case "shortlisted":
      return {
        icon: Star,
        text: "Shortlisted",
        className: "bg-status-info/10 text-status-info",
      };
    case "review":
      return {
        icon: Clock,
        text: "Under Review",
        className: "bg-status-warning/10 text-status-warning",
      };
    case "rejected":
      return {
        icon: X,
        text: "Rejected",
        className: "bg-status-error/10 text-status-error",
      };
    default:
      return {
        icon: Clock,
        text: "Pending",
        className: "bg-muted text-muted-foreground",
      };
  }
};

export const DesignGrid = () => {
  return (
    <section className="w-full mt-10">
      {/* Contests For You */}
      <div className="rounded-2xl w-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            My Recent Designs
          </h2>
          <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors">
            View Library
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {designs.map((design, index) => {
            const statusConfig = getStatusConfig(design.status);
            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-200 group"
              >
                {/* Image */}
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

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    {design.title}
                  </h3>

                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${statusConfig.className}`}
                  >
                    <StatusIcon className="w-4 h-4" />
                    <span className={`${design.color}`}>
                      {statusConfig.text}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
