import React, { useEffect, useState } from "react";
import "./styles.css";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();

  const hourDegrees = ((hours % 12) + minutes / 60) * 30;
  const minuteDegrees = (minutes + seconds / 60) * 6;
  const secondDegrees = seconds * 6;

  return (
    <div className="clock-container">
      <div className="clock">
        <div className="hor" style={{ transform: `rotate(${hourDegrees}deg)` }}>
          <div className="hr" />
        </div>
        <div className="min" style={{ transform: `rotate(${minuteDegrees}deg)` }}>
          <div className="mn" />
        </div>
        <div className="sec" style={{ transform: `rotate(${secondDegrees}deg)` }}>
          <div className="sc" />
        </div>
      </div>
    </div>
  );
};

export default Clock;
