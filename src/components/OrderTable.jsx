import { memo } from "react";
import file from "../assets/orders/file.svg";

export default memo(function OrderTable({ orders }) {
  return (
    <div className="pb-5 overflow-y-clip md:h-auto overflow-x-auto">
      <table className="hidden md:solid w-full mt-4">
        <thead className="text-[#9CA4AB] text-left">
          <tr className="border-b">
            <th className="pb-2">Name</th>
            <th className="">Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody className="text-[#26282C] text-sm">
          {orders.map((order, index) => (
            <tr key={index} className="border-b py-2">
              <td className="flex items-center gap-2 font-medium text-[#3A3F51]">
                <img
                  src={order.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full my-2"
                />
                <span>{order.name}</span>
              </td>
              <td className="text-neutral-500">{order.date}</td>
              <td className="font-medium text-[#0D062D]">{order.amount}</td>
              <td
                className={`${
                  order.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
                }`}
              >
                {order.status}
              </td>
              <td className="flex items-center gap-2">
                <img src={file} alt="" className="" />
                <span className="text-sm text-[#0D062D]">View</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {orders.map((order) => (
        <div className="rounded-xl bg-white my-2">
          <div className="flex items-center gap-2 font-medium text-[#3A3F51]">
            <img
              src={order.avatar}
              alt=""
              className="w-8 h-8 rounded-full my-2"
            />
            <span className="text-xl font-semibold">{order.name}</span>
          </div>
          <p className="text-neutral-500">{order.date}</p>
          <p className="font-medium text-[#0D062D] text-2xl">{order.amount}</p>
          <p
            className={`${
              order.status === "Paid" ? "text-[#34CAA5]" : "text-[#ED544E]"
            }`}
          >
            {order.status}
          </p>
        </div>
      ))}
    </div>
  );
});
