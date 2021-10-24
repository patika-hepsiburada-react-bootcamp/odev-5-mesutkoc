import React from "react";
import { days, currentTime, today } from "../../contexts/TodoContext";
function Time() {
  const day = days[new Date().getDay()];
  console.log(currentTime);
  return (
      <div className="time">
      <div> {day}</div>
      <div>{today}</div>
    </div>
  );
}

export default Time;
