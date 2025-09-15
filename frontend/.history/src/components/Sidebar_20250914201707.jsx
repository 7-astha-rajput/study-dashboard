import { NavLink } from "react-router-dom";

export default function Sidebar({ isOpen, toggle }) {
  const links = [
    { name: "Checklist", to: "/dashboard/checklist" },
    { name: "Pomodoro", to: "/dashboard/pomodoro" },
    { name: "Music", to: "/dashboard/music" },
    { name: "Progress", to: "/dashboard/progress" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:translate-x-0 transition-transform duration-200 ease-in-out
      bg-indigo-700 text-white w-60 p-6 flex flex-col gap-4 z-50`}
    >
      <h1 className="text-2xl font-bold mb-6">Study Dashboard</h1>
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.to}
          className={({ isActive }) =>
            `p-2 rounded hover:bg-indigo-800 block ${
              isActive ? "bg-indigo-900" : ""
            }`
          }
          onClick={toggle} // close on mobile after click
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}

