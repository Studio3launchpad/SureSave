import React, { useEffect, useState } from "react";
import {
  Bell,
  Home,
  PiggyBank,
  Briefcase,
  HelpCircle,
  Settings,
  User,
  X,
  MoreVertical,
  Eye,
  EyeOff,
} from "lucide-react";
import logo from "../assets/images/logo.png";

// StatCard with eye toggle
function StatCard({ title, value }) {
  const [show, setShow] = useState(false);

  return (
    <div className="p-5 rounded-2xl shadow-md bg-white border flex items-center justify-between">
      <div>
        <p className="text-xs text-gray-500">{title}</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          {show ? value : "****"}
        </h2>
      </div>
      <button
        onClick={() => setShow(!show)}
        className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );
}

// PlanCard with badge toggle
function PlanCard({ title, desc, amount, variant = "blue" }) {
  const [show, setShow] = useState(false);

  const colorMap = {
    blue: "from-blue-200 to-blue-50",
    purple: "from-purple-200 to-purple-50",
    yellow: "from-yellow-100 to-yellow-50",
    pink: "from-pink-100 to-pink-50",
  };
  const gradient = colorMap[variant] || colorMap.blue;

  return (
    <div
      className={`relative rounded-2xl p-5 bg-gradient-to-br ${gradient} border cursor-pointer flex flex-col`}
      onClick={() => alert(`Navigate to ${title} page`)}
    >
      {/* Amount badge */}
      {show && (
        <span className="absolute top-3 right-4 bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow">
          {amount}
        </span>
      )}

      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{desc}</p>

      {/* Right-aligned controls */}
      <div className="mt-auto flex justify-end items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent card click
            setShow(!show);
          }}
          className="text-sm font-medium text-indigo-700"
        >
          View Savings →
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShow(!show);
          }}
          className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition"
        >
          {show ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>
    </div>
  );
}

// Sidebar
function Sidebar({ open, onClose }) {
  const links = [
    { name: "Home", icon: <Home size={20} /> },
    { name: "Savings", icon: <PiggyBank size={20} /> },
    { name: "Job Hub", icon: <Briefcase size={20} /> },
    { name: "Help", icon: <HelpCircle size={20} /> },
  ];

  return (
    <aside
      className={`fixed top-0 left-0 h-full w-64 bg-white border-r p-5 flex flex-col z-50 transform transition-transform duration-300 ${
        open ? "translate-x-0" : "-translate-x-64"
      }`}
    >
      <div className="flex items-center gap-3 mb-10">
        <img
          src={logo}
          alt="Sure Save Logo"
          className="w-32 h-32 md:w-36 md:h-36 object-contain"
        />
        <button onClick={onClose} className="ml-auto md:hidden">
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-col gap-3 flex-grow">
        {links.map((link, i) => (
          <button
            key={i}
            className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer"
            onClick={() => alert(`Navigate to ${link.name} page`)}
          >
            {link.icon} {link.name}
          </button>
        ))}
      </div>

      <div className="mt-auto flex flex-col gap-3 border-t pt-5">
        <button className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer">
          <Settings size={20} /> Settings
        </button>
        <button className="flex items-center gap-3 p-3 rounded-xl text-gray-700 hover:bg-gray-100 cursor-pointer">
          <User size={20} /> Account
        </button>
      </div>
    </aside>
  );
}

// Main Dashboard
export default function SavingsDashboard() {
  const [sideOpen, setSideOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function fetchDashboard() {
      setLoading(true);
      try {
        const res = await fetch("/api/dashboard");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setData(json);
      } catch {
        if (mounted) {
          setData({
            totalSavings: "₦208,000",
            earnings: "₦18,000",
            plans: [
              {
                title: "SureWallet",
                desc: "Tap once to save a percentage of your earnings instantly. Fast, simple, consistent.",
                amount: "₦100,500",
                variant: "blue",
              },
              {
                title: "Target Saving",
                desc: "Create a savings target and watch your progress grow.",
                amount: "₦100,500",
                variant: "yellow",
              },
              {
                title: "Group Saving",
                desc: "Save together, grow together.",
                amount: "₦100,500",
                variant: "purple",
              },
              {
                title: "Fixed Saving",
                desc: "Lock a portion of your money and earn higher rewards.",
                amount: "₦100,500",
                variant: "blue",
              },
            ],
            activities: [
              { title: "Savings Credited", time: "2 hours ago", amount: "₦3,500" },
              { title: "Withdrawal", time: "1 day ago", amount: "-₦5,000" },
            ],
            learning: ["Financial tips", "Saving goals"],
          });
        }
      } finally {
        if (mounted) setLoading(false);
      }
    }
    fetchDashboard();
    return () => (mounted = false);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <Sidebar open={sideOpen} onClose={() => setSideOpen(false)} />

      <div
        className="flex-1 p-6 transition-all duration-300"
        style={{ marginLeft: sideOpen ? "16rem" : "0" }}
      >
        {/* Toggle & Header */}
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <button
              onClick={() => setSideOpen(!sideOpen)}
              className="flex items-center justify-center p-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition-all"
            >
              <MoreVertical size={24} />
            </button>
          </div>

          <div className="flex justify-end flex-1 items-center gap-4">
            <Bell size={26} className="text-gray-700 cursor-pointer" />
            <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <StatCard title="Total Savings" value={data.totalSavings} />
            <StatCard title="Earnings" value={data.earnings} />
          </div>

          {/* Plans grid */}
          <h2 className="text-xl font-semibold mb-4">My Saving Plan</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {data.plans.map((p, idx) => (
              <PlanCard
                key={idx}
                title={p.title}
                desc={p.desc}
                amount={p.amount}
                variant={p.variant}
              />
            ))}
          </div>

          {/* Bottom two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
              <div>
                {data.activities.map((a, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center py-3 border-b last:border-b-0"
                  >
                    <div>
                      <p className="font-medium text-gray-800">{a.title}</p>
                      <p className="text-xs text-gray-500">{a.time}</p>
                    </div>
                    <div className="text-yellow-600 font-semibold">{a.amount}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow p-5">
              <h3 className="text-lg font-semibold mb-4">Learning Hub</h3>
              <div className="space-y-3">
                {data.learning.map((l, i) => (
                  <button
                    key={i}
                    className="w-full text-left border rounded-xl p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    {l}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
