import React from "react";
import RevenueGraph from "./RevenueGraph";
import SystemHealthMonitor from "./SystemHealthMonitor";

const AnalyticsInsights = () => {
  return (
    <section className=" w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
      <RevenueGraph />
      <SystemHealthMonitor />
    </section>
  );
};

export default AnalyticsInsights;
