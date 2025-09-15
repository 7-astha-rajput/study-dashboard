import React from "react";
import Checklist from "./components/Checklist";
import Pomodoro from "./components/Pomodoro";
import MusicPlayer from "./components/Music";
import ProgressTracker from "./components/Progress";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-indigo-700">Study Dashboard</h1>
        <p className="text-gray-700">Stay consistent. No excuses 😏</p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left: Checklist */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-lg p-4">
          <Checklist />
        </div>

        {/* Center: Pomodoro */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-lg p-4 flex flex-col justify-between">
          <Pomodoro />
        </div>

        {/* Right: Music Player */}
        <div className="md:col-span-1 bg-white rounded-2xl shadow-lg p-4">
          <MusicPlayer />
        </div>
      </main>

      {/* Bottom: Progress Tracker */}
      <footer className="mt-6 bg-white rounded-2xl shadow-lg p-4">
        <ProgressTracker />
      </footer>
    </div>
  );
}
