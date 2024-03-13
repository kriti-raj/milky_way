import React from "react";
import Navbar from "../Navbar";

const March = () => {
  return (
    <div className="bg-vikku-col min-h-[100vh]">
      <Navbar />
      <h1 className="text-white pt-12">March</h1>
      <div className="m-4 grid gap-6 pt-12 sm:grid-cols-12">
        <div className="min-h-[600px] rounded bg-muthu-col shadow-xl sm:col-span-8">
          <p className="flex text-justify-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="min-h-[600px] rounded bg-kriti-col shadow-xl sm:col-span-4 ">
          <p className="flex text-justify-center text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default March;
