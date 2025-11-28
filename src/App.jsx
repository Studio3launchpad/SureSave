import "./App.css";

import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 space-y-6">
        <h1 className="text-xl font-bold text-blue-600">Suresave</h1>
        <nav className="space-y-4">
          <a
            href="#"
            className="flex items-center space-x-3 text-blue-600 font-semibold"
          >
            Home
          </a>
          <a href="#" className="block">
            Savings
          </a>
          <a href="#" className="block">
            Job Hub
          </a>
          <a href="#" className="block">
            Transaction
          </a>
          <a href="#" className="block">
            Help
          </a>
        </nav>
        <div className="mt-32 space-y-3">
          <a href="#" className="block">
            Setting
          </a>
          <a href="#" className="block">
            Account
          </a>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <h2 className="text-3xl font-bold mb-2">Good evening, Amaka 👋</h2>
        <p className="text-gray-600 mb-8">
          Here’s your savings progress today.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-4 gap-6 mb-10">
          <div className="bg-blue-600 text-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-lg">Total Savings</h3>
            <p className="text-3xl font-bold">₦208,000</p>
            <a href="#" className="underline text-sm">
              View Savings
            </a>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg">Earnings</h3>
            <p className="text-3xl font-bold">₦18,000</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg">Jobs Savings</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-lg">Goal Saving</h3>
            <p className="text-3xl font-bold">12</p>
          </div>
        </div>

        {/* Quick Actions */}
        <h3 className="font-bold text-lg mb-4">Quick Action</h3>
        <div className="grid grid-cols-4 gap-6 mb-12">
          <button className="bg-gray-200 p-6 rounded-xl font-semibold">
            + Quick Save
          </button>
          <button className="bg-yellow-100 p-6 rounded-xl font-semibold">
            Group Save
          </button>
          <button className="bg-pink-100 p-6 rounded-xl font-semibold">
            Create Target
          </button>
          <button className="bg-blue-100 p-6 rounded-xl font-semibold">
            Enable Auto Save
          </button>
        </div>

        <div className="grid grid-cols-2 gap-10">
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
                  <p className="font-bold">₦3,500</p>
                </div>
              ))}
            </div>
          </div>

          {/* Goals + Learning Hub */}
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
