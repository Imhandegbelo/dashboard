import Topnav from "./Topnav";
import { orders } from "../data/tabledata";
import { platforms } from "../data/platforms";
import OrderTable from "./OrderTable";
import TopPlatforms from "./TopPlatforms";
import Insight from "./Insight";
import { useState } from "react";
import OrdersModal from "./OrdersModal";
import SalesTrend from "./SalesTrend";

export default function Main() {
  const [orderModal, setOrderModal] = useState(false);

  return (
    <div className="w-full md:ml-20 flex flex-col">
      <Topnav />
      <div className="flex flex-col gap-5 p-5 font-plus-jakarta-sans relative">
        <div className="flex flex-col md:flex-row gap-5 h-fit md:h-[374px]">
          <div className="md:w-3/5 p-5 bg-white rounded-xl h-[50vh] md:h-full border border-[#EDF2F7]">
            <SalesTrend />
          </div>
          <div className="md:w-2/5">
            <Insight />
          </div>
        </div>
        {/* Orders modal */}
        {orderModal && (
          <OrdersModal
            children={<OrderTable orders={orders} />}
            onclick={() => setOrderModal(!orderModal)}
          />
        )}
        <div className="flex flex-col md:flex-row gap-5 h-[374px]">
          <div className="md:w-3/5 bg-white p-5 rounded-xl border border-[#EDF2F7] h-full md:overflow-y-hidden">
            <div
              className="flex justify-between font-semibold"
              aria-label="Table of recent orders"
            >
              <h3 className="text-[#26282C] text-lg">Last Orders</h3>
              <button
                onClick={() => setOrderModal(!orderModal)}
                className="text-[#34CAA5] text-lg hover:underline"
                aria-label="See all orders"
              >
                See All
              </button>
            </div>
            <OrderTable orders={orders} />
          </div>
          <div className="w-full md:w-2/5 bg-white rounded-xl md:overflow-y-scroll">
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
            <div className="h-fit h-72 overflow-y-auto p-5">
              <TopPlatforms platforms={platforms} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
