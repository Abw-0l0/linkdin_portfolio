import React from "react";
import AddToFeed from "./AddToFeed";
import Animation from "./Animation";

function Widgets() {
  return (
    <div className="flex w-full flex-col basis-[28%] pb-2">
      <AddToFeed />
      <div className="flex flex-col w-full sticky top-16">
        <Animation />
        <div className="flex w-full justify-center mt-1">
          <p className="text-blue-700 text-sm font-semibold whitespace-nowrap">
            Abw_0l0{" "}
            <span className="font-light text-gray-600">
              {" "}
              corporation © 2023{" "}
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Widgets;
