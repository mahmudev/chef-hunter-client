import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <>
  <div className="flex justify-center items-center h-screen">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
    <div className="flex justify-center items-center">
      <div className="max-w-md text-center">
        <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
          <span className="sr-only">Error</span>
          {status || 404}
        </h2>
        <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
          {error?.message}
        </p>
        <Link to="/" className="btn btn-warning">
          Back to homepage
        </Link>
      </div>
    </div>
    <div className="flex justify-center items-center">
      <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
    </div>
  </div>
</div>

    </>
  );
};

export default ErrorPage;
