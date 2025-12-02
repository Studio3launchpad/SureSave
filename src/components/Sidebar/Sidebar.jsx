import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  PiggyBank,
  Briefcase,
  HelpCircle,
  Settings,
  User,
  FileText,
  MoreVertical,
} from "lucide-react";
import Logo from "../../assets/images/logo.png";

export default function Sidebar({ isOpen, toggleSidebar }) {
  const location = useLocation();

  const menu = [
    { name: "Home", icon: <Home size={20} />, path: "/dashboard" },
    { name: "Savings", icon: <PiggyBank size={20} />, path: "/savings" },
    { name: "Job Hub", icon: <Briefcase size={20} />, path: "/jobs" },
    { name: "Transaction", icon: <FileText size={20} />, path: "/transactions" },
    { name: "Help", icon: <HelpCircle size={20} />, path: "/help" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-[#F9FAFF] shadow-lg flex flex-col transition-all duration-300 z-50
        ${isOpen ? "w-64" : "w-16"}
      `}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between p-4">
        {isOpen && <img src={Logo} alt="Logo" className="w-32 object-contain" />}
        <button onClick={toggleSidebar} className="p-2 rounded hover:bg-gray-100">
          <MoreVertical size={20} />
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 flex flex-col mt-4 overflow-hidden">
        {menu.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={`
              relative flex items-center gap-3 p-3 rounded-lg transition duration-200
              ${isOpen ? "" : "justify-center"}
              ${isActive(item.path) ? "bg-indigo-100 text-indigo-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}
            `}
          >
            {/* Active indicator bar */}
            {isActive(item.path) && (
              <span className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-r-lg"></span>
            )}

            {item.icon}
            {isOpen && <span>{item.name}</span>}
          </Link>
        ))}
      </div>

      {/* Bottom Items */}
      <div className="flex flex-col gap-3 px-2 pb-4 mt-auto pt-4 overflow-hidden">
        <Link
          to="/settings"
          className={`
            relative flex items-center gap-3 p-3 rounded-lg transition duration-200
            ${isOpen ? "" : "justify-center"}
            ${isActive("/settings") ? "bg-indigo-100 text-indigo-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}
          `}
        >
          {isActive("/settings") && (
            <span className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-r-lg"></span>
          )}
          <Settings size={20} />
          {isOpen && <span>Setting</span>}
        </Link>

        <Link
          to="/account"
          className={`
            relative flex items-center gap-3 p-3 rounded-lg transition duration-200
            ${isOpen ? "" : "justify-center"}
            ${isActive("/account") ? "bg-indigo-100 text-indigo-700 font-semibold" : "text-gray-700 hover:bg-gray-100"}
          `}
        >
          {isActive("/account") && (
            <span className="absolute left-0 top-0 h-full w-1 bg-indigo-600 rounded-r-lg"></span>
          )}
          <User size={20} />
          {isOpen && <span>Account</span>}
        </Link>
      </div>
    </aside>
  );
}
