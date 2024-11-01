import React, { useContext, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Account = () => {
  const location = useLocation();

  const [userData, setUserData] = useContext(UserContext);

  return (
    <>
      <div className=" bg-white z-20 fixed top-16  lg:top-28 w-full md:top-28">
        <div className="p-3.5 w-full border-b border-black">
          <Link
            to=""
            className={
              location.pathname === "/account"
                ? "text-black md:mx-3 text-[11px] md:text-xs cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "text-black mx-3 text-[11px] md:text-xs cursor-pointer"
            }
          > 
            ACCOUNT
          </Link>
          {userData?.type === "admin" || userData?.type === "moderator" ? (
            <Link
              to="dashboard"
              className={
                location.pathname === "/account/dashboard"
                  ? "text-black md:mx-3 text-[11px] md:text-xs cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                  : "text-black mx-3 text-[11px] md:text-xs cursor-pointer"
              }
            >
              DASHBOARD
            </Link>
          ) : null}
        </div>
      </div>
      <div className="z-10 fixed top-0 h-32 w-full bg-whit"></div>
      <div className="pt-32 md:pt-40">
        <Outlet />
      </div>
    </>
  );
};

export default Account;
