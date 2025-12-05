// src/pages/Account/Account.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { User } from "lucide-react";

export default function Account() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = isSidebarOpen ? 256 : 64;

  // Placeholder user info; replace with API data
  const [userInfo, setUserInfo] = useState({
    name: "User Name",
    email: "user@example.com",
    phone: "08000000000",
  });

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="shrink-0 transition-all duration-300" style={{ width: sidebarWidth }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <main className="flex-1 p-10 transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <User size={28} className="text-indigo-700" />
          <h1 className="text-2xl font-bold">Account</h1>
        </div>

        <p className="text-gray-600 mb-8">
          View and update your account information.
        </p>

        <div className="bg-white rounded-2xl shadow p-6 space-y-6 max-w-md">
          <div>
            <h3 className="font-semibold mb-1">Name</h3>
            <p className="text-gray-700">{userInfo.name}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-gray-700">{userInfo.email}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Phone</h3>
            <p className="text-gray-700">{userInfo.phone}</p>
          </div>

          {/* Example: edit button or link */}
          <button
            className="mt-4 bg-indigo-700 text-white py-2 px-4 rounded-xl hover:bg-indigo-800 transition"
          >
            Edit profile
          </button>
        </div>
      </main>
    </div>
  );
}
