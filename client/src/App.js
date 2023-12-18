import Header from "./Header";
import Home from "./home/home";
import { Route, Routes } from "react-router-dom";
import MyNetwork from "./network/MyNetwork";
import Jobs from "./jobs/Jobs";
import Messaging from "./message/Messaging";
import Notifications from "./notification/Notifications";
import Signuppage from "./signup/Signuppage";
import { useState } from "react";

function App() {
  const [refresh, setRefresh] = useState(false);

  return (
    <div className="bg-customColor flex flex-col items-center">
      <Header setRefresh={setRefresh} refresh={refresh} />
      <Routes>
        <Route path="/" exact element={<Home/>} />
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
