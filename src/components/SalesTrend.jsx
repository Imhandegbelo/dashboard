import { useState } from "react";
import chevron from "../assets/topnav/chevron.svg";
import { SalesChart } from "./SalesChart";

export default function SalesTrend({ isDark }) {
  const [filter, setFilter] = useState("Weekly");
  const [filterOpen, setFilterOpen] = useState(false);

  const handleSetFilter = (e) => {
    setFilter(e.target.innerText);
    setFilterOpen(!filterOpen);
  };

  return (
    <>
      <div
        className={`flex justify-between font-semibold ${
          isDark ? "text-slate-200" : "text-[#26282C]"
        }`}
        aria-label="Table of recent orders"
      >
        <h3 className={` text-lg`}>Sales Trends</h3>
        <div className="flex gap-2.5 items-center font-medium">
          <p
            className={`text-sm ${
              isDark ? "text-slate-200" : "text-[#3A3F51]"
            }`}
          >
            Sort by:
          </p>
          <div className="relative">
            <button
              onClick={() => setFilterOpen(!filterOpen)}
              className={`flex gap-3 items-center text-xs ${
                isDark ? "text-slate-200" : "text-[#3A3F51]"
              } border py-1.5 px-3 rounded-full`}
            >
              {filter}
              <img src={chevron} alt="" />
            </button>
            {filterOpen && (
              <div
                className={`absolute w-full rounded-xl ${
                  isDark ? "text-slate-200 bg-slate-700" : "bg-white"
                } px-3 py-2 shadow-xl shadow-white/30 z-30`}
              >
                {["Daily", "Weekly", "Monthly", "Yearly"].map((filter) => (
                  <button
                    key={filter}
                    className={`w-full text-left text-xs ${
                      isDark ? "text-slate-200" : "text-[#3A3F51]"
                    }`}
                    onClick={handleSetFilter}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`${isDark ? "" : ""} w-full h-full mt-5`}>
        <SalesChart isDark={isDark} />
      </div>
    </>
  );
}
