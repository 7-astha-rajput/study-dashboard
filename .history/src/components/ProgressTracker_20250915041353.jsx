import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ProgressTracker() {
  const [progress, setProgress] = useState(0);

  // Calculate progress from localStorage checklist
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("checklist")) || {};
    let total = 0;
    let done = 0;

    Object.values(saved).forEach((month) => {
      Object.values(month).forEach((checked) => {
        total += 1;
        if (checked) done += 1;
      });
    });

    setProgress(total === 0 ? 0 : Math.round((done / total) * 100));
  }, []);

  // Listen for storage changes (when Checklist updates)
  useEffect(() => {
    const handleStorage = () => {
      const saved = JSON.parse(localStorage.getItem("checklist")) || {};
      let total = 0;
      let done = 0;
      Object.values(saved).forEach((month) => {
        Object.values(month).forEach((checked) => {
          total += 1;
          if (checked) done += 1;
        });
      });
      setProgress(total === 0 ? 0 : Math.round((done / total) * 100));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold text-indigo-600 mb-4">📊 Progress Tracker</h2>
      <div className="w-full bg-gray-200 rounded-xl h-6 overflow-hidden">
        <motion.div
          className="bg-indigo-600 h-6"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
      <p className="text-right mt-1 font-semibold text-indigo-700">{progress}% Completed</p>
    </div>
  );
}
