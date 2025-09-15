import React, { useState } from "react";
import Checklist from "./components/Checklist.jsx";
import Pomodoro from "./components/Pomodoro.jsx";
import Music from "./components/Music.jsx";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const renderSection = () => {
    switch (activeSection) {
      case "checklist":
        return <Checklist />;
      case "pomodoro":
        return <Pomodoro />;
      case "music":
        return <Music />;
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
x        </nav>
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
