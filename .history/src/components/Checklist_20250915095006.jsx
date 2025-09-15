import React, { useState } from "react";

function Checklist() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, done: false }]);
      setInput("");
    }
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };

  return (
    <div>
      <h2>📝 Checklist</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="border px-2 py-1"
      />
      <button onClick={addTask} className="ml-2 px-2 py-1 bg-blue-500 text-white rounded">
        Add
      </button>
      <ul className="mt-3">
        {tasks.map((task, i) => (
          <li
            key={i}
            onClick={() => toggleTask(i)}
            style={{ textDecoration: task.done ? "line-through" : "none", cursor: "pointer" }}
          >
            {task.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Checklist;
