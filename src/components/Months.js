import React, { useState } from "react";
import Navbar from "./Navbar";
import Calendar from "./Calendar";

const Months = () => (
  <div className="bg-month-col min-h-[100vh]">
    <Navbar title="CALENDAR" />
    <h1 className="flex justify-center pt-12 text-white text-4xl">CALENDAR</h1>
    <div className="m-2 grid gap-6 pt-12 sm:grid-cols-12">
      <div className="min-h-[600px] rounded bg-month-col shadow-xl sm:col-span-12">
        <Calendar />
      </div>
    </div>
  </div>
);

export default Months;