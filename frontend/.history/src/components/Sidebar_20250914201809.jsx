import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const links = [
    { name: "Checklist", to: "/dashboard/checklist" },
    { name: "Pomodoro", to: "/dashboard/pomodoro" },
    { name: "Music", to: "/dashboard/music" },
    { name: "Progress", to: "/dashboard/progress" },
  ];

  return (
    <div className="bg-indigo-700 text-white w-60 min-h-screen p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-bold mb-6">Study Dashboard</h1>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            `p-2 rounded hover:bg-indigo-800 ${isActive ? "bg-indigo-900" : ""}`
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
