import React, { useEffect, useState } from "react";
import { Bell, Eye, EyeOff } from "lucide-react";
import Sidebar from "../../components/Sidebar/Sidebar";

// STAT CARD COMPONENT
function StatCard({ title, value, bgColor = "bg-white", textColor = "text-gray-900", maskColor = "text-gray-400" }) {
  const [show, setShow] = useState(false);

  return (
    <div className={`p-5 rounded-2xl shadow-md ${bgColor} border flex items-center justify-between`}>
      <div>
        <p className={`text-xs ${textColor === "text-white" ? "text-gray-200" : "text-gray-500"}`}>{title}</p>
        <h2 className={`text-2xl md:text-3xl font-bold mt-2 ${textColor}`}>
          {show ? value : <span className={maskColor}>****</span>}
        </h2>
      </div>
      <button
        onClick={() => setShow(!show)}
        className={`p-2 rounded-full ${bgColor === "bg-blue-800" ? "bg-blue-700 hover:bg-blue-600" : "bg-gray-100 hover:bg-gray-200"} transition`}
      >
        {show ? <EyeOff size={20} className={textColor} /> : <Eye size={20} className={textColor} />}
      </button>
    </div>
  );
}

// PLAN CARD COMPONENT
function PlanCard({ title, desc, amount, variant = "blue" }) {
  const [show, setShow] = useState(false);

  const colorMap = {
    blue: "from-blue-200 to-blue-50",
    purple: "from-purple-200 to-purple-50",
    yellow: "from-yellow-100 to-yellow-50",
  };
  const gradient = colorMap[variant] || colorMap.blue;

  return (
    <div
      className={`relative rounded-2xl p-5 bg-linear-to-br ${gradient} border cursor-pointer flex flex-col`}
    >
      {show && (
        <span className="absolute top-3 right-4 bg-white text-gray-800 text-xs px-3 py-1 rounded-full shadow">
          {amount}
        </span>
      )}

      <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>
      <p className="text-sm text-gray-700 mb-4">{desc}</p>

      <div className="mt-auto flex justify-end items-center gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
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

// MAIN DASHBOARD
export default function SavingsDashboard() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData({
      totalSavings: "₦208,000",
      earnings: "₦18,000",
      plans: [
        {
          title: "SureWallet",
          desc: "Tap once to save a percentage of your earnings instantly.",
          amount: "₦100,500",
          variant: "blue",
        },
        {
          title: "Target Saving",
          desc: "Create a savings target and track progress.",
          amount: "₦100,500",
          variant: "yellow",
        },
        {
          title: "Group Saving",
          desc: "Save together, grow together.",
          amount: "₦100,500",
          variant: "purple",
        },
      ],
      activities: [
        { title: "Savings Credited", time: "2 hours ago", amount: "₦3,500" },
        { title: "Withdrawal", time: "1 day ago", amount: "-₦5,000" },
      ],
      learning: ["Financial tips", "Saving goals"],
    });
    setLoading(false);
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      <div
        className={`flex-1 p-6 transition-all duration-300 ${
          isOpen ? "ml-64" : "ml-16"
        }`}
      >
        <div className="flex justify-end items-center gap-4 mb-6">
          <Bell size={26} className="text-gray-700 cursor-pointer" />
          <div className="w-10 h-10 rounded-full bg-indigo-700 text-white flex items-center justify-center font-bold">
            A
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <StatCard
            title="Total Savings"
            value={data.totalSavings}
            bgColor="bg-blue-800"
            textColor="text-white"
            maskColor="text-blue-300"
          />
          <StatCard
            title="Earnings"
            value={data.earnings}
          />
        </div>

        <h2 className="text-xl font-semibold mb-4">My Saving Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {data.plans.map((p, idx) => (
            <PlanCard key={idx} {...p} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
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

          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="text-lg font-semibold mb-4">Learning Hub</h3>
            <div className="space-y-3">
              {data.learning.map((l, i) => (
                <button
                  key={i}
                  className="w-full text-left border rounded-xl p-3 hover:bg-gray-100"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
