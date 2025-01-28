import { useContext, useState } from "react";
import { navicons, themeicons, controlicons } from "../data/icons";
import Switcher from "./Switcher";
import { MyContext } from "../hooks/MyContext";

export default function Sidenav({ onThemeChange, isDark }) {
  
  // const theme = useContext(MyContext)

  return (
    <nav
      className={`flex flex-col w-full justify-between ${
        isDark ? "bg-slate-800" : "bg-[#fafafa]"
      } py-6 h-screen`}
    >
      <div className="flex flex-col gap-5 w-full">
        <ul className="flex flex-col gap-8 ">
          {navicons.map((icon, index) => (
            <li
              key={icon.name}
              className={` border-r-4 ${
                index == 1
                  ? " border-[#0D062D]"
                  : "w-full border-transparent hover:border-r-4 hover:border-[#0D062D]"
              }`}
              title={icon.name}
            >
              <a href="#">
                <img src={icon.icon} alt="" className="mx-auto" />
              </a>
            </li>
          ))}
        </ul>

        <Switcher
          // isDark={isDark}
          onThemeChange={onThemeChange}
          icons={themeicons}
        />
      </div>

      <ul className="flex flex-col gap-8">
        {controlicons.map((icon) => (
          <li key={icon.name} className="mx-auto" title={icon.name}>
            <a href="#">
              <img src={icon.icon} alt="" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
