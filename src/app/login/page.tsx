"use client";
import Image from "next/image";

import blue_logo from "../../assets/Screenshot_2025-09-14_at_9.51.24_PM-removebg-preview.png";
import Link from "next/link";
const page = () => {
  // const [formData, setFormData] = useState({ email: "", password: "" });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log("Login data:", formData);
  //   // 👉 Add your NextAuth, API call, or auth logic here
  // };

  return (
    <div className="flex items-center justify-center h-screen w-full">
      <div className="bg-white rounded-2xl shadow-2xl flex h-[80%] w-[80%]">
        <div className="w-[60%] bg-black p-3 rounded-l-2xl text-white relative">
          <div className=" flex absolute  z-10 w-full items-center justify-center text-2xl font-bold text-blue-400">
            <Image
              alt="AI-powered abstract orb design"
              className="w-[40%] h-[40%] object-fill rounded-lg"
              src={blue_logo}
              width={128}
              height={32}
            />
          </div>
          <div className="flex flex-col items-center justify-center h-full">
            <Image
              alt="AI-powered abstract orb design"
              className="w-[80%] h-[80%] object-fill rounded-lg"
              width={128}
              height={32}
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKKizgrllEGOFvDl5cEMNeelZ3IklOadVxVZvpmPWQy14hntfxEn_-C2UgFUIKdz22w6rQz67Qte_8WbPafE-EeHDUaUHSZzxLElfbdqGBDUcNB5Ja0rvTuSbO9MrTv5rV9tDU0lMMMGoArqxDyy8K0zry2hvDMMgGy5hSqKYqUQdDPl_UtzAPxOisFqTGWz4kyqIiog6OLPG7ajrsKsm2SLgY2xQWyRs-HXBnMGP3qzisAg_aTPg8GtKVy44xnbB6xKEP8ZYSOac"
            />
            <div className="bottom-10 w-[80%] p-3  bg-white/20 rounded-2xl absolute">
              <h1 className="text-2xl font-semibold ">
                AI-Powered Logo Creation &amp; Brand Tools Designed for
                Creators.
              </h1>
              <p className="text-gray-300 mt-4">
                Quickly design professional-grade logos and build a consistent
                brand identity with our easy-to-use AI tools.
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <div className="mx-auto ">
            <h2 className="text-3xl mx-auto w-full font-bold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              Login to access your dashboard
            </p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form action="#" className="space-y-6" method="POST">
              <div>
                <label
                  className="block text-sm font-light text-gray-500"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="mt-1 relative rounded-full shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400" />
                  </div>
                  <input
                    autoComplete="email"
                    className="appearance-none block w-full px-3 py-3 border  border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    // required=""
                    type="email"
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-light text-gray-500"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-full shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="material-icons text-gray-400" />
                  </div>
                  <input
                    autoComplete="current-password"
                    className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-full placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    // required=""
                    type="password"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                  />
                  <label
                    className="ml-2 block text-sm text-gray-900"
                    htmlFor="remember-me"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a
                    className="font-medium text-blue-600 hover:text-blue-500"
                    href="#"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <Link
                  href="/admin-dashboard"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  type="submit"
                >
                  Sign in
                </Link>
              </div>
            </form>
            <p className="mt-6 text-center text-sm text-gray-500">
              Terms of Use | Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
