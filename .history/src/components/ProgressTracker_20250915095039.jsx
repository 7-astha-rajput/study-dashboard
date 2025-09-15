import React, { useState } from "react";

function Progress() {
  const [progress, setProgress] = useState(40); // example %

  return (
    <div>
      <h2>📊 Progress Tracker</h2>
      <div className="w-full bg-gray-200 rounded h-6 mt-2">
        <div
          className="bg-blue-500 h-6 rounded text-white text-center"
          style={{ width: `${progress}%` }}
        >
          {progress}%
        </div>
      </div>
      <button onClick={() => setProgress(progress + 10)} className="mt-2 px-2 py-1 bg-green-500 text-white rounded">
        Increase
      </button>
    </div>
  );
}

export default Progress;
