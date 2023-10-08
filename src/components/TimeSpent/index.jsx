import React, { useState, useEffect } from "react";

import { useTimeContext } from "../../context/SpentTime";
import useRequest from "../../hooks/useRequest";

function Timer({ task_id, sheet, started }) {
  const [time, setTime] = useState(
    localStorage.getItem("startTime")
      ? Math.floor(Date.now() / 1000).toString() -
          localStorage.getItem("startTime")
      : 0
  );
  const [isRunning, setIsRunning] = useState(
    false || localStorage.getItem("startTime")
  );
  const { request } = useRequest();
  const [, dispatch] = useTimeContext();

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours}:${minutes}:${seconds}`;
  };
  console.log(task_id, localStorage.getItem("startedTask"), "task_id");
  useEffect(() => {
    let interval;
    if (localStorage.getItem("startedTask") === task_id) {
      console.log("===============================================");
      if (isRunning) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(interval);
      }
    } else {
      setTime(0);
    }

    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, [isRunning]);

  const startTimer = () => {
    let currTime = Math.floor(Date.now() / 1000);
    localStorage.setItem("startTime", currTime.toString());
    localStorage.setItem("startedTask", task_id);
    dispatch({ type: "isRunning", payload: true });

    setIsRunning(true);
  };

  const stopTimer = async () => {
    try {
      await request({
        url: "tasks/update",
        method: "POST",
        body: { task_id, time, sheet },
      }).catch((err) => console.log(err));
    } catch (error) {
      console.log(error);
    }

    localStorage.removeItem("startTime");
    localStorage.removeItem("startedTask");
    setIsRunning(false);
    setTime(0);
    dispatch({ type: "isRunning", payload: false });
    dispatch({ type: "stopTime", payload: time });
  };
  return (
    <div>
      <h3 style={{ width: "70px" }}>{formatTime(time)}</h3>
      <button
        style={{ marginRight: "10px", cursor: "pointer" }}
        onClick={startTimer}
        disabled={isRunning === task_id || started}
      >
        Start
      </button>
      <button
        style={{ cursor: "pointer" }}
        onClick={stopTimer}
        disabled={!isRunning || localStorage.getItem("startedTask") !== task_id}
      >
        Stop
      </button>
    </div>
  );
}

export default Timer;
