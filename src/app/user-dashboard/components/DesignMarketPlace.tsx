import {
  Search,
  Mail,
  Compass,
  ArrowRight,
  Send,
  MapPin,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function DesignerMarketplace() {
  const designers = [
    {
      id: 1,
      name: "Thomas Moiler",
      location: "London, United Kingdom",
      rating: 5,
      tags: ["Minimalist", "Brutalist", "Playful"],
      portfolioImages: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      profileImage:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyLogos: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 2,
      name: "Mercedes deBellard",
      location: "Madrid, Spain",
      rating: 5,
      tags: ["Illustrative", "Feminine", "Dreamy"],
      portfolioImages: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      profileImage:
        "https://plus.unsplash.com/premium_photo-1690407617542-2f210cf20d7e?q=80&w=2417&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyLogos: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 3,
      name: "Theo (Fiodor) SUMKIN",
      location: "Paris, France",
      rating: 5,
      tags: ["3D Art", "Futuristic", "Dark Mode"],
      portfolioImages: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      profileImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyLogos: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
    {
      id: 4,
      name: "Katrin Eismann",
      location: "San Jose, CA, USA",
      rating: 5,
      tags: ["Elegant", "Photo-Centric", "Professional"],
      portfolioImages: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
      profileImage:
        "https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?q=80&w=1341&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      companyLogos: [
        "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1741704751367-e276706e530d?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1696642575644-834089020c0d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      ],
    },
  ];

  return (
    <div className="min-h-screen my-10">
      <div className="w-full ">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Invite a Designer Card */}
          <div className="p-4 bg-white rounded-2xl flex items-center justify-start shadow-sm">
            <div className="flex items-center w-full gap-4">
              <div className="p-3 bg-blue-100 rounded-full">
                <Mail className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Invite a Designer
                </h2>
                <div className="flex w-full items-center border border-gray-300 p-1 justify-between rounded-full overflow-hidden">
                  <div className="relative  flex-1">
                    <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      placeholder="Search by name email or profile link.."
                      className="pl-10 h-12 border-0 outline-none w-full rounded-xl"
                    />
                  </div>
                  <Button className="h-12 px-6 z-10 min-w-[20%] flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white rounded-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Invite
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Designers Card */}
          <div className="p-4 flex items-center justify-center bg-white rounded-2xl shadow-sm">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-red-100 rounded-full">
                <Compass className="w-6 h-6 text-gray-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">
                  Explore Designers
                </h2>
                <div className="flex items-center justify-between">
                  <p className="text-gray-400 mb-6 ">
                    Browse our curated list of top designers and find the
                    perfect match.
                  </p>
                  <Button className="h-12 px-6 bg-pink-500 w-[20rem] flex items-center justify-center hover:bg-pink-600 text-white rounded-full">
                    <Search className="w-4 h-4 mr-2" />
                    Browse Designers
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Designers Section */}
        <div className="mb-8 bg-white p-10  rounded-2xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-semibold text-gray-900">
              Featured Designers
            </h2>
            <Button className="text-blue-500 flex items-center justify-center hover:text-blue-600 font-medium">
              View All Designers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Designers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {designers.map((designer) => (
              <div
                key={designer.id}
                className="p-6 bg-white relative rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Portfolio Images */}
                <div className="grid grid-cols-3 gap-2">
                  {designer.portfolioImages.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-start text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-4 border-white shadow-md">
                    <Image
                      src={designer.profileImage || "/placeholder.svg"}
                      alt={designer.name}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(designer.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1">
                    {designer.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-3 h-3 mr-1" />
                    {designer.location}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {designer.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Company Logos */}
                  <div className="flex gap-3 justify-center mb-6">
                    {designer.companyLogos.map((logo, index) => (
                      <div key={index} className="w-8 h-8">
                        <Image
                          src={logo || "/placeholder.svg"}
                          alt={`Company ${index + 1}`}
                          className="w-full h-full object-contain"
                          width={100}
                          height={100}
                        />
                      </div>
                    ))}
                  </div>

                  <Button className="w-[80%] absolute bottom-3 h-10  mt-auto  text-black border border-gray-200 rounded-full">
                    Hire Designer
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row - Duplicate for demonstration */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {designers.map((designer) => (
              <div
                key={`${designer.id}-2`}
                className="p-6 bg-white relative rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Portfolio Images */}
                <div className="grid grid-cols-3 gap-2">
                  {designer.portfolioImages.map((image, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Portfolio ${index + 1}`}
                        className="w-full h-full object-cover"
                        width={300}
                        height={300}
                      />
                    </div>
                  ))}
                </div>

                {/* Profile Section */}
                <div className="flex flex-col items-start text-center mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3 border-4 border-white shadow-md">
                    <Image
                      src={designer.profileImage || "/placeholder.svg"}
                      alt={designer.name}
                      className="w-full h-full object-cover"
                      width={200}
                      height={200}
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-2">
                    {[...Array(designer.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-1">
                    {designer.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MapPin className="w-3 h-3 mr-1" />
                    {designer.location}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 justify-center mb-4">
                    {designer.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Company Logos */}
                  <div className="flex gap-3 justify-center mb-6">
                    {designer.companyLogos.map((logo, index) => (
                      <div key={index} className="w-8 h-8">
                        <Image
                          src={logo || "/placeholder.svg"}
                          alt={`Company ${index + 1}`}
                          className="w-full h-full object-contain"
                          width={100}
                          height={100}
                        />
                      </div>
                    ))}
                  </div>
                  <Button className="w-[80%] absolute bottom-3 h-10  mt-auto  text-black border border-gray-200 rounded-full">
                    Hire Designer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
