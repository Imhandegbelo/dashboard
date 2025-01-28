import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  Tooltip,
  Filler,
  Legend,
  BarElement,
} from "chart.js";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  animation: true,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      postion: "left",
      xAlign: "center",
    },
  },
  layout: {
    padding: {
      left: 30,
      bottom: 30,
    },
  },
};

export const lineoptions = {
  responsive: true,
  animation: true,
  element: {
    point: { radius: 0 },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      display: false,
    },
  },
  layout: {
    padding: {
      left: 30,
      bottom: 30,
    },
  },
};

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const bardata = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Dataset 2",
      data: labels.map(() =>
        Math.floor(Math.random() * (50000 - 5000 + 1) + 5000)
      ),
      show: true,
      backgroundColor: "rgba(52, 202, 165, 1)",
    },
  ],
};
// export const linedata = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: "Trend",
//       data: labels.map(() =>
//         Math.floor(Math.random() * (50000 - 5000 + 1) + 5000)
//       ),
//       show: true,
//       backgroundColor: "rgba(52, 202, 165, 1)",
//     },
//   ],
// };
