import React, { useState, useEffect } from "react";

const Calendar = ({ onGreenMarkChange }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateStates, setDateStates] = useState(new Array(31 * 12).fill(""));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleDateClick = (month, date) => {
    const clickedDate = new Date(currentDate.getFullYear(), month, date);
    const index = month * 31 + date - 1;

    const newDateStates = [...dateStates];

    if (
      clickedDate.getDate() === currentDate.getDate() &&
      clickedDate.getMonth() === currentDate.getMonth() &&
      clickedDate.getFullYear() === currentDate.getFullYear()
    ) {
      if (newDateStates[index] === "") {
        newDateStates[index] = "bg-green-500 text-white";
      } else if (newDateStates[index] === "bg-green-500 text-white") {
        newDateStates[index] = "bg-red-500 text-white";
      } else {
        newDateStates[index] = "";
      }
    } else {
      if (newDateStates[index] === "") {
        newDateStates[index] = "bg-blue-500 text-white";
      } else {
        newDateStates[index] = "";
      }
    }

    setDateStates(newDateStates);
  };

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  return (
    <div className="flex flex-col p-8 pt-24 justify-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
        {months.map((month, index) => (
          <div key={index} className="bg-calendar-col rounded-md p-4">
            <h2 className="text-sm md:text-base lg:text-lg font-bold mb-2 text-white">
              {month}
            </h2>
            <div className="grid grid-cols-7 gap-1 text-white">
              {Array.from(
                { length: getDaysInMonth(index, currentDate.getFullYear()) },
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDateClick(index, i + 1)}
                    className={`w-6 h-6 sm:w-8 sm:h-8 text-xs sm:text-sm rounded-full border-1 border-grid-col ${
                      dateStates[index * 31 + i]
                    }`}
                    style={{
                      cursor: "pointer",
                      opacity: 1,
                    }}
                  >
                    {i + 1}
                  </button>
                )
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
