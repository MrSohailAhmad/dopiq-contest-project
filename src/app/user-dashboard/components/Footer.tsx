import { Send, MessageCircle, Twitter, Instagram } from "lucide-react";

export default function FooterPage() {
  return (
    <div className=" bg-black flex items-center justify-center">
      <footer className="w-full  max-w-[80%] text-white">
        {/* Top Section */}
        <div className="px-8 py-8">
          <div className="flex items-start justify-between">
            {/* Logo */}
            <div className="text-3xl font-bold tracking-wider">DOPIQ</div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Send className="w-5 h-5 text-gray-900" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <MessageCircle className="w-5 h-5 text-gray-900" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Twitter className="w-5 h-5 text-gray-900" />
              </div>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5 text-gray-900" />
              </div>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex items-start justify-between mt-8">
            {/* Tagline */}
            <div className="text-gray-300">
              <div className="text-base mb-1">
                Where Brands Are Born in the Future.
              </div>
              <div className="text-base">Craft. Remix. Own. On-chain.</div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white underline transition-colors"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="px-8 py-6">
          <div className="flex items-center justify-between text-sm text-gray-400">
            <div>© 2025 Dopiq Inc. All rights reserved.</div>
            <div className="flex items-center gap-8">
              <div>Built on Solana</div>
              <div>• Powered by creators •</div>
            </div>
            <div>Designed for the decentralized brand era.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
