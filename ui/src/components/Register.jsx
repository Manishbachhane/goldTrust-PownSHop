import { useState } from "react";
import axios from "axios";
import { NavLink ,useNavigate} from "react-router-dom";
import { __userapiurl } from "../API_URL";

function Register() {
  const navigate = useNavigate();
  const [output, setOutput] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = () => {
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
        setOutput("User register successfully.... \n check your email for verification...");
        setName("");
        setEmail("");
        setPassword("");
        setMobile("");
        setAddress("");
        setCity("");
        setGender("");
      })
      .catch(() => {
        setOutput("User registration failed....");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 py-16">
      <div className="w-full max-w-3xl bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-3xl shadow-2xl p-10">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-yellow-400 mt-4">
            Create Account
          </h2>
          <p className="text-gray-100 mt-2">Register to get started</p>
        </div>

        {/* Message */}
        {output && (
          <p className="text-center mb-6 text-green-400 font-medium">
            {output}
          </p>
        )}

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Mobile
            </label>
            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setMobile(e.target.value)}
              value={mobile}
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2 font-medium">
              Address
            </label>
            <textarea
              rows="3"
              placeholder="Enter address"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>

          {/* City */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">City</label>
            <select
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setCity(e.target.value)}
              value={city}
            >
              <option value="">Select City</option>
              <option>Indore</option>
              <option>Bhopal</option>
              <option>Ujjain</option>
            </select>
          </div>

          {/* Gender */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
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

          {/* Button */}
          <div className="md:col-span-2 text-center pt-6">
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
            >
              Create Account
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          Already have an account?
          <span className="text-yellow-400 cursor-pointer hover:underline ml-1">
            <NavLink to="/login">Login</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Register;
