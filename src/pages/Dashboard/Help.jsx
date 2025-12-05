// src/pages/Help/Help.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { HelpCircle } from "lucide-react";

export default function Help() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = isSidebarOpen ? 256 : 64;

  // Example FAQ or support topics
  const faqs = [
    { q: "How do I reset my password?", a: "Go to the Reset Password page from the login screen and follow the steps." },
    { q: "How can I create a savings target?", a: "Use the Create Target quick action on your dashboard to set a new target." },
    { q: "Where do I see my transactions?", a: "Visit the Transactions page from the sidebar to view your history." },
  ];

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="shrink-0 transition-all duration-300" style={{ width: sidebarWidth }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <main className="flex-1 p-10 transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <HelpCircle size={28} className="text-indigo-700" />
          <h1 className="text-2xl font-bold">Help & Support</h1>
        </div>

        <p className="text-gray-600 mb-8">
          Need assistance? Check the FAQs below or contact support.
        </p>

        <div className="space-y-6">
          {faqs.map((f, i) => (
            <div key={i} className="bg-white rounded-2xl shadow p-6">
              <h3 className="font-semibold mb-2">{f.q}</h3>
              <p className="text-gray-700">{f.a}</p>
            </div>
          ))}
        </div>

        {/* Optional: contact form or live chat link */}
        {/* <div className="mt-10">…contact form…</div> */}
      </main>
    </div>
  );
}
