"use client";
import {
  Pie,
  PieChart,
  ResponsiveContainer,
  SectorProps,
  Cell,
} from "recharts";

type Coordinate = {
  x: number;
  y: number;
};

type PieSectorData = {
  percent?: number;
  name?: string | number;
  midAngle?: number;
  middleRadius?: number;
  tooltipPosition?: Coordinate;
  value?: number;
  paddingAngle?: number;
  dataKey?: string;
  payload?: any;
};

type PieSectorDataItem = React.SVGProps<SVGPathElement> &
  Partial<SectorProps> &
  PieSectorData;

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 250 },
  { name: "Group D", value: 150 },
];

// Extended color palette (blues + accents)
const COLORS = [
  "#1E3A8A", // dark blue
  "#3B82F6", // blue
  "#60A5FA", // light blue
  "#6366F1", // indigo
  "#06B6D4", // cyan/teal
  "#0EA5E9", // sky blue
];

export default function DisputesByStatus() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={100}
          outerRadius={150}
          dataKey="value"
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
}
