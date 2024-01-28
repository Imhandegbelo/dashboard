import { useState } from "react";
import { topnavIcons } from "../data/icons";
import ProfileDropdown from "./ProfileDropdown";
import logo from "../assets/sidenav/logo.svg";

export default function Topnav() {
  const [query, setQuery] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header className="flex items-center justify-between md:gap-6 py-[10px] px-5 border-b border-[#E5EAEF] text-[#26282C]">
      <div className="flex justify-between items-center basis-1/2 lg:basis-3/5">
        <h1 className="hidden md:block font-semibold font-plus-jakarta-sans text-xl">
          Dashboard
        </h1>
        <img src={logo} alt="logo" className="md:hidden" />
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="bg-search bg-no-repeat bg-[center_left_0.5rem] border border-[#DADDDD] bg-white py-1 pl-10 w-10 vmd:w-[300px] placeholder:text-[#a3a3a3] focus:w-[200px] rounded-full"
        />
      </div>
      <div className="sm:basis-1/2 md:basis-2/5 flex justify-between items-center font-Inter text-[#26282C]">
        <div className="hidden md:flex gap-4 items-center text-sm">
          <img src={topnavIcons.calender} alt="" />
          <span className="font-medium">November 15, 2023</span>
        </div>
        <button className="hidden md:block flex justify-center items-center rounded-full border border-[#DADDDD] w-10 h-10">
          <img src={topnavIcons.bell} alt="" />
        </button>
        <div className="flex items-center gap-4 border border-[#DADDDD] md:p-2 rounded-full relative hover:bg-[#34CAA51A]">
          <img src={topnavIcons.avatar} alt="" className="w-9 h-9" />
          <div className="hidden md:block text-right">
            <p className="leading-5">Justin Bergson</p>
            <p className="text-sm leading-4 text-[#787486]">Justin@gmail.com</p>
          </div>
          <button
            className="px-1"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img src={topnavIcons.chevron} alt="" />
          </button>
          {dropdownOpen && <ProfileDropdown />}
        </div>
      </div>
    </header>
  );
}
