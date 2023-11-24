import Tooltip from "./Tooltip";
import React from "react";

const Day = ({ day, selectedDay, setSelectedDay, contributions }) => {
  const formattedDay = day.format("YYYY-MM-DD");

  function isSelected() {
    if (!selectedDay) return false;
    const format = "DD-MM-YYYY";
    const selected = selectedDay.format(format);
    const current = day.format(format);

    return selected === current;
  }

  function getBgColor() {
    if (!(formattedDay in contributions)) return "level-1";

    if (contributions[formattedDay] < 10) {
      return "level-2";
    } else if (contributions[formattedDay] < 20) {
      return "level-3";
    } else if (contributions[formattedDay] < 30) {
      return "level-4";
    } else {
      return "level-5";
    }
  }

  return (
    <Tooltip
      title={`${contributions[formattedDay] || "No"} contributions`}
      helperText={day.format("dddd, MMMM DD, YYYY")}
      afterVisibleChange={(visible) => setSelectedDay(visible ? day : null)}
    >
      <div
        className={`day ${isSelected() ? "selected" : ""} ${getBgColor()}`}
      ></div>
    </Tooltip>
  );
};

export default Day;
