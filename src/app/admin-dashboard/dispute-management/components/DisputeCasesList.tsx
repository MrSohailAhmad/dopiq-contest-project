import DisputeCasesListChart from "./DisputeCasesListChart";

const DisputeCasesList = () => {
  const active = true;

  return (
    <div className="w-full lg:col-span-2 bg-white p-6 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium">Disputes Over time</h2>
        <div className="flex space-x-1  p-1 rounded-lg">
          <button
            className={`px-4 py-2 border ${
              active ? "bg-blue-50" : "bg-white"
            } rounded-md  border-gray-300 shadow text-sm"`}
          >
            Day
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow text-sm">
            Week
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-md bg-white shadow text-sm">
            Month
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center w-full !h-[24rem]">
        <DisputeCasesListChart />
      </div>
    </div>
  );
};

export default DisputeCasesList;
