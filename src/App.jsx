import { useState } from "react";
import Sidenav from "./components/Sidenav";
import Topnav from "./components/Topnav";
import { orders } from "./data/tabledata";
import OrderTable from "./components/OrderTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex place-center bg-[#fafafa]">
      <div className="w-full flex bg-[#fafafa]">
        <div className="hidden md:block fixed w-20 border-r h-screen bg-[#fafafa]">
          <Sidenav />
        </div>
        <div className="w-[calc(100% - 80px)]/ w-full ml-20 flex flex-col">
          <Topnav />
          <div className="flex flex-col gap-5 p-5 font-plus-jakarta-sans">
            <div className="h-[374px] bg-white rounded-xl">
              <div className=""></div>
              <div className="grid gridp-4/16px"></div>
            </div>
            <div className="flex h-[374px] rounded-x">
              <div className="w-3/5 bg-white p-5 rounded-xl">
                <div
                  className="flex justify-between font-semibold"
                  aria-label="Table of recent orders"
                >
                  <h3 className="text-[#26282C]">Last Orders</h3>
                  <button
                    className="text-[#34CAA5] text-md"
                    aria-label="See all"
                  >
                    See All
                  </button>
                </div>
                <OrderTable orders={orders}/>
              </div>
              <div className="w-2/5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
