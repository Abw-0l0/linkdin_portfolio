import React, { useEffect, useState } from "react";
import Post from "./Post";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Posted from "./Posted";

function Feed({modal, setModal}) {
  const [uploadedData, setUploadedData] = useState([]);

  const a = [
    {
      first:"",
      message:"alog"
    },
    {
      second:"",
      message:"alogg"
    },
    {
      third:"",
      message:"alogggg"
    },
    {
      fourth:"",
      message:"aloghhhhhh"
    },
  ]

  return (
    <div className="flex flex-grow-1 flex-shrink-1 basis-[51%] flex-col">
      <Post modal={modal} setModal={setModal}/>
      <div className="my-1 flex flex-row w-full bg-transparent text-gray-400 items-center">
        <hr className="w-full bg-gray-200  h-[2px]" />
        <p className="flex flex-row whitespace-nowrap ml-2 text-xs items-center">
          Sort by:
          <span className="cursor-pointer flex flex-row whitespace-nowrap font-semibold text-gray-800 ml-1 text-xs items-center">
            Projects
            <ArrowDropDownOutlinedIcon className="-ml-[2px]" />
          </span>
        </p>
      </div>
      {a?
      a.map((a,i) => (
        <Posted key={i} text={a.message}/>
      )):
      <></>
      }
    </div>
  );
}

export default Feed;
