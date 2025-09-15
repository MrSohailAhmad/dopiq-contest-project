import {
  Search,
  Edit3,
  Paperclip,
  Smile,
  Send,
  Heart,
  ThumbsUp,
} from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex h-screen my-10 rounded-2xl overflow-hidden bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold text-gray-900">Messages</h1>
              <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
                40
              </span>
            </div>
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <Edit3 className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto">
          {/* Phoenix Baker */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer border-l-4 border-blue-500">
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src="/professional-bearded-man.png"
                  alt="Phoenix Baker"
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    Phoenix Baker
                  </h3>
                  <span className="text-xs text-gray-500">5min ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">@phoenix</p>
                <p className="text-sm text-gray-600 mt-1">
                  Here's the latest revision of your logo
                </p>
              </div>
            </div>
          </div>

          {/* Katherine Moss */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src="/professional-woman-brown-hair.png"
                  alt="Katherine Moss"
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    Katherine Moss
                  </h3>
                  <span className="text-xs text-gray-500">20min ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">@kathy</p>
                <p className="text-sm text-gray-600 mt-1">
                  Looking forward to your feedback..
                </p>
              </div>
            </div>
          </div>

          {/* Mollie Hall */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src="/curly-haired-woman.png"
                  alt="Mollie Hall"
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    Mollie Hall
                  </h3>
                  <span className="text-xs text-gray-500">1hr ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">@mollie</p>
                <p className="text-sm text-gray-600 mt-1">
                  I've sent the source files for the inspiration you..
                </p>
              </div>
            </div>
          </div>

          {/* Rosalee Melvin */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src="/professional-blonde-woman.png"
                  alt="Rosalee Melvin"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    Rosalee Melvin
                  </h3>
                  <span className="text-xs text-gray-500">2hr ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">@rosalee</p>
                <p className="text-sm text-gray-600 mt-1">
                  When would be a good time to reach you out..
                </p>
              </div>
            </div>
          </div>

          {/* Anaiah Whitten */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src="/woman-dark-hair.png"
                  alt="Anaiah Whitten"
                  className="w-10 h-10 rounded-full"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    Anaiah Whitten
                  </h3>
                  <span className="text-xs text-gray-500">2hr ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">@anaiah</p>
                <p className="text-sm text-gray-600 mt-1">
                  Good news!! Jack accepted the offer. I've sent over a contract
                  for him to review but..
                </p>
              </div>
            </div>
          </div>

          {/* Koray Okumus */}
          <div className="p-4 hover:bg-gray-50 cursor-pointer">
            <div className="flex items-start gap-3">
              <div className="relative">
                <img
                  src="/dark-haired-man.png"
                  alt="Koray Okumus"
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-gray-900 truncate">
                    Koray Okumus
                  </h3>
                  <span className="text-xs text-gray-500">4hr ago</span>
                </div>
                <p className="text-sm text-gray-600 truncate">@koray</p>
                <p className="text-sm text-gray-600 mt-1">
                  Thanks! Looks great!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/professional-woman-brown-hair.png"
                  alt="Katherine Moss"
                  className="w-10 h-10 rounded-full"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="font-semibold text-gray-900">
                    Katherine Moss
                  </h2>
                  <div className="flex items-center gap-1">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-green-600">Online</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600">@kathy</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="px-4 py-2 text-sm text-gray-600 hover:bg-gray-100 rounded-full border border-gray-300">
                Archive
              </button>
              <button className="px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-full">
                View profile
              </button>
            </div>
          </div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {/* Date Separator */}
          <div className="text-center">
            <span className="text-sm text-gray-500 bg-white px-3">
              Thursday
            </span>
          </div>

          {/* Katherine's first message */}
          <div className="flex items-start gap-3">
            <img
              src="/professional-woman-brown-hair.png"
              alt="Katherine Moss"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">
                  Katherine Moss
                </span>
                <span className="text-xs text-gray-500">Thursday 10:16am</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                <p className="text-gray-900">
                  Thanks Olivia! Almost there. I'll work on making those changes
                  you suggested and will shoot it over.
                </p>
              </div>
            </div>
          </div>

          {/* User's message */}
          <div className="flex justify-end">
            <div className="flex items-end gap-2 max-w-md">
              <div className="text-right">
                <div className="flex items-center justify-end gap-2 mb-1">
                  <span className="text-xs text-gray-500">Just now</span>
                  <span className="font-medium text-gray-900">You</span>
                </div>
                <div className="bg-blue-600 text-white rounded-lg p-3">
                  <p>
                    Hi John, I like the concept but can we try lighter colors?
                  </p>
                </div>
                <div className="flex items-center justify-end gap-1 mt-1">
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                  <ThumbsUp className="w-4 h-4 text-yellow-500 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Katherine's response */}
          <div className="flex items-start gap-3">
            <img
              src="/professional-woman-brown-hair.png"
              alt="Katherine Moss"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">
                  Katherine Moss
                </span>
                <span className="text-xs text-gray-500">Thursday 11:44am</span>
              </div>
              <div className="bg-gray-100 rounded-lg p-3 max-w-md">
                <p className="text-gray-900">
                  I'll send an updated version shortly.
                </p>
              </div>
            </div>
          </div>

          {/* Katherine's message with image */}
          <div className="flex items-start gap-3">
            <img
              src="/professional-woman-brown-hair.png"
              alt="Katherine Moss"
              className="w-8 h-8 rounded-full"
            />
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-medium text-gray-900">
                  Katherine Moss
                </span>
                <span className="text-xs text-gray-500">Thursday 11:40am</span>
              </div>
              <div className="max-w-md">
                <div className="bg-gradient-to-br from-blue-200 via-purple-200 to-orange-200 rounded-lg p-8 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-gray-800 to-orange-600 rounded-lg transform rotate-45 relative">
                    <div className="absolute inset-2 bg-white rounded transform -rotate-45"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message...."
                className="w-full px-4 py-3 pr-20 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Smile className="w-5 h-5 text-gray-400" />
                </button>
                <button className="p-1 hover:bg-gray-100 rounded">
                  <Paperclip className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </div>
            <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
