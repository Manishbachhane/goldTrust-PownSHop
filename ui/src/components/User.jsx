import React from "react";
import { NavLink } from "react-router-dom";

function UserHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white pt-20">
      {/* Hero Section */}
      <div className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
          Welcome to GoldTrust Pawn
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg">
          Securely pawn your valuable items and get instant cash. Trusted.
          Transparent. Reliable.
        </p>
      </div>

      {/* Action Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-10 pb-20">
        {/* Add Item */}
        {/* <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            Add New Item
          </h2>
          <p className="text-gray-400 mb-6">
            Submit your gold or valuable items for verification and pricing.
          </p>
          <NavLink
            to="/additem"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Submit Item
          </NavLink>
        </div> */}

        {/* My Items */}
        {/* <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            My Items
          </h2>
          <p className="text-gray-400 mb-6">
            View and track the status of your submitted items.
          </p>
          <NavLink
            to="/myitems"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            View Items
          </NavLink>
        </div> */}

        {/* Profile */}
        {/* <div className="bg-gray-800 rounded-2xl shadow-lg p-8 hover:scale-105 transition duration-300">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-4">
            My Profile
          </h2>
          <p className="text-gray-400 mb-6">
            Manage your account details and security settings.
          </p>
          <NavLink
            to="/profile"
            className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition"
          >
            Go to Profile
          </NavLink>
        </div> */}
      </div>
    </div>
  );
}

export default UserHome;
