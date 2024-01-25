import React from "react";
import logo from "../assets/sidenav/logo.svg";
import { navicons, themeicons, controlicons } from "../data/navicons";

export default function Sidenav() {
  return (
    <nav className="flex flex-col justify-between py-6 h-full">
      <div>
        <ul className="flex flex-col gap-8 mb-8">
          {navicons.map((icon) => (
            <li className="mx-auto" title={icon.name}>
              <img src={icon.icon} alt="" />
            </li>
          ))}
        </ul>
        <ul className="flex flex-col gap-6 bg-white py-3 rounded-full w-3/5 mx-auto">
          {themeicons.map((icon) => (
            <li
              className="mx-auto p-1 rounded-full bg-[#34CAA5]"
              title={icon.name}
            >
              <img src={icon.icon} alt="" className="w-6" />
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex flex-col gap-8">
        {controlicons.map((icon) => (
          <li className="mx-auto" title={icon.name}>
            <img src={icon.icon} alt="" />
          </li>
        ))}
      </ul>
    </nav>
  );
}
