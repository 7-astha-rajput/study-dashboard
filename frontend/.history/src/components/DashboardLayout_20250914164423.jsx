import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function DashboardLayout({ children, user = "Astha" }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        <Navbar user={user} />
        <main className="p-6 bg-gray-100 flex-1">{children}</main>
      </div>
    </div>
  );
}
