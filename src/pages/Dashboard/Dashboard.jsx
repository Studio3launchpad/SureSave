import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Eye, EyeOff, Bell } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [showTotalSavings, setShowTotalSavings] = useState(false);
  const [showEarnings, setShowEarnings] = useState(false);

  // USER STATES
  const [userName, setUserName] = useState("");
  const [greeting, setGreeting] = useState("");

  // DASHBOARD STATS
  const [totalSavings, setTotalSavings] = useState(0);
  const [earnings, setEarnings] = useState(0);
  const [jobSavings, setJobSavings] = useState(0);
  const [goalSavings, setGoalSavings] = useState(0);

  const navigate = useNavigate();

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✔️ FIXED GREETING LOGIC
  useEffect(() => {
    const hour = new Date().getHours();

    if (hour >= 0 && hour < 12) {
      setGreeting("Good morning");
    } else if (hour >= 12 && hour < 16) {
      setGreeting("Good afternoon");
    } else {
      setGreeting("Good evening");
    }
  }, []);

  // ✔️ FETCH DASHBOARD DATA + USER NAME
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (!token) return;

    fetch("https://suresave.pythonanywhere.com/api/v1/dashboardView/", {
      method: "GET",
      headers: { Authorization: `Token ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch dashboard");
        return res.json();
      })
      .then((data) => {
        // ✔️ SET USER NAME
        if (data?.user?.email) {
          setUserName(data.user.email);
        }

        // ✔️ SET DASHBOARD NUMBERS
        if (data?.dashboard) {
          setTotalSavings(data.dashboard.total_savings);
          setEarnings(data.dashboard.earnings);
          setJobSavings(data.dashboard.job_savings);
          setGoalSavings(data.dashboard.goal_savings);
        }
      })
      .catch((err) => console.error("Dashboard fetch error:", err));
  }, []);

  const sidebarWidth = isSidebarOpen ? 256 : 64;

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* SIDEBAR */}
      <div className="shrink-0 transition-all duration-300" style={{ width: sidebarWidth }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      {/* MAIN CONTENT */}
      <main className="flex-1 transition-all duration-300 p-10">
        {/* TOP RIGHT */}
        <div className="flex justify-end items-center gap-4 mb-6">
          <Bell size={26} className="text-gray-700 cursor-pointer" />
          <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold cursor-pointer">
            {userName?.charAt(0)?.toUpperCase()}
          </div>
        </div>

        {/* GREETING */}
        <h2 className="text-3xl font-bold mb-2">
          {greeting}, {userName} 👋
        </h2>
        <p className="text-gray-600 mb-8">Here’s your savings progress today.</p>

        {/* --- STATS SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
          {/* TOTAL SAVINGS */}
          <div className="bg-blue-800 text-white p-6 rounded-2xl shadow-lg flex flex-col justify-between">
            <div>
              <h3 className="text-lg">Total Savings</h3>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-3xl font-bold">
                  {showTotalSavings ? `₦${totalSavings.toLocaleString()}` : "******"}
                </p>
                <button onClick={() => setShowTotalSavings(!showTotalSavings)} className="cursor-pointer">
                  {showTotalSavings ? <EyeOff size={26} /> : <Eye size={26} />}
                </button>
              </div>
            </div>
            <div className="flex justify-end mt-4">
              <Link to="/savings" className="underline text-sm text-white">
                View Savings
              </Link>
            </div>
          </div>

          {/* EARNINGS */}
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-between">
            <div>
              <h3 className="text-lg">Earnings</h3>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-3xl font-bold">
                  {showEarnings ? `₦${earnings.toLocaleString()}` : "******"}
                </p>
                <button onClick={() => setShowEarnings(!showEarnings)} className="cursor-pointer">
                  {showEarnings ? <EyeOff size={26} /> : <Eye size={26} />}
                </button>
              </div>
            </div>
          </div>

          {/* JOB SAVINGS */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg">Jobs Savings</h3>
            <p className="text-3xl font-bold mt-2">{jobSavings}</p>
          </div>

          {/* GOAL SAVING */}
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg">Goal Saving</h3>
            <p className="text-3xl font-bold mt-2">{goalSavings}</p>
          </div>
        </div>

        {/* --- QUICK ACTIONS --- */}
        <h3 className="font-bold text-lg mb-4">Quick Action</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <button onClick={() => navigate("/quick-save")} className="bg-gray-200 p-6 rounded-xl font-semibold cursor-pointer">
            + Quick Save
          </button>
          <button onClick={() => navigate("/group-save")} className="bg-yellow-100 p-6 rounded-xl font-semibold cursor-pointer">
            Group Save
          </button>
          <button onClick={() => navigate("/create-target")} className="bg-pink-100 p-6 rounded-xl font-semibold cursor-pointer">
            Create Target
          </button>
          <button onClick={() => navigate("/auto-save")} className="bg-blue-100 p-6 rounded-xl font-semibold cursor-pointer">
            Enable Auto Save
          </button>
        </div>

        {/* --- RECENT ACTIVITIES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="font-bold text-lg mb-4">Recent Activities</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-xl p-4 shadow flex justify-between">
                  <div>
                    <p className="font-semibold">Savings Credited</p>
                    <p className="text-gray-500 text-sm">2 hours ago</p>
                  </div>
                  <p className="text-lg font-bold">₦3,500</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-lg mb-4">Savings Goal</h3>
              <p className="mb-2">New Sewing Machine</p>
              <div className="h-2 bg-gray-200 rounded-full">
                <div className="h-2 bg-blue-500 rounded-full w-1/3"></div>
              </div>
              <p className="text-sm text-gray-600 mt-2">₦45,000 / ₦120,000</p>
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
