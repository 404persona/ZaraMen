import React, { useState, useContext } from "react";
import { IoSearch } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData] = useContext(UserContext);
  const [cartData] = useContext(CartContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed w-full z-50">
      <div className="max-sm:m-1 max-sm:rounded-lg md:px-20 px-4 bg-white md:py-2 py-3 flex justify-between items-center">
        {/* Animated Hamburger Icon for Mobile */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden cursor-pointer text-[1.5rem]"
          onClick={toggleMenu}
        >
          <motion.div
            animate={{
              rotate: isMenuOpen ? 48 : 0,
              x: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              initial={{ y: -8 }}
              animate={{
                rotate: isMenuOpen ? -90 : 0,
                y: isMenuOpen ? 2 : -5,
              }}
              transition={{ duration: 0.3 }}
              className="h-[2px] w-6 bg-black rounded-full"
            />
            <motion.div
              initial={{ y: -8 }}
              animate={{
                rotate: isMenuOpen ? -5 : 0,
                y: isMenuOpen ? 0 : 0,
              }}
              transition={{ duration: 0.3 }}
              className={`h-[2px] w-6 bg-black  rounded-full  ${
                isMenuOpen ? "w-6" : "w-5"
              }`}
            />
          </motion.div>
        </motion.div>
        <Link to="/search" className=" md:flex hidden text-[1.5rem]">
          <IoSearch />
        </Link>
        {/* Logo */}
        <Link
          to="/"
          className="relative left-3 text-center font-serif text-[1.5rem] md:text-[2rem] tracking-widest"
        >
          LOGO
        </Link>

        {/* Bag Icon and User Icon */}
        <div className="flex flex-row-reverse justify-center items-center gap-2 relative">
          <Link to="/cart" className="text-[1.5rem]">
            <BsBag />
            <p className="absolute md:top-[4px] top-[5px] md:left-[40px] right-[8px] md:text-[.9rem] text-[.8rem]">
              {cartData?.length}
            </p>
          </Link>
          <div className="md:text-[1.5rem] text-[1.5rem]">
            {!userData ? (
              <Link to="/login" className="opacity-75 text-black">
                <FaRegUserCircle className="md:text-[1.5rem] text-[1.5rem]" />
              </Link>
            ) : (
              <Link to="/account" className="text-black">
                <FaRegUserCircle />
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="px-20 md:flex hidden">
        <hr />
      </div>
      <div className="md:flex hidden justify-center md:py-3 bg-white">
        <div className="flex justify-center gap-10">
          <a href="#" className="text-lg">
            Home
          </a>
          <a href="#" className="text-lg">
            Shop
          </a>
          <a href="#" className="text-lg">
            About Us
          </a>
          <a href="#" className="text-lg">
            Contact
          </a>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="md:hidden m-2 rounded-lg border-[1px] border-black flex py-20 min-h-full flex-col items-center justify-center gap-4 bg-white/90 backdrop-blur-sm"
            onClick={toggleMenu}
          >
            <Link
              to="/search"
              className=" md:hidden text-[1.5rem]"
              onClick={toggleMenu}
            >
              <input
                className="border-[1px] border-black/30 rounded-xl placeholder:text-[.8rem] placeholder:font-light text-center outline-none"
                placeholder="Search Your Outfit of the Day here"
              />
            </Link>
            {/* Menu items with click-to-close functionality */}
            <a href="#" className="text-lg" onClick={toggleMenu}>
              Home
            </a>
            <a href="#" className="text-lg" onClick={toggleMenu}>
              Shop
            </a>
            <a href="#" className="text-lg" onClick={toggleMenu}>
              About Us
            </a>
            <a href="#" className="text-lg" onClick={toggleMenu}>
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
