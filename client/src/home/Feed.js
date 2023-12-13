import React from "react";
import Post from "./Post";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Posted from "./Posted";

const arr = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];

function Feed() {
  return (
    <div className="flex flex-grow-1 flex-shrink-1 basis-[51%] flex-col">
      <Post />
      <div className="my-1 flex flex-row w-full bg-transparent text-gray-400 items-center">
        <hr className="w-full bg-gray-200  h-[2px]" />
        <p className="flex flex-row whitespace-nowrap ml-2 text-xs items-center">
          Sort by:
          <span className="cursor-pointer flex flex-row whitespace-nowrap font-semibold text-gray-800 ml-1 text-xs items-center">
            Top
            <ArrowDropDownOutlinedIcon className="-ml-[2px]" />
          </span>
        </p>
      </div>
      {arr.map((a) => (
        <Posted />
      ))}
    </div>
  );
}

export default Feed;
