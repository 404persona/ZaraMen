import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import { CartContext } from "../../Context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import axios from "axios";
import * as Yup from "yup";
import dateFormat from "dateformat";
const updateSchema = Yup.object({
  fname: Yup.string().min(2).max(20).required("Please Enter Your First Name"),
  lname: Yup.string().min(2).max(20).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Plaese Enter Your Email"),
  address: Yup.string().required("Please Enter Your Address"),
});

const Account = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);
  const [edit, setEdit] = useState(false);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    async function getData() {
      const orders = await axios.get(
        process.env.REACT_APP_PATH + "order/orders"
      );
      setOrders(orders.data);
    }
    getData();
  }, []);

  const initialValues = {
    fname: userData.fname,
    lname: userData.lname,
    email: userData.email,
    address: userData.address,
  };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: updateSchema,

      onSubmit: async (values, action) => {
        const response = await axios.put(
          process.env.REACT_APP_PATH + `user/update/${userData.id}`,
          values
        );
        toast(response.data.message);
        if (response.data.alert) {
          setUserData({
            ...userData,
            fname: values.fname,
            lname: values.lname,
            email: values.email,
            address: values.address,
          });
          localStorage.setItem(
            "User",
            JSON.stringify({
              ...userData,
              fname: values.fname,
              lname: values.lname,
              email: values.email,
              address: values.address,
            })
          );
          setEdit(false);
        }
      },
    });

  return (
    <div className="overflow-scroll flex-col md:flex-row flex w-full p-6 md:p-10 justify-around">
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 lg:w-1/3">
        <p className="text-sm font-bold">FIRST NAME</p>
        {edit ? (
          <input
            type="text"
            name="fname"
            id="fname"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
            autoFocus
          />
        ) : (
          <p className="border-b border-black p-1 text-sm w-full text-gray-500">
            {userData.fname}
          </p>
        )}
        {errors.fname && touched.fname ? (
          <p className="text-xs text-red-600">{errors.fname}</p>
        ) : null}
        <p className="pt-6 text-sm font-bold">LAST NAME</p>
        {edit ? (
          <input
            type="text"
            name="lname"
            id="lname"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          />
        ) : (
          <p className="border-b border-black p-1 text-sm w-full text-gray-500">
            {userData.lname}
          </p>
        )}
        {errors.lname && touched.lname ? (
          <p className="text-xs text-red-600">{errors.lname}</p>
        ) : null}
        <p className="pt-6 text-sm font-bold">EMAIL</p>
        {edit ? (
          <input
            type="email"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          />
        ) : (
          <p className="border-b border-black p-1 text-sm w-full text-gray-500">
            {userData.email}
          </p>
        )}
        {errors.email && touched.email ? (
          <p className="text-xs text-red-600">{errors.email}</p>
        ) : null}
        <p className="pt-6 text-sm font-bold">ADDRESS</p>
        {edit ? (
          <input
            type="text"
            name="address"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border-b outline-none border-black p-1 text-sm w-full text-gray-500"
          />
        ) : (
          <p className="border-b border-black p-1 text-sm w-full text-gray-500">
            {userData.address}
          </p>
        )}
        {errors.address && touched.address ? (
          <p className="text-xs text-red-600">{errors.address}</p>
        ) : null}
        <div className="w-full flex justify-end">
          {edit ? (
            <button className="text-center bg-black text-white my-3  hover:border-gray-400 py-2.5 px-3.5 text-xs">
              SAVE
            </button>
          ) : (
            <span
              className="text-center bg-black text-white my-3  hover:border-gray-400 py-2.5 px-3.5 text-xs cursor-pointer"
              onClick={() => {
                setEdit(true);
              }}
            >
              EDIT
            </span>
          )}
        </div>
        <span
          className="cursor-pointer mt-10 text-sm border-b border-black text-gray-500 font-bold"
          onClick={() => {
            setUserData("");
            setCartData([]);
            localStorage.removeItem("User");
            localStorage.removeItem("cart");
            toast("Logged out successfully");
            navigate("/");
          }}
        >
          Sign Out
        </span>
        <p className="text-xs text-gray-400 my-6">
          At ZARA we take your privacy very seriously and are committed to the
          protection of your personal data. Learn more about how we care for and
          use your data in our Privacy Policy.
        </p>
      </form>
      <div className="px-6 w-full md:w-1/2 my-10 md:my-0">
        <h1 className="mb-6 text-center font-bold text-2xl">Order History</h1>
        <div className="md:h-[60vh] md:overflow-scroll md:scrollbar-none">
          {orders
            ?.filter((d) => {
              return d.email === userData.email;
            })
            .reverse()
            .map((d, i) => (
              <div key={i}>
                {d.order.map((c, i) => (
                  <div
                    key={i}
                    className="flex flex-col md:flex-row justify-between p-2.5 border my-2.5"
                  >
                    <div className="w-full md:w-2/3">
                      <img
                        src={process.env.REACT_APP_PATH + c.img}
                        alt=""
                        className=" w-20 md:w-16 md:float-left md:mr-3.5 mx-[auto]"
                      />
                      <h1 className="font-bold  text-xs md:text-sm truncate">
                        {c.name}
                      </h1>
                      <p className="text-xs md:text-sm my-1.5">
                        SIZE: {c.size}
                      </p>
                      <p className="text-xs md:text-sm my-1.5">
                        DATE: {dateFormat(d.created_at, "mmmm dS, yyyy")}
                      </p>
                    </div>
                    <div className="flex flex-col justify-between font-bold text-xs md:text-sm">
                      <span>
                        {c.price} x {c.qty}
                      </span>
                      <span>
                        {d.status[0].toUpperCase() + d.status.slice(1)}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Account;
