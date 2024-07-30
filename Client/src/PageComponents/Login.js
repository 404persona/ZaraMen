import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const loginSchema = Yup.object({
  email: Yup.string().email().required("Plaese Enter Your Email"),
  password: Yup.string().min(6).required("Please Enter Your Password"),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [password, setPassword] = useState(true);
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: async (values, action) => {
        const response = await axios.post(
          process.env.REACT_APP_PATH + "user/login",
          values
        );
        toast(response.data.message);
        if (response.data.alert) {
          setUserData(response.data.userData);
          localStorage.setItem("User", JSON.stringify(response.data.userData));
          navigate("/");
        }
      },
    });

  return (
    <div>
      <div className="pt-28 md:pt-36 px-6 md:px-12 flex flex-col md:flex-row w-full">
        <div className="flex flex-col  w-full md:w-1/2 lg:w-2/5 ">
          <p className="text-sm font-semibold">LOG IN TO YOUR ACCOUNT</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="E-MAIL"
              className="w-full border-b border-black text-xs py-2 my-3 outline-0"
              name="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && touched.email ? (
              <p className=" text-xs text-red-600">{errors.email}</p>
            ) : null}
            <div className="w-full border-b border-black my-3 flex">
              <input
                type={password ? "password" : "text"}
                placeholder="PASSWORD"
                className="w-full text-xs py-2 outline-0"
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
            <button className="mt-10 py-3 w-full text-xs text-white bg-gray-900 hover:bg-gray-600">
              LOG IN
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 md:px-10 lg:mx-32 my-10 md:my-0">
          <p className="text-sm font-semibold">NEED AN ACCOUNT?</p>
          <Link
            to="/signup"
            className="text-center block text-black my-3 border-2 border-black hover:border-gray-400 py-2.5 w-full text-sm"
          >
            REGISTER
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
