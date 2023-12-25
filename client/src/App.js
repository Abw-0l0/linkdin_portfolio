import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import MyNetwork from "./network/MyNetwork";
import Jobs from "./jobs/Jobs";
import Messaging from "./message/Messaging";
import Notifications from "./notification/Notifications";
import Signuppage from "./signup/Signuppage";
import { useState } from "react";
import Home from "./home/Homee";
import PpModal from "./home/PpModal";

function App() {
  const [modal, setModal] = useState(false);
  const [ppModal, setppModal] = useState(false);

  return (
    <div className={`${(modal === true)||(ppModal === true)?'overflow-y-hidden h-screen':''} bg-customColor w-screen flex flex-col items-center`}>
      <Header ppModal={ppModal} setppModal={setppModal} />
      <Routes>
        <Route path="/" exact element={<Home  modal={modal} setModal={setModal}/>} />
        <Route path="/mynetwork" element={<MyNetwork/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/signup" element={<Signuppage/>} />
      </Routes>
      {ppModal?<PpModal ppModal={ppModal} setppModal={setppModal} />:<></>}
    </div>
  );
}

export default App;
