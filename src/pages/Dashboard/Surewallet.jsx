import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Eye, EyeOff, Bell, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [showTotalSavings, setShowTotalSavings] = useState(false);
  const [totalSavings, setTotalSavings] = useState(0);

  const navigate = useNavigate();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const sidebarWidth = isSidebarOpen ? 256 : 64;

  // Fetch Dashboard Data
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch("https://suresave.pythonanywhere.com/api/v1/dashboardView/", {
      method: "GET",
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.dashboard) {
          setTotalSavings(data.dashboard.total_savings);
        }
      })
      .catch((err) => console.error(err));
  }, []);

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
          activePage="dashboard"
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

        {/* Header */}
        <h1 className="text-4xl font-bold mb-8">SURE WALLET</h1>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* TOTAL SAVINGS CARD */}
          <div className="relative bg-blue-800 text-white rounded-2xl shadow-lg p-6 md:p-8 lg:p-10">

            {/* QUICK SAVE container — top-right */}
            <div
              onClick={() => navigate("/Quicksave")}
              className="absolute top-4 right-4 flex items-center gap-1 cursor-pointer bg-gray-300 text-black px-3 py-1 rounded-full shadow hover:scale-105 transition"
            >
              <span className="text-base font-bold">+</span>
              <span className="text-sm">Quick Save</span>
            </div>

            {/* BALANCE SECTION */}
            <div className="mt-10 mb-6">
              <h3 className="text-lg">SureWallet Balance</h3>
              <div className="flex items-center gap-2 mt-1 mb-10">
                <p className="text-3xl font-bold">
                  {showTotalSavings
                    ? `₦${totalSavings.toLocaleString()}`
                    : "******"}
                </p>
                <button
                  onClick={() => setShowTotalSavings(!showTotalSavings)}
                  className="cursor-pointer"
                >
                  {showTotalSavings ? <EyeOff size={26} /> : <Eye size={26} />}
                </button>
              </div>
            </div>

            {/* AUTO SAVE container — bottom-left */}
            <div
              onClick={() => navigate("/auto-save")}
              className="absolute bottom-4 left-4 flex items-center gap-1 cursor-pointer bg-gray-300 text-black px-3 py-1 rounded-full shadow hover:scale-105 transition"
            >
              <span className="text-base font-bold">+</span>
              <span className="text-sm">Auto Save</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <button
            onClick={() => navigate("/Quicksave")}
            className="bg-gray-200 p-6 rounded-xl font-semibold cursor-pointer"
          >
            + Quick Save
          </button>

          <button
            onClick={() => navigate("/group-save")}
            className="bg-yellow-100 p-6 rounded-xl font-semibold cursor-pointer"
          >
            Withdraw
          </button>

          <button
            onClick={() => navigate("/create-target")}
            className="bg-pink-100 p-6 rounded-xl font-semibold cursor-pointer"
          >
            Create Target
          </button>

          <button
            onClick={() => navigate("/auto-save")}
            className="bg-blue-100 p-6 rounded-xl font-semibold cursor-pointer"
          >
            Enable Auto Save
          </button>
        </div>

        {/* Recent Activities + Learning Hub */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Recent Activities */}
          <div>
            <h3 className="font-bold text-lg mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 shadow flex justify-between"
                >
                  <div>
                    <p className="font-semibold">Savings Credited</p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                  </div>
                  <p className="text-lg font-bold">₦3,500</p>
                </div>
              ))}
            </div>
          </div>

          {/* Learning Hub */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-4">Savings Goal</h3>
              <p className="mb-2">New Sewing Machine</p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-1/3"></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">
                ₦45,000 / ₦120,000
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-4">Learning Hub</h3>
              <p className="text-gray-600">Financial tips</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
