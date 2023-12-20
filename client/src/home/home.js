import React from 'react'
import Feed from "./Feed";
import Sidebar from "./Sidebar"
import Widgets from "./Widgets"

function home({modal, setModal}) {
  return (
    <div className="flex mt-5 max-w-[1130px] space-x-6 ">
        <Sidebar/>
        <Feed modal={modal} setModal={setModal}/>
        <Widgets/>
    </div>
)
}

export default home
