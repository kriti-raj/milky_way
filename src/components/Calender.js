import React, { useState, useEffect } from "react";

const Calendar = ({ onGreenMarkChange }) => {
  const [dates, setDates] = useState(new Array(31).fill(""));
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, []);

  const handleDateClick = (index) => {
    const newDates = [...dates];
    const clickedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      index + 1
    );

    if (
      clickedDate.getDate() === currentDate.getDate() &&
      clickedDate.getMonth() === currentDate.getMonth() &&
      clickedDate.getFullYear() === currentDate.getFullYear()
    ) {
      if (newDates[index] === "") {
        newDates[index] = "bg-green-500";
      } else if (newDates[index] === "bg-green-500") {
        newDates[index] = "bg-red-500";
      } else {
        newDates[index] = "";
      }
    }

    setDates(newDates);
    const greenMarkCount = newDates.filter((date) => date === "bg-green-500").length;
    onGreenMarkChange(greenMarkCount);
  };

  return (
    <div className="flex justify-center p-8 pt-36">
      <div className="grid grid-cols-7 gap-4 w-96 h-72 rounded-md bg-gray-600">
        {dates.map((date, index) => (
          <button
            key={index}
            onClick={() => handleDateClick(index)}
            className={`w-10 h-10 text-xl rounded-full border-2 border-grid-col ${date}`}
            style={{
              color: date === "bg-green-500" ? "white" : "black",
              backgroundColor:
                date === "bg-green-500"
                  ? "#00a300"
                  : date === "bg-red-500"
                  ? "#e74c3c"
                  : "#48b2ea",
              cursor:
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  index + 1
                ).getDate() === currentDate.getDate()
                  ? "pointer"
                  : "default",
              opacity:
                new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                  index + 1
                ).getDate() === currentDate.getDate()
                  ? 1
                  : 0.5,
            }}
            disabled={
              new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                index + 1
              ).getDate() !== currentDate.getDate()
            }
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
