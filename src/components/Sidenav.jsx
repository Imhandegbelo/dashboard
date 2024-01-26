import React from "react";
// import logo from "../assets/sidenav/logo.svg";
import { navicons, themeicons, controlicons } from "../data/icons";

export default function Sidenav() {
  return (
    <nav className="flex flex-col w-full justify-between py-6 h-full">
      <div>
        <ul className="flex flex-col gap-8 mb-8">
          {navicons.map((icon, index) => (
            <li key={icon.name} className={` border-r-4 ${index == 1? " border-black": "w-full border-transparent hover:border-r-4 hover:border-black"}`} title={icon.name}>
              <a href="#"><img src={icon.icon} alt="" className="mx-auto" /></a>
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-6 bg-white py-3 rounded-full w-3/5 mx-auto">
          {themeicons.map((icon) => (
            <li key={icon.name}
              className="mx-auto p-1 rounded-full bg-[#34CAA5]"
              title={icon.name}
            >
              <a href="#"><img src={icon.icon} alt="" className="w-6" /></a>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-col gap-8">
        {controlicons.map((icon) => (
          <li key={icon.name} className="mx-auto" title={icon.name}>
            <a href="#"><img src={icon.icon} alt="" /></a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
