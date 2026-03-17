
//second version with icons and better styling

import React from "react";
import { NavLink } from "react-router-dom";
import { Plus, Box, User, TrendingUp } from "lucide-react";

function UserHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-20 px-6">
      {/* Hero Section */}
      <div className="text-center py-16">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 mb-6">
          GoldTrust Pawn
        </h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          Turn your valuable items into instant cash with a secure and trusted
          pawn system. Fast approvals, real-time tracking, and full
          transparency.
        </p>

       
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        {[
          { title: "Total Items", value: "120+", icon: <Box /> },
          { title: "Approved", value: "85+", icon: <TrendingUp /> },
          { title: "Active Users", value: "50+", icon: <User /> },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 text-center hover:scale-105 transition"
          >
            <div className="text-yellow-400 flex justify-center mb-3">
              {item.icon}
            </div>
            <h2 className="text-2xl font-bold">{item.value}</h2>
            <p className="text-gray-400">{item.title}</p>
          </div>
        ))}
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-8 pb-20">
        {/* Add Item */}
        <div className="group bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:scale-105 transition duration-300 hover:border-yellow-400">
          <div className="text-yellow-400 mb-4">
            <Plus size={32} />
          </div>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            Add New Item
          </h2>

          <p className="text-gray-400 mb-6">
            Submit your gold or valuable items for verification and pricing.
          </p>

          <NavLink
            to="/addproduct"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Submit Item
          </NavLink>
        </div>

        {/* My Items */}
        <div className="group bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:scale-105 transition duration-300 hover:border-yellow-400">
          <div className="text-yellow-400 mb-4">
            <Box size={32} />
          </div>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            My Items
          </h2>

          <p className="text-gray-400 mb-6">
            View and track the status of your submitted items in real-time.
          </p>

          <NavLink
            to="/showproducts"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            View Items
          </NavLink>
        </div>

        {/* Profile */}
        <div className="group bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-8 hover:scale-105 transition duration-300 hover:border-yellow-400">
          <div className="text-yellow-400 mb-4">
            <User size={32} />
          </div>

          <h2 className="text-2xl font-semibold text-yellow-400 mb-3">
            My Profile
          </h2>

          <p className="text-gray-400 mb-6">
            Manage your account, security settings and personal info.
          </p>

          <NavLink
            to="/profile"
            className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Go to Profile
          </NavLink>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 pb-6">
        © 2026 GoldTrust Pawn — Secure & Trusted
      </div>
    </div>
  );
}

export default UserHome;
