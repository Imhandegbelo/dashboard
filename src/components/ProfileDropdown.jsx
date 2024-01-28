import React from "react";
import { controlicons } from "../data/icons";
import bell from "../assets/topnav/bell.svg"

export default function ProfileDropdown() {
  return (
    <div className="w-[320px] md:w-full bg-white shadow-xl absolute right-0 mx-auto z-10 top-16 p-2 rounded-xl">
      <ul className="flex flex-col">
        {[{ icon: bell, name: "Notification" }].concat(controlicons).map((icon, index) => (
          <li key={icon.name} className="w-full hover:bg-[#34CAA51A] rounded-lg" title={icon.name}>
            <a href="#" className="flex gap-2 items-center px-2 py-1.5">
              <img src={icon.icon} alt="" />
              <p className={`text-sm ${index === 3? "text-[#ED544E]":"text-[#26282C]"}`}>{icon.name}</p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
