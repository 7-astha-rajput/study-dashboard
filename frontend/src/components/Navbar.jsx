export default function Navbar({ user }) {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold text-gray-800">Welcome, {user}</h2>
      <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
        Logout
      </button>
    </div>
  );
}
