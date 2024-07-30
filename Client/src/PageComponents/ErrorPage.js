import React from "react";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="px-10 w-full h-screen flex-col flex justify-center items-center">
      <h1 className="font-bold text-5xl">OOPS!</h1>
      <p className="my-3 text-lg font-semibold">404 - PAGE NOT FOUND</p>
      <i>
        THE PAGE YOU ARE LOOKING FOR IS EITHER UNAVAILABLE OR YOU ARE
        UNAUTHORIZED
      </i>
      <p className="my-2 font-semibold">
        GO TO:{" "}
        <Link to="/" className="text-blue-500 underline">
          HOME PAGE
        </Link>
      </p>
    </div>
  );
};

export default ErrorPage;
