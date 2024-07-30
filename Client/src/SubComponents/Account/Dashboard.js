import React, { useContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/UserContext";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
const Dashboard = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [sidebar, setSidebar] = useState("scale-x-0");
  return (
    <div>
      <div className="z-10 hidden md:flex fixed left-0 p-6 border-r border-black h-screen shadow flex-col">
        <Link to="" className="border-b border-black p-1.5 text-black">
          Statistics
        </Link>
        <Link to="orders" className="border-b border-black p-1.5 text-black">
          Orders
        </Link>
        {userData.type === "admin" && (
          <Link to="users" className="border-b border-black p-1.5 text-black">
            Users
          </Link>
        )}
        {userData.type === "admin" && (
          <Link
            to="products"
            className="border-b border-black p-1.5 text-black"
          >
            Products
          </Link>
        )}
        {userData.type === "admin" && (
          <Link
            to="addproduct"
            className="border-b border-black p-1.5 text-black"
          >
            Add Product
          </Link>
        )}
      </div>
      <div
        className={
          "fixed top-0 left-0 w-1/2 h-screen bg-white z-50 p-3.5 flex flex-col transition origin-left duration-200 " +
          sidebar
        }
      >
        <CloseIcon
          className="mb-6 cursor-pointer"
          onClick={() => setSidebar("scale-x-0")}
        />
        <Link
          onClick={() => setSidebar("scale-x-0")}
          to=""
          className="border-b border-black p-1.5 text-black"
        >
          Statistics
        </Link>
        <Link
          onClick={() => setSidebar("scale-x-0")}
          to="orders"
          className="border-b border-black p-1.5 text-black"
        >
          Orders
        </Link>
        {userData.type === "admin" && (
          <Link
            onClick={() => setSidebar("scale-x-0")}
            to="users"
            className="border-b border-black p-1.5 text-black"
          >
            Users
          </Link>
        )}
        {userData.type === "admin" && (
          <Link
            to="products"
            className="border-b border-black p-1.5 text-black"
            onClick={() => setSidebar("scale-x-0")}
          >
            Products
          </Link>
        )}
        {userData.type === "admin" && (
          <Link
            to="addproduct"
            className="border-b border-black p-1.5 text-black"
            onClick={() => setSidebar("scale-x-0")}
          >
            Add Product
          </Link>
        )}
      </div>
      <div className="relative md:pl-36 lg:pl-48">
        <MenuIcon
          className="md:invisible absolute top-1 left-1 cursor-pointer"
          onClick={() => setSidebar("scale-x-full")}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
