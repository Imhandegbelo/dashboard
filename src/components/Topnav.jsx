import { topnavIcons } from "../data/icons";

export default function Topnav() {
  return (
    <header className="flex items-center gap-6 py-[10px] px-5 border-b text-[#26282C]">
      <div className="flex justify-between basis-3/5">
        <h1 className="font-semibold font-plus-jakarta-sans text-xl">
          Dashboard
        </h1>
        <input
          type="text"
          placeholder="Search..."
          className="bg-search bg-no-repeat bg-[center_left_1rem] border bg-white py-1 pl-10 w-[300px] placeholder:text-[#a3a3a3] rounded-full"
        />
      </div>
      <div className="basis-2/5 flex justify-between items-center font-Inter text-[#26282C]">
        {/* <ul></ul> */}
        <div className="flex gap-4 items-center text-sm">
          <img src={topnavIcons.calender} alt="" />
          <span className="font-medium">November 15, 2023</span>
        </div>
        <button className="flex justify-center items-center rounded-full border w-10 h-10">
          <img src={topnavIcons.bell} alt="" />
        </button>
        <div className="flex items-center gap-4 border p-2 rounded-full">
          <img src={topnavIcons.avatar} alt="" className="w-9 h-9" />
          <div className=" text-right">
            <p className="leading-3">Justin Bergson</p>
            <p className="text-sm leading-4 text-[#787486]">Justin@gmail.com</p>
          </div>
          <button className="px-1"><img src={topnavIcons.chevron} alt="" /></button>
        </div>
      </div>
    </header>
  );
}
