import DisputesByStatus from "./PaymentPieChart";
import RevenueBreakdown from "./PaymentPieChart";

const RevenueBreakdowns = () => {
  return (
    <div className="w-[50%] lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Disputes by Status</h2>
      </div>
      <div className="flex items-center justify-center w-full !h-[410px]">
        <DisputesByStatus />
      </div>
    </div>
  );
};

export default RevenueBreakdowns;
