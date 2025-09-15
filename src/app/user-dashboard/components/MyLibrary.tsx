import { Download, Edit, Heart, Search, Trophy } from "lucide-react";

export default function LogoGallery() {
  const logos = [
    {
      id: 1,
      name: "Urban Spaces",
      tagline: "Modern Living Solutions",
      category: "Real Estate",
      status: "Downloaded",
      statusColor: "text-blue-600 bg-blue-50",
      gradient: "bg-gradient-to-br from-sky-300 via-blue-400 to-purple-300",
      logo: "N",
    },
    {
      id: 2,
      name: "Tech Nest",
      tagline: "Building Digital Futures",
      category: "Technology",
      status: "Generated",
      statusColor: "text-blue-600 bg-blue-50",
      gradient: "bg-gradient-to-br from-yellow-200 via-green-200 to-blue-200",
      logo: "🌀",
    },
    {
      id: 3,
      name: "Brew House",
      tagline: "Craft Coffee & Cozy Spaces",
      category: "Food & Beverage",
      status: "Edited",
      statusColor: "text-orange-600 bg-orange-50",
      gradient: "bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-200",
      logo: "∞",
    },
    {
      id: 4,
      name: "Style Threads",
      tagline: "Fashion for Everyday Life",
      category: "Fashion",
      status: "Contest Winner",
      statusColor: "text-green-600 bg-green-50",
      gradient: "bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300",
      logo: "◊",
    },
    {
      id: 5,
      name: "Style Threads",
      tagline: "Fashion for Everyday Life",
      category: "Fashion",
      status: "Contest Winner",
      statusColor: "text-green-600 bg-green-50",
      gradient: "bg-gradient-to-br from-blue-300 via-purple-300 to-pink-300",
      logo: "◊",
    },
    {
      id: 6,
      name: "Brew House",
      tagline: "Craft Coffee & Cozy Spaces",
      category: "Food & Beverage",
      status: "Edited",
      statusColor: "text-orange-600 bg-orange-50",
      gradient: "bg-gradient-to-br from-yellow-200 via-amber-200 to-orange-200",
      logo: "∞",
    },
    {
      id: 7,
      name: "Urban Spaces",
      tagline: "Modern Living Solutions",
      category: "Real Estate",
      status: "Downloaded",
      statusColor: "text-blue-600 bg-blue-50",
      gradient: "bg-gradient-to-br from-sky-300 via-blue-400 to-purple-300",
      logo: "N",
    },
    {
      id: 8,
      name: "Tech Nest",
      tagline: "Building Digital Futures",
      category: "Technology",
      status: "Generated",
      statusColor: "text-blue-600 bg-blue-50",
      gradient: "bg-gradient-to-br from-yellow-200 via-green-200 to-blue-200",
      logo: "🌀",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-white mt-10 rounded-2xl p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-gray-900">My Logos</h1>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search Logo by Name.."
                className="pl-12 pr-6 py-3 w-80 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow duration-200"
              >
                {/* Logo Display Area */}
                <div
                  className={`${logo.gradient} h-48 flex items-center justify-center relative`}
                >
                  <div className="text-6xl font-bold text-white drop-shadow-lg">
                    {logo.logo === "N" && (
                      <div className="relative">
                        <div className="text-6xl font-bold bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
                          N
                        </div>
                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-gray-800">
                          BRAND NAME
                        </div>
                      </div>
                    )}
                    {logo.logo === "🌀" && (
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-red-500 via-blue-500 to-gray-700 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-r from-red-500 to-blue-500"></div>
                        </div>
                      </div>
                    )}
                    {logo.logo === "∞" && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <div className="text-4xl text-gray-700 transform rotate-90">
                          ∞
                        </div>
                      </div>
                    )}
                    {logo.logo === "◊" && (
                      <div className="w-16 h-16 flex items-center justify-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-gray-800 via-orange-500 to-gray-800 transform rotate-45 rounded-lg shadow-lg"></div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {logo.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{logo.tagline}</p>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-sm text-gray-700 font-medium">
                      {logo.category}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${logo.statusColor}`}
                    >
                      {logo.status}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Heart className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Edit className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Download className="w-5 h-5 text-gray-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                      <Trophy className="w-5 h-5 text-gray-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center flex-col text-2xl my-10 rounded-2xl gap-5 justify-center p-20 bg-black">
        <span className="font-semibold text-white">
          Set Your logo or get the complete brand Kit
        </span>
        <div className="flex items-center justify-center gap-4">
          <button
            style={{ fontSize: "medium" }}
            className=" bg-white font-light w-[24rem]  text-black px-8 py-2 rounded-full"
          >
            Browse Designer
          </button>
          <button
            style={{ fontSize: "medium" }}
            className="bg-[#f24369] !font-light w-[24rem]  text-white px-5 py-2 rounded-full"
          >
            Get vector brand kit (Premium)
          </button>
        </div>
      </div>
    </>
  );
}
