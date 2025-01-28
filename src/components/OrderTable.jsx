import { memo } from "react";
import file from "../assets/orders/file.svg";
import file_w from "../assets/orders/file_w.svg";
import OrdersModal from "./OrdersModal";

export default memo(function OrderTable({ orders, isDark }) {
  const displayOrderCard = (order) => {
    return (
      <div className="absolute w-small h-fit">
        <p className="text-4xl">How far?</p>
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col divide-y mt-4 overflow-x-auto no-scrollbar">
        <div
          className={`flex justify-between ${
            isDark ? "text-white/90" : "text-[#9CA4AB]"
          } w-full`}
        >
          <p className="basis-3/12">Name</p>
          <p className="basis-3/12">Date</p>
          <p className="basis-2/12">Amount</p>
          <p className="basis-1/12">Status</p>
          <p className="basis-1/12">Invoice</p>
        </div>

        {orders.map((order, index) => (
          <div key={index+1} className="flex justify-between items-center py-1">
            <div className="basis-3/12 flex items-center gap-2 font-medium text-[#3A3F51]">
              <img
                src={order.avatar}
                alt=""
                className="w-8 h-8 rounded-full my-2"
              />
              <span className={`${isDark ? "text-slate-300" : ""}`}>
                {order.name}
              </span>
            </div>
            <div
              className={`basis-3/12 ${
                isDark ? "text-neutral-200" : "text-neutral-500"
              }`}
            >
              {order.date}
            </div>
            <div
              className={`basis-2/12 font-medium ${
                isDark ? "" : "text-[#0D062D]"
              }`}
            >
              {order.amount}
            </div>
            <div
              className={`basis-1/12 ${
                order.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
              }`}
            >
              {order.status}
            </div>
            <button
              onClick={(order) => displayOrderCard(order)}
              className="basis-1/12 flex items-center gap-2"
            >
              <img src={isDark ? file_w : file} alt="" className="" />
              <span
                className={`text-sm ${
                  isDark ? "" : "text-[#0D062D]"
                } hover:text-[#34CAA5]`}
              >
                View
              </span>
            </button>
          </div>
        ))}
      </div>
    </>
  );
});
