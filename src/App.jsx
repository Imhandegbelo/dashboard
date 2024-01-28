import Sidenav from "./components/Sidenav";

import Main from "./components/Main";

function App() {
  return (
    <div className="flex place-center bg-[#fafafa]">
      <div className="w-full flex bg-[#fafafa]">
        <div className="hidden md:block fixed w-20 border-r h-screen bg-[#fafafa]">
          <Sidenav />
        </div>
        {/* <div className=""> */}
          <Main />
        {/* </div> */}
      </div>
    </div>
  );
}

export default App;
