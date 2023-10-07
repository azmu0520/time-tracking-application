import React, { useState } from "react";

function TaskForm() {
  const [taskName, setTaskName] = useState("");
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "hours") {
      setHours(value);
    } else if (name === "minutes") {
      setMinutes(value);
    } else if (name === "seconds") {
      setSeconds(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Construct the task object with the selected time
    const taskDuration = {
      hours: parseInt(hours, 10),
      minutes: parseInt(minutes, 10),
      seconds: parseInt(seconds, 10),
    };

    // You can now use taskName and taskDuration to handle the task in your application

    // Reset the form
    setTaskName("");
    setHours(0);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Task Name:
          <input
            type="text"
            name="taskName"
            value={taskName}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Hours:
          <input
            type="number"
            name="hours"
            value={hours}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Minutes:
          <input
            type="number"
            name="minutes"
            value={minutes}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <div>
        <label>
          Seconds:
          <input
            type="number"
            name="seconds"
            value={seconds}
            onChange={handleInputChange}
          />
        </label>
      </div>
      <button type="submit">Set Task</button>
    </form>
  );
}

export default TaskForm;
