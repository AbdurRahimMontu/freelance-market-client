import React from "react";
import { Link, useRouteError } from "react-router";
import pageNotFound from "../assets/page.png";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="max-w-4xl mx-auto min-h-screen">
      <img src={pageNotFound} alt="" className="w-full " />
      {error.message}
      <Link to="/" className="btn w-full text-2xl bg-purple-800 text-white">
        Go Home
      </Link>
    </div>
  );
};

export default ErrorPage;
