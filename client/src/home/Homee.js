import React from "react";
import Feed from "./Feed";
import Sidebar from "./Sidebar";
import Widgets from "./Widgets";

function Homee({ modal, setModal }) {
  return (
    <div className="flex flex-row mt-5 max-w-[1130px] space-x-6 w-full bg-yellow-300">
      <Sidebar />
      <Feed modal={modal} setModal={setModal} />
      <Widgets />
    </div>
  );
}

export default Homee;
