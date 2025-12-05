// src/pages/Settings/Settings.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Settingspage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionType, setActionType] = useState(""); // 'logout' or 'delete'
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = isSidebarOpen ? 256 : 64;

  const openModal = (type) => {
    setActionType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setPassword("");
  };

  const handleAction = async () => {
    if (!password) return alert("Please enter your password");
    setLoading(true);
    const token = localStorage.getItem("accessToken");

    let url = "";
    if (actionType === "logout") url = "https://suresave.pythonanywhere.com/dj-rest-auth/logout/";
    else if (actionType === "delete") url = "https://suresave.pythonanywhere.com/dj-rest-auth/delete/";

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Token ${token}`,
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.detail || "Action failed. Check your password.");
        setLoading(false);
        return;
      }

      // Clear token and navigate to login if logout or delete
      localStorage.removeItem("accessToken");
      navigate("/login");
    } catch (err) {
      console.error("Action error:", err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
      closeModal();
    }
  };

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="shrink-0 transition-all duration-300" style={{ width: sidebarWidth }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <main className="flex-1 p-10 transition-all duration-300 flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <Settings size={28} className="text-indigo-700" />
            <h1 className="text-2xl font-bold">Settings</h1>
          </div>

          <p className="text-gray-600 mb-8">
            Adjust your preferences below.
          </p>

          <div className="space-y-6">
            {/* Notification toggle */}
            <div className="bg-white rounded-2xl shadow p-6 flex items-center justify-between">
              <div>
                <h3 className="font-semibold mb-1">Notifications</h3>
                <p className="text-sm text-gray-500">Receive alerts for account activity.</p>
              </div>
              <label className="inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notificationsEnabled}
                  onChange={() => setNotificationsEnabled(!notificationsEnabled)}
                  className="form-checkbox h-5 w-5 text-indigo-600"
                />
              </label>
            </div>
          </div>
        </div>

        {/* Logout & Delete Buttons */}
        <div className="space-y-4 mb-4">
          <button
            onClick={() => openModal("logout")}
            className="w-full bg-red-600 text-white p-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Logout
          </button>

          <button
            onClick={() => openModal("delete")}
            className="w-full bg-gray-800 text-white p-3 rounded-xl font-semibold hover:bg-gray-900 transition"
          >
            Delete Account
          </button>
        </div>

        {/* Modal for password confirmation */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-6 w-96">
              <h3 className="text-lg font-bold mb-4">
                {actionType === "logout" ? "Confirm Logout" : "Delete Account"}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Enter your password to {actionType}.
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Your password"
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="flex justify-end gap-3">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAction}
                  disabled={loading}
                  className={`px-4 py-2 rounded-lg text-white ${
                    actionType === "logout" ? "bg-red-600 hover:bg-red-700" : "bg-gray-800 hover:bg-gray-900"
                  } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Processing..." : actionType === "logout" ? "Logout" : "Delete"}
                </button>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
