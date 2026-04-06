import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { __userapiurl } from "../../API_URL";

function AdminHome() {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    console.log("Fetching total users from API...");
    axios.get(__userapiurl + "count").then(res => {
      setTotalUsers(res.data.totalUsers);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20 px-10">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-yellow-400">Admin Dashboard</h1>
        <p className="text-gray-400 mt-2">
          Manage users, verify pawn items and control the platform.
        </p>
      </div>
      {/* Stats Section */}
      <div className="grid md:grid-cols-4 gap-6 mb-16">
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Total Users</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {totalUsers}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Pending Items</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">2</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Approved Items</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">3</p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Rejected Items</h2>
          <p className="text-3xl font-bold text-red-400 mt-2">3</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-3 gap-8 pb-20">
        {/* Manage Users */}
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Manage Users
          </h2>
          <p className="text-gray-400 mb-6">
            View, block or manage registered users.
          </p>
          <NavLink
            to="/manageusers"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Go to Users
          </NavLink>
        </div>

        {/* Verify Items */}
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Verify Pawn Items
          </h2>
          <p className="text-gray-400 mb-6">
            Approve or reject submitted gold items.
          </p>
          <NavLink
            to="/verifyitems"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Verify Items
          </NavLink>
        </div>

        {/* Reports*/}
        {/* <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 shadow-lg hover:scale-105 transition">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Reports & Analytics
          </h2>
          <p className="text-gray-400 mb-6">
            View system reports and transaction insights.
          </p>
          <NavLink
            to="/chart"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            View Reports
          </NavLink>
        </div> */}
      </div>
    </div>
  );
}

export default AdminHome;
