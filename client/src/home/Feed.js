import React, { useEffect, useState } from "react";
import Post from "./Post";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import Posted from "./Posted";
import { useDispatch, useSelector } from "react-redux";
import { feed } from "../store/userSlice";

function Feed({ modal, setModal }) {
  // const [uploadedData, setUploadedData] = useState([]);
  const dispatch = useDispatch();
  const feedR = useSelector((state) => state.user.feed);
  const [newFeed, setNewFeed] = useState(true);
  const [toggleDropDown, setToggleDropDown] = useState(false);
  const [projects, setProjects] = useState(true);

  useEffect(() => {
    dispatch(feed());
    // console.log(feedR);
  }, [newFeed]);

  const handleDropDown = () => {
    setToggleDropDown(!toggleDropDown);
  };

  const projectClick = () => {
    setProjects(true);
    setToggleDropDown(!toggleDropDown);
  };

  const allPostsClick = () => {
    setProjects(false);
    setToggleDropDown(!toggleDropDown);
  };

  return (
    <div className="flex basis-[51%] w-full flex-col">
      <Post
        modal={modal}
        setModal={setModal}
        setNewFeed={setNewFeed}
        newFeed={newFeed}
      />
      <div className="my-1 flex flex-row w-full bg-transparent text-gray-400 items-center">
        <hr className="w-full bg-gray-200  h-[2px]" />
        <p className="flex flex-row whitespace-nowrap ml-2 text-xs items-center">
          Sort by:
          <span
            onClick={handleDropDown}
            className="cursor-pointer flex flex-row whitespace-nowrap font-semibold text-gray-800 ml-1 text-xs items-center"
          >
            {projects ? "Projects" : "All posts"}
            <ArrowDropDownOutlinedIcon className="-ml-[2px]" />
          </span>
        </p>
      </div>
      {toggleDropDown ? (
        <div className="relative">
          <div className="absolute bg-white right-0 border-[2px] shadow-md py-1 w-fit h-fit rounded-lg">
            <p
              onClick={projectClick}
              className={`${
                projects === true ? "border-l-2 border-green-700" : ""
              } pl-3 py-2 pr-24 hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700`}
            >
              Projects
            </p>
            <p
              onClick={allPostsClick}
              className={`${
                projects === false ? "border-l-2 border-green-700" : ""
              } pl-3 py-2 pr-24 hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700`}
            >
              All posts
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}

      {feedR ? (
        feedR.map((a, i) =>
          projects ? (
            a.userId.email == "iamabdulbasit5@gmail.com" ? (
              <Posted
                key={i}
                newFeed={newFeed}
                setNewFeed={setNewFeed}
                post={a}
              />
            ) : (
              <></>
            )
          ) : (
            <Posted
              key={i}
              newFeed={newFeed}
              setNewFeed={setNewFeed}
              post={a}
            />
          )
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default Feed;
