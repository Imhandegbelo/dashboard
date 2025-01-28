import Topnav from "./Topnav";
import { orders } from "../data/tabledata";
import { platforms } from "../data/platforms";
import OrderTable from "./OrderTable";
import TopPlatforms from "./TopPlatforms";
import Insight from "./Insight";
import { useState } from "react";
import OrdersModal from "./OrdersModal";
import SalesTrend from "./SalesTrend";

export default function Main({ isDark }) {
  const [orderModal, setOrderModal] = useState(false);

  return (
    <div
      className={`w-full h-screen overflow-y-scroll ${
        isDark ? "bg-slate-800" : "bg-[#fafafa]"
      } flex flex-col`}
    >
      <Topnav isDark={isDark} />
      <div className="flex flex-col gap-4 p-4 lg:gap-5 lg:p-5 font-plus-jakarta-sans relative bg-transparent">
        <div className="flex flex-col md:flex-row gap-4 lg:gap-5 h-fit md:h-[374px]">
          <div
            className={`md:w-3/5 p-5 rounded-xl h-[50vh] md:h-full border ${
              isDark
                ? "bg-slate-700 border-slate-700"
                : "bg-white border-[#EDF2F7]"
            } `}
          >
            <SalesTrend isDark={isDark} />
          </div>
          <div className="md:w-2/5">
            <Insight isDark={isDark} />
          </div>
        </div>
        {/* Orders modal */}
        {orderModal && (
          <OrdersModal
            children={<OrderTable orders={orders} />}
            onclick={() => setOrderModal(!orderModal)}
          />
        )}
        <div className="flex flex-col md:flex-row gap-5 h-[374px]/ h-full">
          <div
            className={`md:w-3/5 border ${
              isDark
                ? "text-slate-200 bg-slate-700 border-slate-600"
                : "text-[#3A3F51] bg-white border-[#EDF2F7]"
            } p-5 rounded-xl h-full md:overflow-y-hidden`}
          >
            <div
              className="flex justify-between font-semibold"
              aria-label="Table of recent orders"
            >
              <h3
                className={`text-lg ${
                  isDark ? "text-white/90" : "text-[#26282C]"
                }`}
              >
                Last Orders
              </h3>
              <button
                onClick={() => setOrderModal(!orderModal)}
                className="text-[#34CAA5] text-lg hover:underline"
                aria-label="See all orders"
              >
                See All
              </button>
            </div>
            <div className="h-[350px] w-sm md:w-[600px] lg:w-[710px] overflow-x-auto no-scrollbar">
              <OrderTable orders={orders} isDark={isDark} />
            </div>
          </div>
          <div
            className={`w-full md:w-2/5 ${
              isDark ? "bg-slate-700" : "bg-white"
            }  rounded-xl md:overflow-y-scroll no-scrollbar`}
          >
            <div
              className="flex justify-between text-lg font-semibold px-5 pt-5"
              aria-label="Table of recent orders"
            >
              <h3 className="text-[#26282C]">Top Platforms</h3>
              <button
                className="text-[#34CAA5] hover:underline"
                aria-label="See all top platforms"
              >
                See All
              </button>
            </div>
            <div className="h-[350px] overflow-y-auto no-scrollbar p-5 bg-[#fafafa]/">
              <TopPlatforms platforms={platforms} isDark={isDark} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
