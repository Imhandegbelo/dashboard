import boxtick from "../assets/salestrend/boxtick.svg";
import cart from "../assets/salestrend/cart.svg";
import refund from "../assets/salestrend/refund.svg";
import coins from "../assets/salestrend/coins.svg";
import trendup from "../assets/salestrend/trendup.svg";
import trenddown from "../assets/salestrend/trenddown.svg";
import gaingraph from "../assets/salestrend/gaingraph.svg";
import lossgraph from "../assets/salestrend/lossgraph.svg";
import { linedata, lineoptions } from "../utils/chartjs";
import { Chart } from "react-chartjs-2";

export default function Insight() {
  const data = [
    {
      icon: boxtick,
      title: "Total Order",
      count: "350",
      growth: 23.5,
      gain: true,
    },
    {
      icon: refund,
      title: "Total Refund",
      count: "270",
      growth: 23.5,
      gain: false,
    },
    {
      icon: cart,
      title: "Average Sales",
      count: "1567",
      growth: 23.5,
      gain: false,
    },
    {
      icon: coins,
      title: "Total Income",
      count: "$350,000",
      growth: 23.5,
      gain: true,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-5 h-full">
      {data.map((content, index) => (
        <div className="rounded-xl bg-white border border-[#EDF2F7] p-4 h-full">
          <div className="flex justify-between items-center">
            <div className="flex items-center justify-center rounded-full p-1.5 border">
              <img src={content.icon} alt="" />
            </div>
            <div className="">
              <img src={content.gain ? gaingraph : lossgraph} alt="trend" />
              {/* <Chart id={index+2} options={lineoptions} data={linedata}  /> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-lg text-[#898989] font-medium">
              {content.title}
            </h3>
            <p className="text-xl text-[#3A3F51] font-semibold">
              {content.count}
            </p>
            <div className="flex justify-between shrink">
              <div className={`flex rounded-full gap-1 py-px px-2 ${content.gain?"bg-[#34CAA5]/10":"bg-[#ED544E]/10"}`}>
                <img src={content.gain ? trendup : trenddown} alt="" />
                <span className={`text-sm font-medium ${content.gain?"text-[#34CAA5]":"text-[#ED544E]"}`}>{content.growth}</span>
              </div>
              <span>vs. previous month</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
