import React from "react";
import { Eye, Download, RefreshCw, X, ChevronDown, Star } from "lucide-react";
import Image from "next/image";

const MySubmissions = () => {
  const submissions = [
    {
      id: 1,
      title: "NexusFlow Modern Logo",
      submitted: "2 days ago",
      contestId: "TS1289",
      comments: 3,
      rating: 4.0,
      image:
        "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=400&h=300&fit=crop",
      isWinner: true,
      buttons: [
        { type: "view", label: "View", icon: Eye, variant: "outline" },
        {
          type: "download",
          label: "Download",
          icon: Download,
          variant: "primary",
        },
      ],
    },
    {
      id: 2,
      title: "Brand Identity for Eco Company",
      submitted: "5 days ago",
      contestId: "EC4532",
      comments: 2,
      rating: 4.5,
      image:
        "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=400&h=300&fit=crop",
      isWinner: false,
      buttons: [
        { type: "view", label: "View", icon: Eye, variant: "outline" },
        {
          type: "download",
          label: "Download",
          icon: Download,
          variant: "primary",
        },
      ],
    },
    {
      id: 3,
      title: "Mobile Banking App UI",
      submitted: "1 week ago",
      contestId: "MB7871",
      comments: 1,
      rating: 3.8,
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop",
      isWinner: false,
      buttons: [
        { type: "view", label: "View", icon: Eye, variant: "outline" },
        {
          type: "resubmit",
          label: "Resubmit",
          icon: RefreshCw,
          variant: "primary",
        },
      ],
    },
    {
      id: 4,
      title: "Packaging Design for Coffee",
      submitted: "2 days ago",
      contestId: "PC2109",
      comments: 3,
      rating: 0,
      image:
        "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop",
      isWinner: true,
      buttons: [
        { type: "view", label: "View", icon: Eye, variant: "outline" },
        { type: "withdraw", label: "Withdraw", icon: X, variant: "danger" },
      ],
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? "fill-amber-400 text-amber-400"
            : index < rating
            ? "fill-amber-400/50 text-amber-400"
            : "fill-gray-200 text-gray-200"
        }`}
      />
    ));
  };

  const getButtonClasses = (variant: string) => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 text-white hover:bg-blue-700";
      case "danger":
        return "bg-red-500 text-white hover:bg-red-600";
      case "outline":
      default:
        return "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50";
    }
  };

  return (
    <div className="w-full my-10 p-6 bg-white min-h-screen rounded-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Submissions</h1>

        {/* Filter Dropdown */}
        <div className="relative">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 text-gray-700">
            All Types
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Submissions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {submissions.map((submission) => (
          <div
            key={submission.id}
            className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Image Container */}
            <div className="relative">
              <Image
                width={400}
                height={300}
                src={submission.image}
                alt={submission.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              {/* Winner Badge */}
              {submission.isWinner && (
                <div className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  🏆 Winner
                </div>
              )}
            </div>

            {/* Card Content */}
            <div className="p-6">
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {submission.title}
              </h3>

              {/* Metadata */}
              <div className="space-y-1 text-sm text-gray-600 mb-4">
                <p>Submitted: {submission.submitted}</p>
                <p>Contest ID#{submission.contestId}</p>
                <p>{submission.comments} Comments</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-1">
                  {renderStars(submission.rating)}
                </div>
                {submission.rating > 0 ? (
                  <span className="text-sm text-gray-600">
                    ({submission.rating})
                  </span>
                ) : (
                  <span className="text-sm text-gray-500">Not Ratings yet</span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                {submission.buttons.map((button, index) => {
                  const Icon = button.icon;
                  return (
                    <button
                      key={index}
                      className={`flex  items-center gap-2 px-4 py-2 rounded-full font-medium transition-colors duration-200 flex-1 justify-center ${getButtonClasses(
                        button.variant
                      )}`}
                    >
                      <Icon className="w-4 h-4" />
                      {button.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySubmissions;
