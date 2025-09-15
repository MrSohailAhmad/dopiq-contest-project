import React from "react";
import SystemMonitorLineChart from "./SystemMonitorLineChart";

const SystemHealthMonitor = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">System Health Monitor</h2>
      <div className="space-y-4">
        <SystemMonitorLineChart
          text="Api Time"
          percentage={70}
          color="bg-gradient-to-l from-gray-200 to-blue-300"
        />

        <SystemMonitorLineChart
          text="Error Rate"
          percentage={40}
          color="bg-gradient-to-l from-gray-200 to-red-300"
        />

        <SystemMonitorLineChart
          text="Response Time"
          percentage={60}
          color="bg-gradient-to-l from-gray-200 to-green-300"
        />

        <SystemMonitorLineChart
          text="Database Load"
          percentage={90}
          color="bg-gradient-to-l from-gray-200 to-yellow-300"
        />

        <SystemMonitorLineChart
          text="Response Time"
          percentage={60}
          color="bg-gradient-to-l from-gray-200 to-cyan-300"
        />

        <SystemMonitorLineChart
          text="Error Rate"
          percentage={40}
          color="bg-gradient-to-l from-gray-200 to-indigo-300"
        />
      </div>
    </div>
  );
};

export default SystemHealthMonitor;
