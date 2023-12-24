import React from "react";
import { FaInfo } from "react-icons/fa";
import Profiles from "./Profiles";

function AddToFeed() {
  return (
    <div className="bg-white flex flex-col w-full p-3 rounded-lg border-[1px]">
      <div className="flex flex-row justify-between w-full h-fit items-center">
        <p className="font-semibold text-gray-700 whitespace-nowrap">
          Add me on Socials
        </p>
        <div className="bg-gray-600 h-fit p-[1px] w-fit rounded-sm">
          <FaInfo style={{ fontSize: "10px", color: "white" }} />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Profiles
          platform="Github"
          username="Abw-0l0"
          link="https://github.com/Abw-0l0"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFDTKV4IUyFOpFh5_we4BJxAbFl9GaHYL5SRLfovXmuG0DpGXUPglO6d7CQwCE0X4tDRA&usqp=CAU"
        />
        <Profiles
          platform="Instagram"
          username="abw_0l0"
          link="https://www.instagram.com/abw_0l0/"
          logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/2048px-Instagram_logo_2022.svg.png"
        />
        <Profiles
          platform="Facebook"
          username="Abdul Basit Iqbal"
          link="https://www.facebook.com/Abw0l0/"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRikuj7BkWDXosqhtK7-dc-LfVJkt8lnZOCU8NEOLwE88Hd2XRuQCSj3YnBo7bMCsmwI5c&usqp=CAU"
        />
        {/* <Profiles
          platform="Soundcloud"
          username="Abdul Basit Wazir"
          link="https://soundcloud.com/user-480073501-636813106"
          logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4FuWmie5IKr3QguWUNH3lcO3fLN1m6k5tNnXkWiK1hkaUALQ2YVfIjoCiGsxYM3878SE&usqp=CAU"
        /> */}
      </div>
    </div>
  );
}

export default AddToFeed;
