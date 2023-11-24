import { Dayjs } from "dayjs";
import React, { useEffect, useState } from "react";
import { getDates, getMonths } from "../utils/date";
import Day from "./Day";
import Levels from "./Levels";
import WeekDay from "./WeekDay";
import axios from "axios";

const API = "https://dpg.gg/test/calendar.json";

const dates = getDates();
const months = getMonths();

const ContributionGraph = () => {
  const [selectedDay, setSelectedDay] = useState(null || Dayjs);
  const [contributions, setContributions] = useState({});

  async function getContributions() {
    try {
      const { data } = await axios.get(API);
      setContributions(data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getContributions();
  }, []);
  return (
    <div>
      <div className="table">
        <div className="table__head">
          {months.map((month) => (
            <p className="capitalize" key={month}>
              {month}
            </p>
          ))}
        </div>

        <div className="table__body">
          <WeekDay weekDays={dates.slice(0, 7)} />

          {dates.map((day, i) => (
            <Day
              contributions={contributions}
              selectedDay={selectedDay}
              setSelectedDay={setSelectedDay}
              key={i}
              day={day}
            />
          ))}
        </div>
      </div>
      <Levels />
    </div>
  );
};

export default ContributionGraph;
