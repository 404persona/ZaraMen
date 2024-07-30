import React, { useContext, useEffect } from "react";
import { UserContext } from "../Context/UserContext";
import { CartContext } from "../Context/CartContext";
import * as Yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const checkoutSchema = Yup.object({
  fname: Yup.string().required("Plaese Enter Your First Name"),
  lname: Yup.string().required("Plaese Enter Your Last Name"),
  email: Yup.string().email().required("Plaese Enter Your Email"),
  no: Yup.string().required("Plaese Enter Your Number"),
  address: Yup.string().required("Plaese Enter Your Address"),
});

const Checkout = () => {
  const [userData, setUserData] = useContext(UserContext);
  const [cartData, setCartData] = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleTotal = () => {
    let total = 0;
    cartData.map((item) => (total = total + item.tprice));
    return total;
  };

  const initialValues = {
    fname: userData.fname,
    lname: userData.lname,
    email: userData.email,
    no: userData.no,
    address: userData.address,
  };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: checkoutSchema,
      onSubmit: async (values, action) => {
        const response = await axios.post(
          process.env.REACT_APP_PATH + "order/addOrder",
          {
            ...values,
            order: cartData,
            price: Math.round(handleTotal() * 100) / 100 + 10,
            created_at: new Date(),
            status: "pending",
          }
        );
        toast(response.data.message);
        navigate("/");
        setCartData([]);
        localStorage.removeItem("cart");
      },
    });

  return (
    <div className="w-full flex flex-col md:flex-row py-16 md:py-20 lg:py-28 px-6 lg:px-10">
      <div className="w-full md:w-1/2">
        <h1 className="font-bold my-5 text-2xl text-center">CHECKOUT</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="name" className="font-bold text-sm">
            FIRST NAME:
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            value={values.fname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="py-1.5 outline-none border-b border-black font-light text-sm"
            placeholder="Type your name here..."
          />
          {errors.fname && touched.fname ? (
            <p className="text-xs text-red-600">{errors.fname}</p>
          ) : null}
          <label htmlFor="name" className="mt-3.5 font-bold text-sm">
            LAST NAME:
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            value={values.lname}
            onChange={handleChange}
            onBlur={handleBlur}
            className="py-1.5 outline-none border-b border-black font-light text-sm"
            placeholder="Type your name here..."
          />
          {errors.lname && touched.lname ? (
            <p className="text-xs text-red-600">{errors.lname}</p>
          ) : null}
          <label htmlFor="name" className="mt-3.5 font-bold text-sm">
            EMAIL:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className="py-1.5 outline-none border-b border-black font-light text-sm"
            placeholder="Type your name here..."
          />
          {errors.email && touched.email ? (
            <p className="text-xs text-red-600">{errors.email}</p>
          ) : null}

          <label htmlFor="no" className="mt-3.5 font-bold text-sm">
            PHONE NUMBER:
          </label>
          <input
            type="number"
            value={values.no}
            onChange={handleChange}
            onBlur={handleBlur}
            id="no"
            name="no"
            className="py-1.5 outline-none border-b border-black font-light text-sm"
            placeholder="Type your phone number here..."
          />
          {errors.no && touched.no ? (
            <p className="text-xs text-red-600">{errors.no}</p>
          ) : null}
          <label htmlFor="address" className="mt-3.5 font-bold text-sm">
            ADDRESS:
          </label>
          <input
            type="text"
            id="address"
            value={values.address}
            onChange={handleChange}
            onBlur={handleBlur}
            name="address"
            className="py-1.5 outline-none border-b border-black font-light text-sm"
            placeholder="Type your address here..."
          />
          {errors.address && touched.address ? (
            <p className="text-xs text-red-600">{errors.address}</p>
          ) : null}

          <p className="font-bold text-sm mt-6">PAYMENT</p>
          <p className="my-2 border-y py-2">
            <input type="radio" defaultChecked className="mx-2 accent-black" />
            Cash
          </p>
          <div className="fixed bottom-0 left-0  w-full flex justify-end p-3.5 md:p-6 text-[10px] sm:text-xs bg-white/95">
            <div className="flex flex-col sm:flex-row">
              <div className="flex flex-col items-end">
                <div>
                  <span className="font-bold">TOTAL</span>
                  <span className="font-bold mx-3.5 sm:mx-6 md:mx-10">
                    {Math.round(handleTotal() * 100) / 100} EUR
                  </span>
                </div>
                <div>
                  <span className="font-bold">SHIPPING</span>
                  <span className="font-bold mx-3.5 sm:mx-6 md:mx-10">
                    10 EUR
                  </span>
                </div>
              </div>
              <div>
                <span className="font-bold">TO PAY</span>
                <span className="font-bold mx-3.5 sm:mx-6 md:mx-10">
                  {Math.round(handleTotal() * 100) / 100 + 10} EUR
                </span>
              </div>
            </div>
            <button className="py-2.5 w-1/3 bg-black text-white">
              CONTINUE
            </button>
          </div>
        </form>
      </div>
      <div className="w-full md:w-1/2 md:px-10 lg:px-20">
        <h1 className="font-bold my-5 text-2xl text-center">YOUR ORDER</h1>
        <div className="w-full h-[60vh] overflow-scroll scrollbar-none">
          {cartData.map((c, i) => (
            <div
              key={i}
              className="border-x border-y border-black p-1.5 sm:p-3 my-2 flex justify-between"
            >
              <div className="w-2/3">
                <img
                  src={process.env.REACT_APP_PATH + c.img}
                  alt=""
                  className="w-12 float-left mr-3.5"
                />
                <h1 className="font-semibold text-xs">{c.name}</h1>
                <p className="font-semibold text-xs my-1.5">SIZE: {c.size}</p>
              </div>
              <span className="text-sm font-bold">
                {c.price} x {c.qty}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
