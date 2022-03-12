import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Today's Hours", value: 40 },
  { name: "Weekly Average", value: 100 },
];
const COLORS = ["#92A3FD", "#C58BF2"];

let renderLabel = function (entry) {
  return entry.name;
};

const Chart3 = () => {
  return (
    <PieChart width={600} height={400}>
      <Pie
        data={data}
        cx={360}
        cy={200}
        startAngle={180}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={renderLabel}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Chart3;
