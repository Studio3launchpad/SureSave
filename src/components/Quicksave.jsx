import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar";
import { ArrowLeft, Bell, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function QuickSave() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();
  const sidebarWidth = isSidebarOpen ? 256 : 64;

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className="shrink-0 transition-all duration-300"
        style={{ width: sidebarWidth }}
      >
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          activePage="quick-save"
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 transition-all duration-300 p-10">
        {/* Top Right */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <Bell size={26} className="text-gray-700 cursor-pointer" />
        </div>

        {/* Back Button */}
        <div
          className="flex items-center gap-2 mb-6 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={24} className="text-gray-700" />
          <span className="text-gray-700 font-semibold">Back</span>
        </div>

        {/* Centered Card */}
        <div className="bg-white max-w-2xl mx-auto p-10 rounded-3xl shadow-md">
          <h1 className="text-3xl font-bold text-gray-800 mb-3">
            Select Quick Save Option
          </h1>
          <p className="text-gray-500 mb-8">
            Select how you want want to record saving
          </p>

          {/* Save From Bank */}
          <div
            onClick={() => navigate("/quick-save/bank")}
            className="flex items-center justify-between bg-blue-800 text-white px-5 py-4 rounded-xl cursor-pointer hover:bg-blue-700 transition mb-5"
          >
            <span className="font-medium">Save from Bank</span>
            <ChevronRight size={20} />
          </div>

          {/* Save From Job */}
          <div
            onClick={() => navigate("/quick-save/job")}
            className="flex items-center justify-between bg-gray-100 px-5 py-4 rounded-xl cursor-pointer hover:bg-gray-200 transition"
          >
            <span className="font-medium text-gray-700">Save from Job</span>
            <ChevronRight size={20} className="text-gray-600" />
          </div>
        </div>
      </main>
    </div>
  );
}
