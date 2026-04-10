import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { __userapiurl, __productapiurl } from "../../API_URL";

function AdminHome() {
  const [totalUsers, setTotalUsers] = useState(0);
  const [pendingItems, setPendingItems] = useState(0);
  const [approvedItems, setApprovedItems] = useState(0);
  const [rejectedItems, setRejectedItems] = useState(0);
  const fetchPendingItems = () => {
    axios
      .get(__productapiurl + "pendingitems")
      .then(res => {
        setPendingItems(res.data.info.length);
      })
      .catch(err => {
        console.error("Error fetching pending items:", err);
      });
  };

  const fetchTotalUsers = () => {
    axios
      .get(__userapiurl + "fetch")
      .then(res => {
        setTotalUsers(res.data.info.length);
      })
      .catch(err => {
        console.error("Error fetching total users:", err);
      });
  };

  const fetchApprovedItems = () => {
    axios
      .get(__productapiurl + "approveditems")
      .then(res => {
        setApprovedItems(res.data.info.length);
      })
      .catch(err => {
        console.error("Error fetching approved items from ui:", err);
      });
  };

  const fetchRejectedItems = () => {
    axios
      .get(__productapiurl + "rejecteditems")
      .then(res => {
        setRejectedItems(res.data.info.length);
      })
      .catch(err => {
        console.error("Error fetching rejected items from ui:", err);
      });
  };

  useEffect(() => {
    fetchPendingItems();
    fetchTotalUsers();
    fetchApprovedItems();
    fetchRejectedItems();
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
            {totalUsers ? totalUsers : "no users"}
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Pending Items</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {pendingItems ? pendingItems : "no pending"}
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Approved Items</h2>
          <p className="text-3xl font-bold text-yellow-400 mt-2">
            {approvedItems ? approvedItems : "no approved"}
          </p>
        </div>
        <div className="bg-white/5 backdrop-blur-lg border border-gray-700 rounded-2xl p-6 shadow-lg hover:scale-105 transition">
          <h2 className="text-gray-400">Rejected Items</h2>
          <p className="text-3xl font-bold text-red-400 mt-2">
            {rejectedItems ? rejectedItems : "no rejected"}
          </p>
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

       
      </div>
    </div>
  );
}

export default AdminHome;
