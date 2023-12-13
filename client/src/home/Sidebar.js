import React from "react";
import { Avatar } from "@mui/material";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import Recents from "./Recents";

const rec = [
  { title: "Did a facebook clone", url: "a" },
  { title: "Made a rebuild of pia with new design", url: "b" },
  { title: "Did a linkdin clone", url: "c" },
  { title: "build an ebay clone with metamask integration", url: "d" },
];

function Sidebar() {
  return (
    <div className="sticky flex flex-col flex-grow-1 flex-shrink-1 basis-[21%] rounded-lg text-center h-fit">
      <div className="flex flex-col object-contain items-center border-[1px] border-gray-300 border-b-0 rounded-t-lg bg-white pb-4">
        <img
          className="rounded-t-lg"
          src="https://media.licdn.com/dms/image/D4D16AQHfzYQ4t-da2Q/profile-displaybackgroundimage-shrink_350_1400/0/1701505188371?e=1707955200&v=beta&t=3vZ8ONkR9VJIUTnFPXJMB2vPO9avbrqmCNDsBRBwFqQ"
          alt=""
        />
        <Avatar
          className="-mt-9 mb-4 border-2 border-white"
          sx={{ width: 70, height: 70 }}
          src="https://avatars.githubusercontent.com/u/75667121?s=400&u=2147ca1b438f9bff4717d0c9e058ba77e07f5a6a&v=4"
        />
        <h2 className="text-md font-semibold text-gray-700">
          Abdul Basit Iqbal
        </h2>
        <h4 className="text-xs text-gray-400">IMSciences CS'24 | MERN Stack</h4>
      </div>

      <div className="p-2 border-b-0 border-[1px] border-gray-300 bg-white">
        <div className="mt-2 flex justify-between">
          <p className="text-gray-400 text-xs font-semibold">Profile viewers</p>
          <p className="font-bold text-xs text-blue-500">3,234</p>
        </div>
        <div className="mt-2 mb-1 flex justify-between">
          <p className="text-gray-400 text-xs font-semibold">
            Post impressions
          </p>
          <p className="font-bold text-xs text-blue-500">3,334</p>
        </div>
      </div>

      <div className="p-2 border-b-0 border-[1px] border-gray-300 bg-white">
        <div className="mt-2 mb-1 flex items-start">
          <p className="text-gray-400 text-start text-xs">
            When the going gets tough, the tough get going
          </p>
        </div>
      </div>

      <div className="p-2 mb-2 border-[1px] border-gray-300 bg-white rounded-b-lg hover:bg-gray-100 cursor-pointer">
        <div className="mt-2 mb-1 flex items-start">
          <PhoneInTalkIcon fontSize="small" className="text-gray-700" />
          <p className="text-gray-800 font-semibold text-start text-xs pl-2">
            +92 3319868432
          </p>
        </div>
      </div>

      <div className="text-left border-[1px] border-gray-300 border-b-0 bg-white rounded-t-lg">
        <p className="text-xs p-3">Recent</p>
        {rec.map((item) => (
          <Recents title={item.title} url={item.url} />
        ))}
        <p className="py-1"></p>
      </div>

      <div className="p-2 mb-2 border-[1px] border-gray-300 bg-white rounded-b-lg hover:bg-gray-100 cursor-pointer">
        <div className="my-1 flex items-center justify-center">
          <p className="text-gray-500 font-semibold text-sm">Discover more</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
