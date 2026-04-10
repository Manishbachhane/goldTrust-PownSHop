import { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { __userapiurl } from "../API_URL";

function Register() {
  const navigate = useNavigate();

  const [output, setOutput] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const [errors, setErrors] = useState({});

  // ✅ Validation
  const validate = () => {
    let err = {};

    if (!name.trim()) err.name = "Name required";

    if (!email) err.email = "Email required";
    else if (!/^\S+@\S+\.\S+$/.test(email)) err.email = "Invalid email";

    if (!password) err.password = "Password required";
    else if (password.length < 4) err.password = "Min 4 characters";

    if (!mobile) err.mobile = "Mobile required";
    else if (!/^[6-9]\d{9}$/.test(mobile)) err.mobile = "Invalid mobile";

    if (!address) err.address = "Address required";

    if (!city) err.city = "Select city";

    if (!gender) err.gender = "Select gender";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 🚀 Submit
  const handleSubmit = () => {
    if (!validate()) return;

    const userDetails = {
      name,
      email,
      password,
      mobile,
      address,
      city,
      gender,
    };

    axios
      .post(__userapiurl + "save", userDetails)
      .then(() => {
        setOutput("✅ User registered successfully");
        setTimeout(() => navigate("/login"), 2000);
      })
      .catch(() => {
        setOutput("❌ Registration failed");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 pt-10 text-white">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-yellow-400">Create Account</h2>
          <p className="text-gray-400 mt-2">Register to get started</p>
        </div>

        {/* Message */}
        {output && <p className="text-center mb-6 text-green-400">{output}</p>}

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Name */}
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full bg-transparent border-0 border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              onChange={e => setName(e.target.value)}
              value={name}
            />
            <p className="text-red-400 text-sm mt-1">{errors.name}</p>
          </div>

          {/* Email */}
          <div>
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-transparent border-0 border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
            <p className="text-red-400 text-sm mt-1">{errors.email}</p>
          </div>

          {/* Password */}
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-transparent border-0 border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
            <p className="text-red-400 text-sm mt-1">{errors.password}</p>
          </div>

          {/* Mobile */}
          <div>
            <input
              type="text"
              placeholder="Mobile"
              className="w-full bg-transparent border-0 border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              onChange={e => setMobile(e.target.value)}
              value={mobile}
            />
            <p className="text-red-400 text-sm mt-1">{errors.mobile}</p>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <textarea
              placeholder="Address"
              className="w-full bg-transparent border-0 border-b border-gray-600 py-2 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition resize-none"
              onChange={e => setAddress(e.target.value)}
              value={address}
            />
            <p className="text-red-400 text-sm mt-1">{errors.address}</p>
          </div>

          {/* City */}
          <div>
            <select
              className="w-full bg-transparent border-0 border-b border-gray-600 py-2 text-white focus:outline-none focus:border-yellow-400"
              onChange={e => setCity(e.target.value)}
              value={city}
            >
              <option className="text-black">Select City</option>
              <option className="text-black">Indore</option>
              <option className="text-black">Bhopal</option>
              <option className="text-black">Ujjain</option>
            </select>
            <p className="text-red-400 text-sm mt-1">{errors.city}</p>
          </div>

          {/* Gender */}
          <div>
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
            <p className="text-red-400 text-sm mt-1">{errors.gender}</p>
          </div>

          {/* Button */}
          <div className="md:col-span-2 pt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?
          <NavLink to="/login" className="text-yellow-400 ml-1">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Register;