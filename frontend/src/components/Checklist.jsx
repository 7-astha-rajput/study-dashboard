// src/components/Checklist.jsx
import React, { useState, useEffect } from "react";

/* Roadmap data */
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

  /* Build default shape: { month: { taskText: false, ... } } */
  const buildDefaultTasks = () => {
    const out = {};
    Object.entries(roadmap).forEach(([month, weeks]) => {
      out[month] = {};
      weeks.forEach((t) => (out[month][t] = false));
    });
    return out;
  };

  /* Load + merge saved progress with defaults */
  useEffect(() => {
    const defaults = buildDefaultTasks();
    try {
      const raw = localStorage.getItem("checklist");
      if (!raw) {
        setTasks(defaults);
        return;
      }
      const saved = JSON.parse(raw);
      // merge: keep saved true values, but ensure all keys exist
      const merged = { ...defaults };
      Object.entries(defaults).forEach(([month]) => {
        merged[month] = { ...defaults[month], ...(saved[month] || {}) };
      });
      setTasks(merged);
    } catch (err) {
      console.warn("Failed to parse checklist from localStorage:", err);
      setTasks(buildDefaultTasks());
    }
  }, []);

  /* Save whenever tasks change */
  useEffect(() => {
    try {
      localStorage.setItem("checklist", JSON.stringify(tasks));
    } catch (err) {
      console.warn("Failed to save checklist to localStorage:", err);
    }
  }, [tasks]);

  /* Toggle a task */
  const toggleTask = (month, task) => {
    console.log("toggleTask", month, task); // debug
    setTasks((prev) => {
      const copy = { ...prev };
      copy[month] = { ...copy[month], [task]: !copy[month]?.[task] };
      return copy;
    });
  };

  /* Expand/collapse month */
  const toggleMonth = (month) => {
    console.log("toggleMonth", month); // debug
    setOpenMonths((prev) => ({ ...prev, [month]: !prev[month] }));
  };

  /* Progress calculation */
  const total = Object.values(roadmap).flat().length;
  // count trues in tasks safely (tasks may be empty while loading)
  let completed = 0;
  Object.values(tasks).forEach((month) => {
    if (!month) return;
    Object.values(month).forEach((v) => {
      if (v) completed += 1;
    });
  });
  const percent = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="p-6">
      <h2 style={{ fontSize: 22, marginBottom: 12 }}>📅 Study Roadmap</h2>

      <div style={{ marginBottom: 12 }}>
        <div style={{ width: "100%", background: "#eee", borderRadius: 6, height: 12 }}>
          <div
            style={{
              width: `${percent}%`,
              height: "100%",
              background: "#10b981",
              borderRadius: 6,
              transition: "width 300ms ease",
            }}
          />
        </div>
        <div style={{ marginTop: 8 }}>{percent}% Completed ({completed}/{total})</div>
      </div>

      {Object.entries(roadmap).map(([month, weeks]) => (
        <div key={month} style={{ marginBottom: 14 }}>
          <button
            onClick={() => toggleMonth(month)}
            style={{
              width: "100%",
              textAlign: "left",
              fontWeight: 600,
              padding: "6px 8px",
              background: "#f3f4f6",
              border: "1px solid #d1d5db",
              borderRadius: 6,
              cursor: "pointer",
            }}
          >
            {month}
          </button>

          {openMonths[month] && (
            <div style={{ marginLeft: 16, marginTop: 8 }}>
              {weeks.map((task) => (
                <label key={task} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                  <input
                    type="checkbox"
                    checked={!!tasks[month]?.[task]}
                    onChange={() => toggleTask(month, task)}
                    style={{ width: 18, height: 18 }}
                  />
                  <span style={{ textDecoration: tasks[month]?.[task] ? "line-through" : "none", color: tasks[month]?.[task] ? "#6b7280" : "#111827" }}>
                    {task}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
