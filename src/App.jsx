import { useState } from "react";
import Sidenav from "./components/Sidenav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex place-center bg-[#fafafa]">
      <div className="flex bg-[#fafafa]">
        <div className="w-20 h-screen fixed bg-[#fafafa]">
          <Sidenav />
        </div>
        <div className=""></div>
      </div>
    </div>
  );
}

export default App;
