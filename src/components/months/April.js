import React, { useState } from "react";
import Navbar from "../Navbar";
import Calendar from "../Calender";

const April = () => {
  const [greenMarkCount, setGreenMarkCount] = useState(0);

  const handleGreenMarkChange = (greenDates) => {
    setGreenMarkCount(greenDates.length);
  };

  return (
    <div className="bg-month-col min-h-[100vh]">
      <Navbar />
      <h1 className="flex justify-center pt-12 text-white text-4xl">CALENDER</h1>
      <div className="m-2 grid gap-6 pt-12 sm:grid-cols-12">
        <div className="min-h-[600px] rounded bg-month-col shadow-xl sm:col-span-12">
          <Calendar onGreenMarkChange={handleGreenMarkChange} />
        </div>
        {/* <div className="min-h-[600px] rounded bg-grid-col shadow-xl sm:col-span-3">
          <div className="pt-64"></div>
          <p className="flex items-center justify-center ps-18 text-white border-4 border-lime-500 px-4 py-2">
            Amount ={" "}
            <input
              className="ml-2 w-16 px-2 py-1 text-black rounded-md"
              placeholder="__"
              type="number"
              min="0"
              max="1500"
              step="1"
              pattern="^\d+(?:\.\d{1,2})?$"
              value={greenMarkCount * 18}
              readOnly
            />
            / 1500
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default April;
