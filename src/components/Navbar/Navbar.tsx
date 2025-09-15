"use client";
import { useState, useEffect } from "react";
import { LogIn, Wallet, Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  // Ensure hydration matches
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <nav className="w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed z-50 shadow-sm px-6 py-4 flex items-center justify-center">
      <div className="w-[95%] flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" className="h-8 w-[10rem]" />
        </div>

        {/* Middle: Links (Desktop) */}
        <ul className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-800 dark:text-gray-200">
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              How It Works
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Creators
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Investors
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Support
            </a>
          </li>
        </ul>

        {/* Right: Controls */}
        <div className="flex items-center space-x-4">
          {/* Theme Toggle */}
          {/* Toggle Button */}
          <button
            onClick={() => {
              setTheme(theme === "dark" ? "light" : "dark");
            }}
            className="relative cursor-pointer w-12 h-6 rounded-full bg-blue-400 flex items-center px-1"
          >
            <span
              className={`absolute w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 ${
                theme === "dark" ? "translate-x-6" : "translate-x-0"
              }`}
            />
          </button>

          {/* Login Button */}
          <button className="hidden sm:flex cursor-pointer items-center gap-2 bg-black dark:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <LogIn size={16} />
            Log In
          </button>

          {/* Wallet Icon */}
          <button className="hidden sm:flex w-10 h-10 cursor-pointer rounded-full bg-blue-600 dark:bg-blue-500 md:flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <Wallet size={18} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-md md:hidden flex flex-col items-center py-6 space-y-4 text-gray-800 dark:text-gray-200">
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            How It Works
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Features
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Creators
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Investors
          </a>
          <a
            href="#"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            Support
          </a>

          {/* Mobile Login & Wallet */}
          <button className="flex cursor-pointer items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <LogIn size={16} />
            Log In
          </button>

          <button className="w-10 h-10 cursor-pointer rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            <Wallet size={18} />
          </button>
        </div>
      )}
    </nav>
  );
}
