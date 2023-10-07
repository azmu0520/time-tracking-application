import React, { useState } from "react";

function GivenTime() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const intValue = parseInt(value, 10);

    if (name === "hours") {
      setHours(intValue);
    } else if (name === "minutes") {
      setMinutes(intValue);
    } else if (name === "seconds") {
      setSeconds(intValue);
    }
  };
  const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

  return (
    <div className="GivenTime" style={{ display: "flex", columnGap: "15px" }}>
      <div style={{ flex: "1" }}>
        <label>
          Hours:
          <input
            type="number"
            name="hours"
            value={hours}
            placeholder="Hours"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div style={{ flex: "1" }}>
        <label>
          Minutes:
          <input
            type="number"
            name="minutes"
            value={minutes}
            placeholder="Minutes"
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div style={{ flex: "1" }}>
        <label>
          Seconds:
          <input
            type="number"
            name="seconds"
            value={seconds}
            placeholder="Seconds"
            onChange={handleInputChange}
          />
        </label>
      </div>
    </div>
  );
}

export default GivenTime;
