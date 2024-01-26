import React from "react";

export default function TopPlatforms({ platforms }) {
  return (
    <div className="flex flex-col gap-5">
      {platforms.map((platform) => (
        <div key={platform.name} className="flex flex-col gap-2 w-full">
          <h3 className="text-md font-semibold">{platform.name}</h3>
          <progress
            value={platform.size}
            max="100"
            className={`progress-unfilled:bg-[#F2F2F2] progress-filled:rounded-full progress-unfilled:rounded-full progress-filled:bg-[${platform.colour}] w-full h-[12px]`}
          ></progress>
          <div className="flex justify-between text-[#525252]">
            <p className="text-md">{platform.price}</p>
            <p className="text-md">+{platform.growth}%</p>
          </div>
        </div>
      ))}
    </div>
  );
}
