import React from "react";
import { PieChart, Pie, Tooltip } from "recharts";

const data = [{ name: "Cricket", value: 100 }];
let renderLabel = function (entry) {
    return entry.name;
  };

const Chart4 = () => {
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="value"
        cx="50%"
        cy="50%"
        outerRadius={75}
        fill="#92A3FD"
        label={renderLabel}
      />
      <Tooltip />
    </PieChart>
  );
};

export default Chart4;
