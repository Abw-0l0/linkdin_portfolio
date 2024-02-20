import React, { useEffect, useRef, useState } from "react";
import { Avatar } from "@mui/material";
import ImageIcon from "@mui/icons-material/ImageOutlined";
import Event from "@mui/icons-material/EventNote";
import CakeIcon from "@mui/icons-material/Cake";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useSelector } from "react-redux";
import prl from "../functions/Url";

function PostModal({
  caption,
  setCaption,
  inputKey,
  setModal,
  modal,
  inputRef,
  handleSubmit,
  image,
  setImage,
}) {
  const closeModal = () => {
    setModal(!modal);
  };

  const handleIconClick = () => {
    inputRef.current.click();
  };

  const handleChange = (event) => {
    setCaption(event.target.value);
    adjustTextareaHeight();
  };
  const user = useSelector((state) => state.user);

  const adjustTextareaHeight = () => {
    const textarea = document.getElementById("myTextarea");
    const parentDiv = document.getElementById("parentDiv");

    if (textarea && parentDiv) {
      parentDiv.style.height = `${textarea.scrollHeight}px`;
    }
  };

  const removeImage = () => {
    setImage(null);
    inputKey.current += 1;
  };

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <div className="flex justify-center w-full h-full">
        <div className="bg-white w-1/2 mt-8 z-40 h-3/4 rounded-xl overflow-hidden flex flex-col">
          <div className="flex w-full h-1/5 flex-row p-5 items-center">
            <Avatar
              className="m-1"
              sx={{ width: 60, height: 60 }}
              src={
                user.user.photo !== ""
                  ? `${prl}/uploads/users/` + user.user.photo
                  : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fuser-profile&psig=AOvVaw3UEPY9UhAHgsj4VqT3BFoo&ust=1708522732963000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjzuqeFuoQDFQAAAAAdAAAAABAE"
              }
            />
            <div className="flex flex-col w-full text-gray-500 items-start px-2">
              <h2 className="text-xl font-semibold text-gray-700 whitespace-nowrap">
                {user.user.username}
              </h2>
              <h4 className="text-sm text-gray-400">Post to Anyone</h4>
            </div>
            <div className="flex h-full w-fit">
              <p
                onClick={closeModal}
                className="text-gray-500 hover:bg-gray-200 p-1 px-3 rounded-full h-fit font-medium cursor-pointer text-xl"
              >
                X
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full h-3/5 overflow-y-scroll">
            <div
              id="parentDiv"
              className="mb-2 px-5 flex flex-shrink min-h-[150px] w-full"
            >
              <textarea
                className="resize-none w-full h-full overflow-hidden outline-none text-gray-900 text-xl"
                type="text"
                placeholder="What do you want to talk about?"
                id="myTextarea"
                value={caption}
                onChange={handleChange}
              />
            </div>

            {image && (
              <div className="flex flex-col p-5">
                <p
                  onClick={removeImage}
                  className="self-end m-1 z-20 flex text-gray-500 bg-gray-200 hover:bg-gray-300 p-1 px-3 rounded-full w-fit h-fit font-medium cursor-pointer text-xl"
                >
                  X
                </p>
                <img
                  src={image}
                  alt="Selected"
                  className="w-full z-10 -mt-11 h-auto rounded-lg border-[1px]"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col w-full h-1/5">
            <div className="flex flex-row space-x-7 w-full h-1/2 items-center px-5">
              <ImageIcon
                onClick={handleIconClick}
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                fontSize="medium"
              />
              <Event
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                fontSize="medium"
              />
              <CakeIcon
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                fontSize="medium"
              />
              <MoreHorizIcon
                className="text-gray-500 cursor-pointer hover:text-gray-700"
                fontSize="medium"
              />
            </div>
            <div className="flex flex-row w-full h-1/2 px-5 items-center justify-end border-t-[1px] border-gray-300">
              <button
                onClick={handleSubmit}
                type="submit"
                className="w-fit bg-blue-600 text-white px-4 py-1 font-semibold rounded-full h-fit hover:bg-blue-800"
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-600 opacity-20 absolute top-0 z-30 left-0 w-full h-full"></div>
    </div>
  );
}

export default PostModal;
