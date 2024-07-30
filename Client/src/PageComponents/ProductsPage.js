import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const MenProducts = ({ data }) => {
  const location = useLocation();

  return (
    <div>
      <div className="top-20 md:top-28 z-10 w-full fixed flex justify-center">
        <Link
          to=""
          className={
            location.pathname === "/women" ||
            location.pathname === "/men" ||
            location.pathname === "/kids"
              ? "text-black md:mx-3 text-[11px] md:text-xs cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              : "text-black mx-3 text-[11px] md:text-xs cursor-pointer"
          }
        >
          COLLECTIONS
        </Link>
        <Link
          to="view"
          className={
            location.pathname === "/women/view" ||
            location.pathname === "/men/view" ||
            location.pathname === "/kids/view"
              ? "text-black md:mx-3 text-[11px] md:text-xs cursor-pointer font-bold relative before:absolute before:w-3 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
              : "text-black mx-3 text-[11px] md:text-xs cursor-pointer"
          }
        >
          VIEW ALL
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default MenProducts;
