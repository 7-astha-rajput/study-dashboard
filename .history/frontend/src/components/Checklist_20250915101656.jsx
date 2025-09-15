import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const roadmap = {
  "October (Month 1: Foundations)": [
    "Week 1: DSA arrays + Linux navigation. Create devops-practice repo.",
    "Week 2: Strings, sorting + shell scripting basics.",
    "Week 3: Recursion problems + start Auth System (login/signup).",
    "Week 4: Review 25–30 problems, push Auth System V1 to GitHub, polish LinkedIn.",
  ],
  "November (Month 2: Consistency Grind)": [
    "Week 5: Hashing problems + Docker intro.",
    "Week 6: Sliding window + Docker containers.",
    "Week 7: DB integration with Auth System.",
    "Week 8: JWT + deploy Auth System V1. Resume V1 ready.",
  ],
  "December (Month 3: Intermediate Grind)": [
    "Week 9: Trees basics + Jenkins setup.",
    "Week 10: Graphs intro + CI/CD pipeline (simple).",
    "Week 11: DP basics + integrate CI/CD into Auth System.",
    "Week 12: Mock interview + push CI/CD project to GitHub.",
  ],
  "January (Month 4: Advanced DevOps + System Design)": [
    "Week 13: Advanced DP + K8s intro.",
    "Week 14: Graph problems + Deployments in K8s.",
    "Week 15: Backtracking + scaling in K8s.",
    "Week 16: Scalable app deployment + Resume V2 ready.",
  ],
  "February (Month 5: Simulation Mode)": [
    "Week 17: Revise Auth System + 3 LeetCode/day.",
    "Week 18: Revise CI/CD project + 3 LeetCode/day.",
    "Week 19: Revise K8s project + 3 LeetCode/day.",
    "Week 20: Resume final + apply to jobs weekly.",
  ],
  "March (Month 6: Execution Mode)": [
    "Week 21: Mixed problems + interviews.",
    "Week 22: Mock system design + real interviews.",
    "Week 23: Apply + follow-up, more interviews.",
    "Week 24: Offers incoming → negotiate salary.",
  ],
};

export default function Checklist() {
  const [tasks, setTasks] = useState({});
  const [openMonths, setOpenMonths] = useState({});

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("checklist");
    if (saved) {
      setTasks(JSON.parse(saved));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("checklist", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (month, task) => {
    setTasks((prev) => ({
      ...prev,
      [month]: {
        ...prev[month],
        [task]: !prev[month]?.[task],
      },
    }));
  };

  const toggleMonth = (month) => {
    setOpenMonths((prev) => ({
      ...prev,
      [month]: !prev[month],
    }));
  };

  // Calculate progress
  const allTasks = Object.values(roadmap).flat();
  const completed = allTasks.filter(
    (task) => Object.values(tasks).flatMap(Object.entries).find(([t, done]) => t === task && done)
  ).length;
  const progress = Math.round((completed / allTasks.length) * 100);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-indigo-600 mb-4">📅 Study Roadmap</h2>
      <p className="mb-2">{progress}% Completed</p>

      {/* Progress bar */}
      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {Object.entries(roadmap).map(([month, weeks]) => (
        <div key={month} className="mb-4">
          <button
            onClick={() => toggleMonth(month)}
            className="w-full text-left font-semibold text-indigo-700 hover:text-indigo-900"
          >
            {month}
          </button>

          {openMonths[month] && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="ml-4 mt-2"
            >
              {weeks.map((task) => (
                <label key={task} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    checked={tasks[month]?.[task] || false}
                    onChange={() => toggleTask(month, task)}
                  />
                  <span className={tasks[month]?.[task] ? "line-through text-gray-500" : ""}>
                    {task}
                  </span>
                </label>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
}
