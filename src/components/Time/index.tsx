import React from "react";
import { days, today, times } from "../../contexts/TodoContext";

function Time() {
  
  const day = days[times.getDay()];
  const time = times.getHours() + ":" + times.getMinutes();
  return (
    <div className="timeDiv">
      <div className="timeContainer">
        <div className="time">{time}</div>
        <div className="day">{day}</div>
        <div className="date">{today}</div>
      </div>
    </div>
  );
}

export default Time;
