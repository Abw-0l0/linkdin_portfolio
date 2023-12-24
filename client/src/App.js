import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import MyNetwork from "./network/MyNetwork";
import Jobs from "./jobs/Jobs";
import Messaging from "./message/Messaging";
import Notifications from "./notification/Notifications";
import Signuppage from "./signup/Signuppage";
import { useState } from "react";
import Home from "./home/Homee";

function App() {
  const [refresh, setRefresh] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className={`${(modal === true)?'overflow-y-hidden h-screen':''} bg-customColor w-screen flex flex-col items-center`}>
      <Header setRefresh={setRefresh} refresh={refresh} />
      <Routes>
        <Route path="/" exact element={<Home  modal={modal} setModal={setModal}/>} />
        <Route path="/mynetwork" element={<MyNetwork/>} />
        <Route path="/jobs" element={<Jobs/>} />
        <Route path="/messaging" element={<Messaging/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/signup" element={<Signuppage/>} />
      </Routes>
    </div>
  );
}

export default App;
