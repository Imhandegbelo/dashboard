import React from "react";

export default function OrdersModal({ children, onclick }) {
  return (
    <div className="hidden md:block flex flex-col gap-5 bg-white rounded-xl border p-6 absolute w-[90%] md:w-[96%] md:h-full shadow-2xl ">
      <div
        className="flex justify-between font-semibold"
        aria-label="Table of recent orders"
      >
        <h3 className="text-[#26282C] text-lg">Last Orders</h3>
        <button
          onClick={onclick}
          className="text-[#34CAA5] text-lg hover:underline"
          aria-label="See fewer orders"
        >
          See Less
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}
