export default function Progress({ tasks }) {
  // Flatten tasks across all months
  const allTasks = Object.values(tasks).flatMap((month) =>
    Object.values(month)
  );

  const total = allTasks.length;
  const completed = allTasks.filter((done) => done).length;
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div>
      <h2 className="text-xl font-bold text-green-600 mb-4">📊 Progress Tracker</h2>
      <p>
        {completed} of {total} tasks completed ({percent}%)
      </p>
      <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
        <div
          className="bg-green-500 h-4 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
