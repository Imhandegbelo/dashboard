import { useState } from "react";
import { themeicons } from "../data/icons";
import sun from "../assets/sidenav/sun.svg";
import moon from "../assets/sidenav/moon.svg";
import sun_w from "../assets/sidenav/sun_w.svg";
import moon_w from "../assets/sidenav/moon_w.svg";

const icons = [
  { icon: sun, active: sun_w, name: "Light", alt: "sun" },
  { icon: moon, active: moon_w, name: "Dark", alt: "moon" },
];

// export default function Switcher({ isDark, onThemeChange, icons }) {
export default function Switcher({onThemeChange, isDark, icons }) {
  const [isActive, setIsActive] = useState("sun");
  
  return (
    <ul
      className={`flex flex-col gap-6 ${
        isDark ? "bg-slate-600" : "bg-slate-100"
      } py-3 rounded-full w-3/5 mx-auto`}
    >
      <li key={icons[0].name} className="mx-auto" title={icons[0].name}>
        <button
          onClick={() => {setIsActive("sun");onThemeChange(true)}}
          className={`p-1 rounded-full ${
            isActive === icons[0].alt ? "bg-[#34CAA5]" : ""
          }`}
        >
          <img
            src={isActive === "sun" ? icons[0].active : icons[0].icon}
            alt={icons[0].alt}
            className="w-6"
          />
        </button>
      </li>
      <li key={icons[1].name} className="mx-auto" title={icons[1].name}>
        <button
          onClick={() => {setIsActive("moon");onThemeChange(false)}}
          className={`p-1 rounded-full ${
            isActive === icons[1].alt ? "bg-[#34CAA5]" : ""
          }`}
        >
          <img
            src={isActive === "moon" ? icons[1].active : icons[1].icon}
            alt={icons[1].alt}
            className="w-6"
          />
        </button>
      </li>
    </ul>
  );
}
