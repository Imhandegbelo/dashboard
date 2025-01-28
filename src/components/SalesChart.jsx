import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Rectangle,
  ResponsiveContainer,
} from "recharts";
import { toUSD } from "../utils/toUSD";

const data = [
  { name: "Jan", value: 12000 },
  { name: "Feb", value: 21000 },
  { name: "Mar", value: 6000 },
  { name: "Apr", value: 28000 },
  { name: "May", value: 19000 },
  { name: "Jun", value: 45000 },
  { name: "Jul", value: 14000 },
  { name: "Aug", value: 32500 },
  { name: "Sep", value: 42000 },
  { name: "Oct", value: 10000 },
  { name: "Nov", value: 35000 },
  { name: "Dec", value: 26000 },
];

const RoundedBar = (props) => {
  const { x, y, width, height } = props;

  // Defines height of rounded top
  const radius = 10;
  const path = `M${x},${y + radius} A${radius},${radius} 0 0 1 ${x + width},${
    y + radius
  } L${x + width},${y + height} L${x},${y + height} Z`;

  return <path d={path} fill={props.fill} />;
};

const ActiveBar = (props) => {
  const { x, y, width, height } = props;

  // Defines height of rounded top
  const radius = 10;
  const path = `M${x},${y + radius} A${radius},${radius} 0 0 1 ${x + width},${
    y + radius
  } L${x + width},${y + height} L${x},${y + height} Z`;

  return <path d={path} fill={"url(#colorRevenue)"} />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const value = payload[0].value;
    return (
      <div className="flex justify-center items-center bg-[#090C2C] dark:bg-black h-[26px] w-[100px] px-4 rounded-md relative">
        <p className="text-xs text-white">{toUSD(value)}</p>
      </div>
    );
  }

  return null;
};

export const SalesChart = ({ isDark }) => {
  let [barGraphData, setBarGraphData] = React.useState({});
  return (
    <ResponsiveContainer width="100%" height="90%">
      <BarChart data={data}>
        <defs>
          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={"#34CAA5"} stopOpacity={0.8} />
            <stop
              offset="95%"
              stopColor={"rgb(52,202,165,0.2)"}
              stopOpacity={0.8}
            />
          </linearGradient>
        </defs>

        <CartesianGrid vertical={false} strokeDasharray="2 2" />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          className={`font-semibold text-sm ${isDark ? "text-white/90" : ""}`}
        />

        <YAxis
          axisLine={false}
          tickLine={false}
          className={`text-xs font-semibold ${isDark ? "text-white/90" : ""}`}
          ticks={[0, 5000, 10000, 20000, 30000, 40000, 50000]}
          domain={["dataMin", "dataMax"]}
        />
        <Tooltip
          content={<CustomTooltip />}
          // to hide the other part fo the bar on hover
          cursor={false}
          position={{ x: barGraphData.x - 25, y: barGraphData.y - 48 }}
        />

        {/* <Legend /> */}

        <Bar
          dataKey="value"
          activeBar={<ActiveBar />}
          shape={<RoundedBar />}
          fill="rgb(52,202,165,0.2)"
          onMouseOver={(data) => {
            setBarGraphData(data);
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};
