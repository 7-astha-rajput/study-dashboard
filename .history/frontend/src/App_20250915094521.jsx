// App.js (React)
import React, { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Study Dashboard</h2>
        <nav>
          <a href="#checklist">Checklist</a>
          <a href="#pomodoro">Pomodoro</a>
          <a href="#music">Music</a>
          <a href="#progress">Progress</a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main">
        <header>
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
          <h3>Welcome, Astha</h3>
          <button className="logout">Logout</button>
        </header>
        <section>
          <h1>Your Study Dashboard</h1>
          <p>Select a section from the sidebar to get started!</p>
        </section>
      </main>
    </div>
  );
}

export default App;
