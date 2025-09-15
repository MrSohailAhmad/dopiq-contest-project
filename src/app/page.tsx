"use client";
import Navbar from "@/components/Navbar/Navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const cards = [
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
      title: "I need creative design work",
      description: "Post contests, hire top designers for your brand.",
      btnText: "Get A Creative Design",
      path: "/form/customer",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      title: "I’m here to design &amp; earn",
      description: "Post contests, hire top designers for your brand.",
      btnText: "Become A Designer",
      path: "/form/designer",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 transition-colors duration-300">
        {/* Title */}
        <div className="flex w-full h-full gap-10 flex-col items-center justify-center">
          <div className="flex w-[60%] items-start justify-center flex-col gap-5">
            <h1 className="text-6xl font-bold text-center w-full text-gray-900 dark:text-gray-100 mb-4">
              Welcome Onboard!
            </h1>
          </div>

          {/* Options */}
          <div className="flex items-start justify-center gap-4 flex-col w-[60%]">
            <div className="text-start">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Continue as…
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Lets Begin your journey with us as a..
              </p>
            </div>

            <div className="flex items-center w-full justify-start gap-4">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="relative w-[50%] h-[20rem] group rounded-xl overflow-hidden shadow-md cursor-pointer group"
                >
                  <div className="bg-[#0000007a] group-hover:absolute z-10 hidden inset-0 group-hover:flex items-center justify-center w-full h-full">
                    <button
                      onClick={() => router.push(`${card.path}`)}
                      className="bg-blue-600 dark:bg-blue-500 text-white px-4 py-3 rounded-full text-sm font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      {card.btnText}
                    </button>
                  </div>
                  <Image
                    src={card.image}
                    alt="Creative Work"
                    className="w-full  object-cover group-hover:scale-105 transition-transform duration-300"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#000000b5] flex items-end p-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {card.title}
                      </h3>
                      <p className="text-sm text-gray-200">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex absolute bottom-10 gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </>
  );
}
