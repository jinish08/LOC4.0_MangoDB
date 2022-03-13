import React ,{useEffect} from "react";
import {
  PieChart,
  Pie,
  Legend,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";


const barColors = ["#92A3FD", "#C58BF2"];
let renderLabel = function (entry) {
  return entry.name;
};

const Chart2 = ({exe1,exe2,exe3,exe4}) => {

  
let data = [
  { name: "Exercise 1", value: exe1 },
  { name: "Exercise 2", value: exe2 },
  { name: "Exercise 3", value: exe3 },
  { name: "Exercise 4", value: exe4 },
];
  console.log(exe1);

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
