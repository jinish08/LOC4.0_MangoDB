import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";

const data = [
  {
    name: "Day 1",
    Time: 24,
  },
  {
    name: "Day 2",
    Time: 14,
  },
  {
    name: "Day 3",
    Time: 10,
  },
  {
    name: "Day 4",
    Time: 4,
  },
  {
    name: "Day 5",
    Time: 5,
  },
  {
    name: "Day 6",
    Time: 13,
  },
  {
    name: "Day 7",
    Time: 12,
  },
];

const color1 = ["#92A3FD", "#9DCEFF"];
const color2 = ["#C58BF2", "#EEA4CE"];
const barColors = ["#92A3FD", "#C58BF2"];

const Chart = () => {
  return (
    <div>
      <BarChart
        width={700}
        height={300}
        data={data}
        barCategoryGap={15}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        padding={{
          right: 30,
          left: 20,
        }}
      >
        <defs>
          <linearGradient
            id="colorUv"
            x1="100%"
            y1="100%"
            x2="0%"
            y2="100%"
            spreadMethod="reflect"
          >
            <stop offset="0" stopColor="#C58BF2" />
            <stop offset="1" stopColor="#EEA4CE" />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="2 2" />
        <XAxis dataKey="name" />
        <YAxis dataKey="Time" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Time" /*fill="url(#colorUv)"*/ radius={[20, 20, 20, 20]}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Chart;
