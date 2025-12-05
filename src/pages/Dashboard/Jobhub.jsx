// src/pages/JobHub/JobHub.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Briefcase } from "lucide-react";

export default function JobHub() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = isSidebarOpen ? 256 : 64;

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="shrink-0 transition-all duration-300" style={{ width: sidebarWidth }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* Main content */}
      <main className="flex-1 p-10 transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <Briefcase size={28} className="text-indigo-700" />
          <h1 className="text-2xl font-bold">Job Hub</h1>
        </div>

        <p className="text-gray-600 mb-8">
          Browse and manage job-related savings or opportunities here.
        </p>

        {/* Example grid of job cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
              <div>
                <h2 className="text-lg font-semibold mb-2">Job Opportunity #{i}</h2>
                <p className="text-sm text-gray-500 mb-4">
                  Brief description of the job or savings opportunity.
                </p>
              </div>
              <button
                className="mt-4 bg-indigo-700 text-white py-2 px-4 rounded-xl hover:bg-indigo-800 transition"
              >
                View details
              </button>
            </div>
          ))}
        </div>

        {/* Optional: if you have filters or actions */}
        {/* <div className="mt-10">…filters or CTA…</div> */}
      </main>
    </div>
  );
}
