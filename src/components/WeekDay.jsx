import React from "react";

const WeekDay = ({ weekDays }) => {
  function showWeekDay(n) {
    return n === 0 || n === 2 || n === 4;
  }
  return (
    <>
      {weekDays.map((day, i) =>
        showWeekDay(i) ? (
          <p className="week-day capitalize" key={i}>
            {day.format("dd")}
          </p>
        ) : (
          <p key={i}></p>
        )
      )}
    </>
  );
};

export default WeekDay;
