import Sidenav from "./components/Sidenav";
import { useState } from "react";
import Main from "./components/Main";
import { MyContext } from "./hooks/MyContext";

function App() {
  const [isDark, setIsDark] = useState(false);

  const handleThemeChange = () => {
    setIsDark(!isDark);
    localStorage.setItem("isdark", isDark);
    if (localStorage.getItem("isdark" === true)) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };

  return (
    <MyContext.Provider value={isDark} 
      className={`flex place-center ${
        isDark ? "bg-slate-600" : "bg-[#fafafa]"
      }`}
    >
      <div
        className={`w-full max-w-[1440px] flex divide-x ${
          isDark ? "bg-slate-800" : "bg-[#fafafa]"
        }`}
      >
        <div
          className={`hidden md:block w-24 min-h-full ${
            isDark ? "bg-slate-600" : "bg-[#fafafa]"
          }`}
        >
          <Sidenav onThemeChange={handleThemeChange} isDark={isDark} />
        </div>
        <div className="w-full bg-[#fafafa]">
          <Main isDark={isDark} />
        </div>
      </div>
    </MyContext.Provider>
  );
}

export default App;
