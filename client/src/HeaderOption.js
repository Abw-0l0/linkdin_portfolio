import React, { useState } from "react";
import { Avatar } from "@mui/material";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { useNavigate } from "react-router-dom";
import setAuthToken from "./auth/authService";
import { userActions } from "./store/userSlice";
import { useDispatch, useSelector } from "react-redux";
import URL from "./functions/Url";

function HeaderOption({
  avatar,
  Icon,
  title,
  page,
  setPage,
  ppModal,
  setppModal,
}) {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const RouteChange = () => {
    if (title === "Home") {
      navigate("/");
      setPage("Home");
    } else if (title === "My Network") {
      navigate("/mynetwork");
      setPage("My Network");
    } else if (title === "Jobs") {
      navigate("/jobs");
      setPage("Jobs");
    } else if (title === "Messaging") {
      navigate("/messaging");
      setPage("Messaging");
    } else if (title === "Notifications") {
      navigate("/notifications");
      setPage("Notifications");
    } else {
      // navigate('/')
      setToggle(!toggle);
      console.log(user.user);
    }
  };

  const setPp = () => {
    setToggle(!toggle);
    setppModal(!ppModal);
  };

  const handleLogout = () => {
    setAuthToken(null);
    localStorage.removeItem("user");
    dispatch(userActions.clearUser());
  };

  return (
    <>
      <div
        onClick={RouteChange}
        className={`${
          page === title ? "border-b-2 border-black" : ""
        } flex flex-col object-contain items-center w-[80px] py-[10px] text-gray-500 hover:text-black cursor-pointer -mt-1`}
      >
        {Icon && <Icon className="object-contain h-6 w-6" />}
        {avatar && (
          <Avatar
            className="object-contain"
            sx={{ width: 24, height: 24 }}
            src={
              user.user.photo !== ""
                ? `${URL}/uploads/users/` + user.user.photo
                : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fuser-profile&psig=AOvVaw3UEPY9UhAHgsj4VqT3BFoo&ust=1708522732963000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjzuqeFuoQDFQAAAAAdAAAAABAE"
            }
          />
        )}
        {title !== "Me" ? (
          <h3 className="text-xs">{title}</h3>
        ) : (
          <h3 className="text-xs -mr-1">
            {title}
            <ArrowDropDownOutlinedIcon className="-ml-[2px]" />
          </h3>
        )}
      </div>
      {toggle ? (
        <div className="relative mt-14">
          <div className="absolute bg-white right-0 border-[2px] shadow-md py-1 w-fit h-fit rounded-lg">
            <p
              onClick={setPp}
              className={`whitespace-nowrap pl-3 py-2 pr-24 hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700`}
            >
              Set profile picture
            </p>
            <p
              onClick={handleLogout}
              className={`whitespace-nowrap pl-3 py-2 pr-24 hover:bg-gray-100 cursor-pointer text-sm font-medium text-gray-700`}
            >
              Sign Out
            </p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default HeaderOption;
