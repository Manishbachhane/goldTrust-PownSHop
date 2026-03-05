import { useState } from "react";
import gsap from "gsap";

function Profile() {
  const user = {
    name: localStorage.getItem("name"),
    email: localStorage.getItem("email"),
    phone: localStorage.getItem("mobile"),
    city: localStorage.getItem("city"),
    role: localStorage.getItem("role"),
    gender: localStorage.getItem("gender"),
    joined: "2023-01-15",
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center 
    bg-gradient-to-br from-gray-900 via-black to-gray-900 p-6"
    >
      <div
        className=" w-full max-w-lg 
      bg-white/10 backdrop-blur-lg 
      border border-yellow-500/20 
      rounded-2xl shadow-2xl p-8"
      >
        {/* Header */}

        <div className="flex items-center gap-5 mb-6">
          <div
            className="w-16 h-16 rounded-full 
          bg-yellow-500 text-black 
          flex items-center justify-center 
          text-2xl font-bold"
          >
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-2xl font-bold text-yellow-400">{user.name}</h2>

            <p className="text-gray-400 text-sm">{user.role.toUpperCase()}</p>
          </div>
        </div>

        {/* Divider */}

        <div className="border-b border-gray-700 mb-5"></div>

        {/* Details */}

        <div className="space-y-4 text-sm">
          <div className="detail-row flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Email</span>
            <span className="text-white">{user.email}</span>
          </div>

          <div className="detail-row flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Phone</span>
            <span className="text-white">{user.phone}</span>
          </div>

          <div className="detail-row flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">City</span>
            <span className="text-white">{user.city}</span>
          </div>

           <div className="detail-row flex justify-between border-b border-gray-700 pb-2">
            <span className="text-gray-400">Gender</span>
            <span className="text-white">{user.gender}</span>
          </div>

          <div className="detail-row flex justify-between">
            <span className="text-gray-400">Joined</span>
            <span className="text-yellow-400">{user.joined}</span>
          </div>
        </div>

        {/* Buttons */}

        <div className="flex gap-4 mt-7">
          <button className="flex-1 bg-yellow-500 text-black py-2 rounded-lg font-semibold hover:bg-yellow-600 transition">
            Edit Profile
          </button>

          <button className="flex-1 border border-yellow-500 text-yellow-400 py-2 rounded-lg hover:bg-yellow-500 hover:text-black transition">
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
