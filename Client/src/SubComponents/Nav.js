import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";
import { IoBagOutline } from "react-icons/io5";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { IoSearch } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import subNav from './subNav';



function Nav(props) {
  const [sidebar, setSidebar] = useState("0 invisible");
  const [userData] = useContext(UserContext);
  const [cartData] = useContext(CartContext);
  const [showWomenDropdown, setShowWomenDropdown] = useState(false);

  return (
    <div className="flex md:justify-center justify-between">
      <div className="fixed w-full font-light text-xs z-50">
        <div className="bg-white flex justify-between items-center px-1.5 py-3 md:px-10">
        <Link to="/search" className="text-black hidden md:inline">
              <IoSearch className="text-[1.8rem]" />
            </Link>
          {/* Left side - Logo and Hamburger for mobile */}
          <div className="left flex items-center  gap-3">
            <div className="md:hidden">
              <MenuRoundedIcon
                onClick={() => setSidebar("100 visible")}
                className="cursor-pointer"
              />
            </div>
            
            <Link to="/" className="max-sm:hidden  font-serif text-3xl">
              Logo
            </Link>
          </div>
         
            <Link to="/" className="md:hidden relative left-5 font-serif text-3xl">
              Logo
            </Link>

          {/* Center - Links for desktop with dropdown */}
          {/* <div className="hidden md:flex gap-5">
          <Link to="/kids" className="text-black">
              KIDS
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setShowWomenDropdown(true)}
              onMouseLeave={() => setShowWomenDropdown(false)}
            >
              <Link to="/women" className="text-black">
                WOMEN
              </Link>
              {showWomenDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute bg-white border shadow-md mt-2 p-2 rounded"
                >
                  <Link to="/women/stitched" className="block text-black p-1">
                    Stitched
                  </Link>
                  <Link to="/women/unstiched" className="block text-black p-1">
                    Unstitched
                  </Link>
                </motion.div>
              )}
            </div>
            <Link to="/men" className="text-black">
              MEN
            </Link>
            <Link to="/kids" className="text-black">
              KIDS
            </Link>
          </div> */}

          {/* Right side - Icons and account/cart links */}
          <div className="flex items-center justify-center gap-3">
           
            {/* <Link to="/search" className="text-black md:hidden">
              <SearchIcon />
            </Link> */}
            {!userData ? (
              <Link to="/login" className="opacity-75  text-black ">
                <FaRegUserCircle className="md:text-[1.8rem] text-[1.3rem]" />
              </Link>
            ) : (
              <Link to="/account" className=" text-black">
                <PersonOutlineOutlinedIcon />
              </Link>
            )}
            <Link
              to="/cart"
              className="text-black relative flex justify-center items-center"
            >
              <IoBagOutline className="md:text-[1.8rem] text-[1.3rem]" />
              <p className="absolute md:top-[5px] top-[4px] md:text-[.9rem] text-[.6rem]">
                {cartData?.length}
              </p>
            </Link>
          </div>
        </div>

        {/* Sidebar menu for mobile */}
        <div
          className={`bg-white top-0 left-0 fixed h-screen w-full md:w-4/12 font-light text-xs transition duration-500 p-3.5 md:p-8 opacity-${sidebar}`}
        >
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setSidebar("0 invisible")}
          />
          <div className="mt-5 flex flex-col items-start">
            <Link to="/women" onClick={() => setSidebar("0 invisible")}>
              WOMEN
            </Link>
            <Link to="/men" onClick={() => setSidebar("0 invisible")}>
              MEN
            </Link>
            <Link to="/kids" onClick={() => setSidebar("0 invisible")}>
              KIDS
            </Link>
          </div>
        </div>
      <subNav/>
      </div>
    </div>
  );
}

export default Nav;
