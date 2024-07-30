import React, { useContext, useState } from "react";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";
function Nav(props) {
  const [sidebar, setSidebar] = useState("0 invisible");
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);
  const women = [
    "NEW",
    "DRESS TIME NEW",
    "JACKETS | TRENCH COATS",
    "BLAZERS | WAISTCOATS",
    "DRESSES | JUMPSUITS",
    "KNITWEAR",
    "SHIRTS",
    "T-SHIRTS | BODYSUITS",
    "TOPS",
    "SWEATSHIRTS",
    "SKIRTS",
    "TROUSERS",
    "JEANS",
    "SHORTS | SKORTS",
    "COATS",
    "SHOES",
    "BAGS",
    "ACCESSORIES",
    "BASICS",
    "SUITS",
  ];
  const man = [
    "NEW",
    "ZARA ATHLETICZ",
    "BASICS",
    "TROUSERS",
    "CARGO | PARACHUTE",
    "JEANS",
    "JACKETS | OVERSHIRTS",
    "HOODIES | SWEATSHIRTS",
    "T-SHIRTS",
    "SHIRTS",
    "POLO SHIRTS",
    "SHORTS",
    "SWEATERS | CARDIGANS",
    "SUITS",
    "TRENCH COATS",
    "BLAZERS",
    "SHOES",
    "BAGS | BAGPACKS",
    "ACCESSORIES",
  ];
  const kids = [
    "GIRL | 6-14 YEARS",
    "BOY | 6-14 YEARS",
    "BABY GIRL | 9 MONTHS - 6 YEARS",
    "BABY BOY | 9 MONTHS - 6 YEARS",
    "NEWBORN | 0-12 MTH",
    "ACCESSORIES | SHOES",
  ];

  return (
    <div className="fixed w-full font-light text-xs z-50">
      <div className="w-full flex justify-between px-1.5 py-2.5 md:px-4 md:py-4">
        <div className="left ">
          <MenuRoundedIcon
            onClick={() => setSidebar("100 visible")}
            className="cursor-pointer"
          />
          <Link to="/">
            <svg
              aria-label="ZARA International logo. Go to home page"
              className="layout-logo__icon layout-header-logo__icon w-28 sm:w-36 md:w-40 lg:w-48 ml-2 float-right"
              viewBox="0 0 132 55"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M105.673.035l19.557 53.338 6.77.002v.383h-21.548v-.383h6.344l-6.431-17.54H97.311v.007l.07.204c.521 1.548.78 3.17.764 4.803v6.575c0 3.382 1.494 6.81 4.347 6.81 1.675 0 3.012-.59 4.604-2.046l.227.211C105.594 54.224 103.5 55 100.36 55c-2.37 0-4.398-.57-6.03-1.693l-.309-.222c-2.148-1.624-3.542-4.278-4.142-7.89l-.096-.583-.1-.882-.01-.152-3.599 9.792h5.107v.384H80.496v-.384h5.162l3.951-10.753v-.023a34.924 34.924 0 0 1-.075-1.906v-4.693c0-5.77-4.29-9.08-11.771-9.08H70.41v26.458h6.371v.383h-24.9v-.383h6.345l-6.431-17.54H33.948l-6.371 17.346.266-.044c8.366-1.442 12.213-7.827 12.265-14.55h.388v15.171H0L30.06 2.185H17.972C7.954 2.185 3.42 9.922 3.35 17.635h-.387V1.8h36.488l-.222.385L9.396 53.373h15.695c.39 0 .778-.019 1.169-.05.26-.018.522-.044.788-.077l.095-.01L46.703 0h.387l.013.035 15.369 41.916V2.185h-6.328v-.39h21.778c10.467 0 17.774 5.372 17.774 13.068 0 5.612-5.005 10.27-12.45 11.595l-1.367.174 1.377.14c4.515.517 8.1 1.906 10.641 4.127l.017.016L105.273 0h.386l.014.035zm-8.552 35.32l.038.094h13.061l-8.773-23.928-7.221 19.67.039.037.367.364a11.876 11.876 0 0 1 2.489 3.762zM70.415 26.53V2.185h5.611c7.496 0 11.454 4.414 11.454 12.76 0 8.877-2.272 11.585-9.717 11.585h-7.348zM42.882 11.521L34.09 35.45h17.565L42.882 11.52z"
              ></path>
            </svg>
          </Link>
        </div>

        <div className="flex justify-center items-start">
          <Link
            to="/search"
            className="text-black search mx-2 border-b border-black pr-5 hidden md:inline"
          >
            SEARCH
          </Link>
          <Link to="/search" className="text-black mx-2.5 md:invisible">
            <SearchIcon />
          </Link>
          {!userData ? (
            <Link to="/login" className="py-0.5 text-black sm:mx-2.5">
              LOG IN
            </Link>
          ) : (
            <Link to="/account" className="py-0.5 text-black sm:mx-2.5">
              {userData?.fname.toUpperCase()}
            </Link>
          )}
          <button className="py-0.5 mx-2.5 hidden md:inline">HELP</button>
          <Link
            to="/cart"
            className="text-black mx-2.5 relative border-x border-y border-black w-5 h-6 flex justify-center items-center"
          >
            {cartData?.length}
            <span className="absolute w-1/2 h-full border-t-2 border-black rounded-full -top-1"></span>
          </Link>
        </div>
      </div>
      <div
        className={ 
          " bg-white top-0 left-0 fixed h-screen w-full md:w-4/12 font-light text-xs transition duration-500  p-3.5 md:p-8 opacity-" +
          sidebar
        }
      >
        <div className="mb-5 w-full flex justify-between">
          <CloseIcon
            className="cursor-pointer"
            onClick={() => setSidebar("0 invisible")}
          />
          <div className="flex md:hidden">
            <Link to="/search">
              <SearchIcon
                className="text-black mx-2.5 scale-125"
                onClick={() => setSidebar("0 invisible")}
              />
            </Link>
            <Link
              to="/cart"
              className="text-black mx-2.5 relative border-x border-y border-black w-5 h-6 flex justify-center items-center"
              onClick={() => setSidebar("0 invisible")}
            >
              0
              <span className="absolute w-1/2 h-full border-t-2 border-black rounded-full -top-1"></span>
            </Link>
          </div>
        </div>

        <div className="flex w-full justify-center md:justify-start">
          <span
            className={
              props.index === 0
                ? "cursor-pointer font-bold relative before:absolute before:w-2/12 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "cursor-pointer"
            }
            onClick={() => {
              props.getIndex(0);
            }}
          >
            WOMEN
          </span>
          <span
            className={
              props.index === 1
                ? "mx-4 cursor-pointer font-bold relative before:absolute before:w-2/12 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "mx-4 cursor-pointer"
            }
            onClick={() => {
              props.getIndex(1);
            }}
          >
            MAN
          </span>
          <span
            className={
              props.index === 2
                ? "cursor-pointer font-bold relative before:absolute before:w-2/12 before:h-0.5 before:bg-black before:top-full before:left-1/2 before:-translate-x-2/4"
                : "cursor-pointer"
            }
            onClick={() => {
              props.getIndex(2);
            }}
          >
            KIDS
          </span>
        </div>
        <section
          className={
            props.index === 0
              ? "no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 z-10"
              : "no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 opacity-0"
          }
        >
          <p className="my-3 mb-5 flex justify-center md:justify-start">
            <a href="" className="no-underline text-black"></a>
          </p>
          <ul className="p-0 flex flex-col items-center md:items-start">
            {women.map((w, i) => (
              <li className="my-2" key={i}>
                <Link
                  to="/women"
                  className="no-underline text-black"
                  onClick={() => setSidebar("0 invisible")}
                >
                  {w}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="p-0 flex flex-col items-center md:items-start">
            <li className="my-5">
              <a href="#" className="no-underline text-black">
                JOIN LIFE
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-black">
                + INFO
              </a>
            </li>
          </ul>
        </section>
        <section
          className={
            props.index === 1
              ? "no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 z-10"
              : "no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 opacity-0"
          }
        >
          <p className="my-3 mb-5 flex justify-center md:justify-start">
            <Link
              to="/men"
              className="no-underline text-black"
              onClick={() => setSidebar("0 invisible")}
            >
              SWIMWEAR <sup>NEW</sup>
            </Link>
          </p>
          <ul className="p-0 flex flex-col items-center md:items-start">
            {man.map((m, i) => (
              <li className="my-2" key={i}>
                <Link
                  to="/men"
                  className="no-underline text-black"
                  onClick={() => setSidebar("0 invisible")}
                >
                  {m}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="p-0 flex flex-col items-center md:items-start">
            <li className="my-5">
              <a href="#" className="no-underline text-black">
                JOIN LIFE
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-black">
                + INFO
              </a>
            </li>
          </ul>
        </section>
        <section
          className={
            props.index === 2
              ? "no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 z-10"
              : "no-underline text-black overflow-scroll h-3/5 md:h-3/4 my-8 absolute w-full left-0 md:pl-8 transition duration-500 opacity-0"
          }
        >
          <p className="my-3 mb-5 flex justify-center md:justify-start">
            <Link
              to="/kids"
              className="no-underline text-black"
              onClick={() => setSidebar("0 invisible")}
            >
              TRUE NEUTRALS <sup>NEW</sup>
            </Link>
          </p>
          <ul className="p-0 flex flex-col items-center md:items-start">
            {kids.map((k, i) => (
              <li className="my-2" key={i}>
                <Link
                  to="/kids"
                  className="no-underline text-black"
                  onClick={() => setSidebar("0 invisible")}
                >
                  {k}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="p-0 flex flex-col items-center md:items-start">
            <li className="my-5">
              <a href="#" className="no-underline text-black">
                JOIN LIFE
              </a>
            </li>
            <li>
              <a href="#" className="no-underline text-black">
                + INFO
              </a>
            </li>
          </ul>
        </section>
        <div className="flex justify-between fixed bottom-0 border-t border-black w-100 left-0 p-4 text-small md:hidden">
          <Link
            to="/"
            className="text-black"
            onClick={() => setSidebar("0 invisible")}
          >
            HOME
          </Link>
          <Link
            to={userData ? "/account" : "/login"}
            className="text-black"
            onClick={() => setSidebar("0 invisible")}
          >
            MY ACCOUNT
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
