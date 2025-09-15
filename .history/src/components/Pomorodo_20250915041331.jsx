import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Pomodoro() {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("Study"); // Study / Break
  const timerRef = useRef(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    stopTimer();
    setMode("Study");
    setMinutes(25);
    setSeconds(0);
  };

  const switchMode = () => {
    if (mode === "Study") {
      setMode("Break");
      setMinutes(5);
      setSeconds(0);
    } else {
      setMode("Study");
      setMinutes(25);
      setSeconds(0);
    }
  };

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSec) => {
          if (prevSec === 0) {
            if (minutes === 0) {
              switchMode();
              return 0;
            } else {
              setMinutes((prevMin) => prevMin - 1);
              return 59;
            }
          } else {
            return prevSec - 1;
          }
        });
      }, 1000);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning, minutes, mode]);

  const formatTime = (num) => (num < 10 ? `0${num}` : num);

  return (
    <div className="text-center">
      <h2 className="text-xl font-bold text-indigo-600 mb-4">⏱️ Pomodoro Timer</h2>
      <motion.div
        key={mode}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-4xl font-mono mb-4"
      >
        {formatTime(minutes)}:{formatTime(seconds)}
      </motion.div>
      <p className="mb-4 font-semibold">{mode} Time</p>
      <div className="flex justify-center gap-4">
        <button
          onClick={startTimer}
          className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600"
        >
          Start
        </button>
        <button
          onClick={stopTimer}
          className="bg-red-500 text-white px-4 py-2 rounded-xl hover:bg-red-600"
        >
          Stop
        </button>
        <button
          onClick={resetTimer}
          className="bg-yellow-400 text-white px-4 py-2 rounded-xl hover:bg-yellow-500"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
