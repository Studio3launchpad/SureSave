// src/pages/Transactions/Transactions.jsx
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { FileText } from "lucide-react";

export default function Transactions() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sidebarWidth = isSidebarOpen ? 256 : 64;

  // Placeholder transaction data
  const [transactions, setTransactions] = useState([
    { id: 1, title: "Savings credited", amount: "₦3,500", date: "2025-12-01 10:12" },
    { id: 2, title: "Withdrawal", amount: "-₦2,000", date: "2025-11-30 15:43" },
    // add more after integrating real API
  ]);

  return (
    <div className="flex h-screen w-screen bg-gray-100">
      {/* Sidebar */}
      <div className="shrink-0 transition-all duration-300" style={{ width: sidebarWidth }}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>

      <main className="flex-1 p-10 transition-all duration-300">
        <div className="flex items-center gap-2 mb-6">
          <FileText size={28} className="text-indigo-700" />
          <h1 className="text-2xl font-bold">Transactions</h1>
        </div>

        <p className="text-gray-600 mb-8">
          All your recent transactions are listed below.
        </p>

        <div className="bg-white rounded-2xl shadow overflow-x-auto">
          <table className="min-w-full table-auto">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">#</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx, idx) => (
                <tr key={tx.id} className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{idx + 1}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{tx.title}</td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm font-medium ${
                      tx.amount.startsWith("-") ? "text-red-600" : "text-green-600"
                    }`}
                  >
                    {tx.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{tx.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Could add pagination or filtering controls here */}
      </main>
    </div>
  );
}
