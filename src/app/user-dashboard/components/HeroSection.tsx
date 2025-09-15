"use client";
import { useFormData } from "@/context/FormContext";
import {
  Calendar,
  CreditCard,
  Edit3,
  Handshake,
  Home,
  LibraryBig,
  Menu,
  MessageSquare,
  Settings,
  Sparkles,
  Star,
  Trophy,
} from "lucide-react";
import { useState } from "react";

const designerMenu = [
  { label: "Home", icon: Home, path: "designer-home" },
  { label: "Live Contest", icon: Trophy, path: "live-contest" },
  { label: "Direct Hire", icon: Handshake, path: "designer-direct-hire" },
  { label: "My Submission", icon: Handshake, path: "my-submission" },
  { label: "Messages", icon: MessageSquare, path: "messages" },
  { label: "Payments", icon: CreditCard, path: "designer-payments" },
  {
    label: "Profile Settings",
    icon: Settings,
    path: "designer-profile-settings",
  },
];

const menuItems = [
  { label: "Home", icon: Home, path: "home" },
  { label: "My Contest", icon: Trophy, path: "my-contest" },
  { label: "Direct Hire", icon: Handshake, path: "direct-hire" },
  { label: "AI logo Generation", icon: Sparkles, path: "ai-logo-generation" },
  { label: "My library", icon: LibraryBig, path: "my-library" },
  { label: "Messages", icon: MessageSquare, path: "messages" },
  { label: "Payments", icon: CreditCard, path: "payments" },
  { label: "Profile Settings", icon: Settings, path: "profile-settings" },
];

export const HeroSection = ({ setItem }: { setItem: Function }) => {
  const { userType } = useFormData();
  const [showMenu, setShowMenu] = useState(false);

  const menu = userType === "designer" ? designerMenu : menuItems;

  return (
    <section className="bg-gradient-to-r from-blue-500 via-accent to-blue-900 overflow-visible  rounded-3xl  mt-6 p-8 text-white relative ">
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

          <div className="hidden relative lg:flex h-full items-center gap-4">
            <button className=" bg-white hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-xl transition-all duration-200">
              <Calendar className="w-6 text-black h-6" />
            </button>
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="bg-white hover:bg-white/20 backdrop-blur-sm border border-white/20 p-3 rounded-xl transition-all duration-200"
            >
              <Menu className="w-6 text-black  h-6" />
            </button>
            {showMenu && (
              <div className="absolute z-10 right-0 p-3 top-12 mt-2 w-[16rem] rounded-md shadow-lg bg-white border-0 ring-1 ring-opacity-5">
                <div className="py-1" role="none">
                  {menu.map((item, index) => (
                    <a
                      onClick={() => setItem(item.path)}
                      key={index}
                      // href={item.path}
                      className="flex cursor-pointer items-center group px-4 py-3 hover:text-blue-500/40 text-sm text-gray-700 hover:bg-gray-100 "
                    >
                      <item.icon className="w-4 h-4 group-hover:text-blue-500/40 mr-2" />
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
