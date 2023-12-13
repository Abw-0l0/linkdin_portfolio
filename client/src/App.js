import Header from "./Header";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import MyNetwork from "./network/MyNetwork";

function App() {
  return (
    <div className="bg-customColor flex flex-col items-center">
      <Header />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/mynetwork" element={<MyNetwork/>} />
        {/* <Route path="/contact" element={Contact} /> */}
      </Routes>
      {/* <div className="flex bg-customColor pt-5 px-[165px] space-x-6">
        <Sidebar/>
        <Feed/>
        <Widgets/>
      </div> */}
    </div>
  );
}

export default App;
