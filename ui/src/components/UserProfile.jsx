import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";
import { useNavigate } from "react-router-dom";

function Userprofile() {
  const navigate = useNavigate();
  const [output, setOutput] = useState("");

  const [name, setName] = useState(localStorage.getItem("name"));
  const [email] = useState(localStorage.getItem("email")); // email not editable
  const [password] = useState(localStorage.getItem("******")); //passwort not editable
  const [mobile, setMobile] = useState(localStorage.getItem("mobile"));
  const [address, setAddress] = useState(localStorage.getItem("address"));
  const [city, setCity] = useState(localStorage.getItem("city"));
  const [gender, setGender] = useState(localStorage.getItem("gender"));

  const handleSubmit = async e => {
    e.preventDefault();

    let data = {
      condition_obj: { email: email },
      content_obj: { name, mobile, address, city, gender },
    };

    try {
      await axios.patch(__userapiurl + "update", data);
      setOutput("Profile Updated Successfully ✅");
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    } catch (err) {
      setOutput("Profile Update Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex justify-center items-center px-4 py-20">
      <div className="w-full max-w-4xl bg-gray-800/70 backdrop-blur-md border border-gray-700 rounded-3xl shadow-2xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-yellow-400 mt-4">
            Edit Profile
          </h2>
          <p className="text-gray-400 mt-2">Update your personal details</p>
        </div>

        {output && (
          <div className="text-center mb-6 font-semibold text-green-400">
            {output}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Full Name
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-400 cursor-not-allowed"
              value={email}
              disabled
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-xl text-gray-400 cursor-not-allowed"
              value="*******"
              disabled
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Mobile
            </label>
            <input
              type="text"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              value={mobile}
              onChange={e => setMobile(e.target.value)}
            />
          </div>

          {/* City */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">City</label>
            <select
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              value={city}
              onChange={e => setCity(e.target.value)}
            >
              <option value="">Select City</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Ujjain</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block mb-2 text-gray-300 font-medium">
              Gender
            </label>
            <div className="flex gap-6 text-gray-300">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="male"
                  checked={gender === "male"}
                  onChange={e => setGender(e.target.value)}
                />
                Male
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  value="female"
                  checked={gender === "female"}
                  onChange={e => setGender(e.target.value)}
                />
                Female
              </label>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block mb-2 text-gray-300 font-medium">
              Address
            </label>
            <textarea
              rows="3"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              value={address}
              onChange={e => setAddress(e.target.value)}
            ></textarea>
          </div>

          {/* Button */}
          <div className="md:col-span-2 text-center pt-6">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-3 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Userprofile;
