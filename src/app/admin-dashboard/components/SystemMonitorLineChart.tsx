import React from "react";

const SystemMonitorLineChart = ({
  text,
  percentage,
  color,
}: {
  text: string;
  percentage: number;
  color: string;
}) => {
  return (
    <div className="flex items-center justify-between relative text-sm">
      <div
        className={`w-[${percentage}%] flex items-center justify-between p-3 relative ${color} rounded-full h-8`}
      >
        <div className="flex w-full  items-center justify-between text-sm ">
          <span className="">{text}</span>
          <span>{percentage}%</span>
        </div>
      </div>
    </div>
  );
};

export default SystemMonitorLineChart;
