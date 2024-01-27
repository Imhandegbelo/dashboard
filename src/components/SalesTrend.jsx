import { Bar, Line } from "react-chartjs-2";
import { bardata, options } from "../utils/chartjs";

export default function SalesTrend() {
  return (
    <>
      <div
        className="flex justify-between font-semibold "
        aria-label="Table of recent orders"
      >
        <h3 className="text-[#26282C] text-lg">Sales Trends</h3>
        <div className="flex gap-2.5 items-center font-medium">
          <p className="text-sm text-[#3A3F51]">Sort by:</p>
          <div className="border py-1.5 px-3 rounded-full">
            <select name="sort" id="sort" className="text-xs text-[#3A3F51]">
              <option value="Weekly" aria-label="Weekly">
                Weekly
              </option>
              <option value="Monthly" aria-label="Monthly">
                Monthly
              </option>
              <option value="Yearly" aria-label="Yearly">
                Yearly
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        <Bar data={bardata} options={options} />
      </div>
    </>
  );
}
