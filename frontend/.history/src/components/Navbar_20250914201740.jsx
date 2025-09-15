import { Menu } from "lucide-react"; // npm install lucide-react

export default function Navbar({ user, toggleSidebar }) {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Hamburger on mobile */}
      <button
        className="md:hidden p-2 rounded hover:bg-gray-200"
        onClick={toggleSidebar}
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      <h2 className="text-xl font-semibold text-gray-800">Welcome, {user}</h2>
      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}
