import React, { useState, useEffect } from "react";

function Pomodoro() {
  const [time, setTime] = useState(25 * 60); // 25 minutes
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running && time > 0) {
      timer = setInterval(() => setTime(time - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running, time]);

  const reset = () => setTime(25 * 60);

  return (
    <div>
      <h2>⏱ Pomodoro Timer</h2>
      <h1>
        {String(Math.floor(time / 60)).padStart(2, "0")}:
        {String(time % 60).padStart(2, "0")}
      </h1>
      <button onClick={() => setRunning(!running)} className="px-2 py-1 bg-green-500 text-white rounded">
        {running ? "Pause" : "Start"}
      </button>
      <button onClick={reset} className="ml-2 px-2 py-1 bg-red-500 text-white rounded">
        Reset
      </button>
    </div>
  );
}

export default Pomodoro;
