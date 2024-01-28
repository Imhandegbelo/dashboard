import { useState } from "react";
import chevron from "../assets/topnav/chevron.svg";
import { SalesChart } from "./SalesChart";

export default function SalesTrend() {
  const [filter, setFilter] = useState("Weekly");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSetFilter = (e) => {
    setFilter(e.target.innerText);
    setFilterOpen(!filterOpen);
  };

  return (
    <>
      <div
        className="flex justify-between font-semibold "
        aria-label="Table of recent orders"
      >
        <h3 className="text-[#26282C] text-lg">Sales Trends</h3>
        <div className="flex gap-2.5 items-center font-medium">
          <p className="text-sm text-[#3A3F51]">Sort by:</p>
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex gap-3 items-center text-xs text-[#3A3F51] border py-1.5 px-3 rounded-full"
            >
              {filter}
              <img src={chevron} alt="" />
            </button>
            {filterOpen && (
              <div className="absolute w-full rounded-xl bg-white px-3 py-2 shadow-xl">
                {["Daily", "Weekly", "Monthly", "Yearly"].map((data) => (
                  <button
                    key={data}
                    className="w-full text-left text-xs text-[#3A3F51]"
                    onClick={handleSetFilter}
                  >
                    {data}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full mt-5">
        <SalesChart />
      </div>
    </>
  );
}
