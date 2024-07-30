import React, { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const signUpSchema = Yup.object({
  fname: Yup.string().min(2).max(20).required("Please Enter Your First Name"),
  lname: Yup.string().min(2).max(20).required("Please Enter Your Last Name"),
  email: Yup.string().email().required("Plaese Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
  Cpassword: Yup.string()
    .required("Please Confirm Your Password")
    .oneOf([Yup.ref("password"), null], "Passwords Must Match"),
  address: Yup.string().required("Please Enter Your Address"),
  no: Yup.number().required("Please Enter Your Phone Number"),
  checkbox: Yup.boolean().required("You must accept the terms and conditions"),
});

const initialValues = {
  email: "",
  fname: "",
  lname: "",
  password: "",
  Cpassword: "",
  address: "",
  no: "",
  checkbox: "",
};

const Signup = () => {
  const [password, setPassword] = useState(true);
  const [Cpassword, setCpassword] = useState(true);
  const navigate = useNavigate();
  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: async (values, action) => {
        const response = await axios.post(
          process.env.REACT_APP_PATH + "user/signup",
          { ...values, type: "user", createdAt: new Date() }
        );
        toast(response.data.message);
        if (response.data.alert) {
          navigate("/login");
        }
      },
    });

  return (
    <div className="pt-28 md:pt-36 px-6 md:px-12">
      <h1 className="font-bold">PERSONAL DETAILS</h1>
      <form onSubmit={handleSubmit}>
        <div className="relative w-full md:w-[48%] lg:w-1/3  my-6 md:my-10">
          <input
            type="email"
            className="text-xs w-full outline-none border-b border-black py-2"
            placeholder="E-MAIL"
            name="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="text-xs text-red-600">{errors.email}</p>
          ) : null}
        </div>
        <div className="relative w-full lg:w-[70%] my-6 md:my-10 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-[48%]">
            <div className="flex border-b border-black">
              <input
                type={password ? "password" : "text"}
                className="text-xs w-full outline-none py-2"
                placeholder="PASSWORD"
                name="password"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.password && (
                <span
                  className="p-2 flex cursor-pointer"
                  onClick={() => {
                    setPassword((password) => !password);
                  }}
                >
                  {password ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </span>
              )}
            </div>
            {errors.password && touched.password ? (
              <p className=" text-xs text-red-600">{errors.password}</p>
            ) : null}
          </div>
          <div className="w-full md:w-[48%] my-6 md:my-0">
            <div className="flex border-b border-black">
              <input
                type={Cpassword ? "password" : "text"}
                className="text-xs w-full outline-none py-2"
                placeholder="REPEAT PASSWORD"
                name="Cpassword"
                id="Cpassowrd"
                value={values.Cpassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {values.Cpassword && (
                <span
                  className="p-2 flex cursor-pointer"
                  onClick={() => {
                    setCpassword((Cpassword) => !Cpassword);
                  }}
                >
                  {Cpassword ? (
                    <VisibilityOffOutlinedIcon />
                  ) : (
                    <VisibilityOutlinedIcon />
                  )}
                </span>
              )}
            </div>

            {errors.Cpassword && touched.Cpassword ? (
              <p className="text-xs text-red-600">{errors.Cpassword}</p>
            ) : null}
          </div>
        </div>
        <div className="relative w-full lg:w-[70%] my-6 md:my-10 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-[48%]">
            <input
              type="text"
              className="text-xs w-full outline-none border-b border-black py-2"
              placeholder="FIRST NAME"
              name="fname"
              id="fname"
              value={values.fname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.fname && touched.fname ? (
              <p className="text-xs text-red-600">{errors.fname}</p>
            ) : null}
          </div>
          <div className="w-full md:w-[48%] my-6 md:my-0">
            <input
              type="text"
              className="text-xs w-full outline-none border-b border-black py-2"
              placeholder="LAST NAME"
              name="lname"
              id="lname"
              value={values.lname}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.lname && touched.lname ? (
              <p className="text-xs text-red-600">{errors.lname}</p>
            ) : null}
          </div>
        </div>
        <div className="relative w-full lg:w-[70%] my-6 md:my-10 flex flex-col md:flex-row md:justify-between">
          <div className="w-full md:w-[48%]">
            <input
              type="text"
              className="text-xs w-full outline-none border-b border-black py-2"
              placeholder="ADDRESS"
              name="address"
              id="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.address && touched.address ? (
              <p className="text-xs text-red-600">{errors.address}</p>
            ) : null}
          </div>
          <div className="w-full md:w-[48%] my-6 md:my-0">
            <input
              type="number"
              className="text-xs w-full outline-none border-b border-black py-2"
              placeholder="TELEPHONE"
              name="no"
              id="no"
              value={values.no}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.no && touched.no ? (
              <p className="text-xs text-red-600">{errors.no}</p>
            ) : null}
          </div>
        </div>
        <label className="text-xs text-gray-500 flex my-6 md:my-0">
          <input
            type="checkbox"
            name="checkbox"
            id="checkbox"
            value={values.checkbox}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <span className="mx-2">
            I have read and understand the Privacy and Cookies Policy
          </span>
        </label>
        {errors.checkbox && touched.checkbox ? (
          <p className="text-xs text-red-600">{errors.checkbox}</p>
        ) : null}
        <button className="text-black my-5 border-2 border-black hover:border-gray-400 py-2.5 w-full md:w-1/2 lg:w-1/3 text-sm font-light">
          CREATE ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default Signup;
