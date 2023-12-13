import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/Animation.json";

function Animation() {
  return (
    <div className="flex w-full mt-2 bg-white rounded-lg border-[1px] h-48">
      <Lottie animationData={animationData} className="w-full h-fit -mt-11" />
    </div>
  );
}

export default Animation;
