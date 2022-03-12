import React from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const data = [
  { name: "Exercise 1", value: 20 },
  { name: "Exercise 2", value: 40 },
  { name: "Exercise 3", value: 20 },
  { name: "Exercise 4", value: 20 },
];

const barColors = ["#92A3FD", "#C58BF2"];
let renderLabel = function (entry) {
  return entry.name;
};

const Chart2 = () => {
  return (
    <div>
      <PieChart width={400} height={400}>
        <Pie
          dataKey="value"
          isAnimationActive={false}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          label={renderLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={barColors[index % 2]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Chart2;
