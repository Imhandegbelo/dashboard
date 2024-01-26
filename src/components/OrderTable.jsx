import { memo } from "react";
import file from "../assets/orders/file.svg";

export default memo(function OrderTable({ orders }) {
  return (
    <>
      <table className="w-full table-auto mt-4">
        <thead className="text-[#9CA4AB] text-left">
          <tr className="border-b">
            <th className="pb-2">Name</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Invoice</th>
          </tr>
        </thead>
        <tbody className="text-[#26282C]">
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
    </>
  );
});
