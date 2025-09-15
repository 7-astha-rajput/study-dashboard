// App.js
import React, { useState } from "react";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Components for each section
  const renderSection = () => {
    switch (activeSection) {
      case "checklist":
        return <h2>📝 Checklist Section</h2>;
      case "pomodoro":
        return <h2>⏱ Pomodoro Timer Section</h2>;
      case "music":
        return <h2>🎵 Music Player Section</h2>;
      case "progress":
        return <h2>📊 Progress Tracker Section</h2>;
      default:
        return (
          <>
            <h1>Your Study Dashboard</h1>
            <p>Select a section from the sidebar to get started!</p>
          </>
        );
    }
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <h2>Study Dashboard</h2>
        <nav>
          <button onClick={() => setActiveSection("checklist")}>Checklist</button>
          <button onClick={() => setActiveSection("pomodoro")}>Pomodoro</button>
          <button onClick={() => setActiveSection("music")}>Music</button>
          <button onClick={() => setActiveSection("progress")}>Progress</button>
        </nav>
      </aside>

      {/* Main */}
      <main className="main">
        <header>
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </button>
          <h3>Welcome, Astha</h3>
          <button className="logout">Logout</button>
        </header>
        <section>{renderSection()}</section>
      </main>
    </div>
  );
}

export default App;
