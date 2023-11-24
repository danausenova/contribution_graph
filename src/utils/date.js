import dayjs from "dayjs";
import "dayjs/locale/ru";
dayjs.locale("ru");

export function getDates(date = dayjs()) {
  const endOfWeek = date.endOf("week");
  const start = endOfWeek.subtract(356, "day");

  const weekDates = [];

  for (let i = 0; i < 357; i++) {
    const currentDate = start.add(i, "day");
    weekDates.push(currentDate);
  }

  return weekDates;
}

export function getMonths(month = dayjs()) {
  const start = month.subtract(11, "month");
  const months = [];

  for (let i = 0; i < 12; i++) {
    const currentMonth = start.add(i, "month");
    months.push(currentMonth.format("MMM"));
  }

  return months;
}
