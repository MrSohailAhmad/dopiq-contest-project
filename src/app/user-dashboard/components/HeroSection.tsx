import { Star, Edit3, Calendar, Menu } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 via-accent to-blue-900  rounded-3xl  mt-6 p-8 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 right-4 w-20 h-20 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-8 left-8 w-16 h-16 border border-white/20 rounded-full"></div>
      </div>

      <div className="relative h-full z-10">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-2 flex items-center gap-3">
              Welcome back, Sarah Johnson
              <span className="text-3xl">👋</span>
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Heres whats happening with your System today
            </p>

            <div className="flex gap-4">
              <button className="bg-gradient-to-b from-[#fff] to-[#dddcdc] text-black hover:bg-white/30 backdrop-blur-sm border border-white/30  px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2">
                <Star className="w-5 h-5" />
                Browse Contests
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center gap-2">
                <Edit3 className="w-5 h-5" />
                My Designs
              </button>
            </div>
          </div>

          <div className="hidden lg:flex h-full items-center gap-4">
            <button className=" bg-white hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-xl transition-all duration-200">
              <Calendar className="w-6 text-black h-6" />
            </button>
            <button className="bg-white hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-xl transition-all duration-200">
              <Menu className="w-6 text-black  h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
