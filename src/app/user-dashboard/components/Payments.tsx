import { Plus } from "lucide-react";

export default function PaymentHistoryPage() {
  return (
    <div className="min-h-screen my-10">
      <div className="w-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold text-gray-900">
            Payment History
          </h1>

          {/* Navigation Tabs */}
          <div className="flex items-center bg-white rounded-2xl p-3 gap-1">
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Contests
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Direct Hire
            </button>
            <button className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Invoices
            </button>
            <button className="px-4 py-2 text-sm text-white bg-blue-600 rounded-lg font-medium">
              Refunds/Disputes
            </button>
          </div>
          <div className="flex items-center gap-6">
            {/* Add New Payment Button */}
            <button className="flex items-center ml-auto gap-2 px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
              <Plus className="w-4 h-4" />
              Add New Payment
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white p-10 rounded-lg border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
            <div className="col-span-3 flex items-center gap-3">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <span className="text-sm font-medium text-gray-700">Case</span>
            </div>
            <div className="col-span-4">
              <span className="text-sm font-medium text-gray-700">Reason</span>
            </div>
            <div className="col-span-3">
              <span className="text-sm font-medium text-gray-700">Status</span>
            </div>
            <div className="col-span-2">
              <span className="text-sm font-medium text-gray-700">
                Download
              </span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-200">
            {/* Row 1 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="col-span-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900 font-medium">
                  #RF-1021
                </span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-sm text-gray-700">
                  Designer did not deliver
                </span>
              </div>
              <div className="col-span-3 flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  Under Review
                </span>
              </div>
              <div className="col-span-2 flex items-center">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  View
                </button>
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="col-span-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900 font-medium">
                  #RF-1022
                </span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-sm text-gray-700">
                  Designer did not deliver
                </span>
              </div>
              <div className="col-span-3 flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  Under Review
                </span>
              </div>
              <div className="col-span-2 flex items-center">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  View
                </button>
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid grid-cols-12 gap-4 px-6 py-4 hover:bg-gray-50 transition-colors">
              <div className="col-span-3 flex items-center gap-3">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <span className="text-sm text-gray-900 font-medium">
                  #RF-1023
                </span>
              </div>
              <div className="col-span-4 flex items-center">
                <span className="text-sm text-gray-700">
                  Designer did not deliver
                </span>
              </div>
              <div className="col-span-3 flex items-center">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                  Under Review
                </span>
              </div>
              <div className="col-span-2 flex items-center">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors">
                  View
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
