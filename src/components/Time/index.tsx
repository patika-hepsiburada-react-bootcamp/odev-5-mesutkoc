import React, { useEffect, useState } from "react";
import { days, today, times } from "../../contexts/TodoContext";

function Time() {
  const [getTime, setTime] = useState("");
  const day = days[times.getDay()];
  useEffect(() => {
    setInterval(() => {
      
      const time =
        new Date().getHours() +
        ":" +
        new Date().getMinutes() +
        ":" +
        new Date().getSeconds();
      setTime(time);
    },1000);
  }, []);

  return (
    <div className="timeDiv">
      <div className="timeContainer">
        <div className="time">{getTime}</div>
        <div className="day">{day}</div>
        <div className="date">{today}</div>
      </div>
    </div>
  );
}

export default Time;
