import React, { useState, useContext, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { BsBag } from "react-icons/bs";
import { FaRegUserCircle, FaRegUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userData] = useContext(UserContext);
  const [cartData] = useContext(CartContext);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavlinksDesktop = [
    { label: "New In", href: "/newin" },
    { label: "Women", href: "/women" },
    { label: "Men", href: "/men" },
    { label: "Home", href: "/" },
  ];

  return (
    <div
      className={`fixed w-full z-40 transition-all duration-300 ${
        isHomePage
          ? isScrolled
            ? "bg-white shadow-md text-black"
            : "bg-transparent  text-white"
          : "bg-white shadow-md  text-black"
      }`}
    >
      <div className="md:px-20 px-4 py-3 flex md:justify-between justify-between items-center">
        {/* Mobile Hamburger Icon */}
        <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.3 }}
  className={`md:hidden cursor-pointer text-[1.5rem] z-50 ${
    isMenuOpen ? "text-black" : isHomePage ? (isScrolled ? "text-black" : "text-white") : "text-black"
  }`}
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
      className={`h-[2px] w-6 rounded-full ${
        isMenuOpen ? "bg-black" : isHomePage ? (isScrolled ? "bg-black" : "bg-white") : "bg-black"
      }`}
    />
    <motion.div
      initial={{ y: -8 }}
      animate={{
        rotate: isMenuOpen ? -5 : 0,
        y: isMenuOpen ? 0 : 0,
      }}
      transition={{ duration: 0.3 }}
      className={`h-[2px] rounded-full ${isMenuOpen ? "w-6 bg-black" : `w-${isHomePage && !isScrolled ? "5 bg-white" : "6 bg-black"}`}`}
    />
  </motion.div>
</motion.div>

        {/* Logo */}
        <Link
          to="/"
          className="relative text-center font-serif text-[1.5rem] md:text-[2rem] tracking-widest"
        >
          By Anas
        </Link>
        <div>
          <Link
            to="/search"
            className=" hidden md:flex justify-start items-center relative"
          >
            <IoSearch className="text-xl absolute left-3" />
            <input
              className={`w-[400px] p-2 placeholder:text-center rounded-xl outline-none border-[1.3px] border-neutral-600 bg-transparent ${
                isHomePage && !isScrolled
                  ? "placeholder:text-white border-white font-light"
                  : "placeholder:text-black font-light border-black"
              }`}
              placeholder="Search Here Your Outfit of the Day"
            />
          </Link>
        </div>

        {/* Desktop Icons (Hidden on Mobile) */}
        <div className="flex items-center justify-center md:gap-4 gap-3">
          <Link to="/cart" className="relative">
            <BsBag className="text-2xl" />
            <span className="absolute top-[4px] right-[2px] text-xs rounded-full h-5 w-5 flex items-center justify-center ">
              <p className="text-[.8rem]" >{cartData?.length}</p>
            </span>
          </Link>
          <Link to={userData ? "/account" : "/login"}>
            <FaRegUser className="text-2xl" />
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div
        className={`${
          isScrolled || !isHomePage
            ? "md:flex hidden justify-center gap-8 border-t-[1px] border-black/30 py-2"
            : "md:flex hidden justify-center gap-8 border-t-[1px] border-black/0 py-2"
        }`}
      >
        {NavlinksDesktop.map((link, index) => (
          <Link key={index} to={link.href} className="text-lg">
            {link.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-[80%] h-full bg-white flex flex-col items-start px-10   justify-evenly text-[1rem] text-black"
            onClick={toggleMenu}
          >
            {/* <div className="p-2 text-[1.4rem] border-[1px] border-black rounded-xl flex flex-col items-center justify-center">
              <FaRegUser />
              <p className="text-[.8rem]">Log In</p>
            </div> */}
            <div>
              <Link
                to="/search"
                className=" md:hidden flex justify-start items-center relative"
              >
                <IoSearch className="text-xl absolute left-3" />
                <input
                  className={` p-2 placeholder:text-center rounded-xl outline-none border-[1.3px] border-neutral-600 bg-transparent text-light`}
                  placeholder="Search Here"
                />
              </Link>
            </div>
            <div className="flex flex-col gap-2" >
              {NavlinksDesktop.map((link, index) => (
                <div key={index} >
                  <Link
                    to={link.href}
                    className="text-[1.3rem]"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
