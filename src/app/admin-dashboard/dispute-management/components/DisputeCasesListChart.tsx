"use client";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page H", uv: 4200, pv: 5200, amt: 2800 },
  { name: "Page I", uv: 3100, pv: 4100, amt: 2600 },
  { name: "Page J", uv: 5000, pv: 6100, amt: 3200 },
];

const DisputeCasesListChart = () => {
  return (
    <div className="flex items-center justify-center w-full !h-[24rem]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          barSize={64} // 4rem = 64px
        >
          {/* Gradient Definitions */}
          <defs>
            <linearGradient id="cyanGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#06b334" stopOpacity={0.9} />
              <stop offset="95%" stopColor="#22d3ee" stopOpacity={0.4} />
            </linearGradient>

            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.9} />
              {/* blue-500 */}
              <stop offset="95%" stopColor="#93c5fd" stopOpacity={0.4} />
              {/* blue-300 */}
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="pv" fill="url(#blueGradient)" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default DisputeCasesListChart;
