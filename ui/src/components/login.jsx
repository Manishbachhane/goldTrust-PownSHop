import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Login() {
  const Usenavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit = () => {
    console.log("Email:", email);
    const userDetails = { email: email, password: password };
    console.log("Password:", password);
    console.log("UserDetails:", userDetails);
    axios
      .post(__userapiurl + "login", userDetails)
      .then(response => {
        const users = response.data.info;

        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("city", users.city);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("info", users.info);
        localStorage.setItem("role", users.role);

        if (users.role === "admin") Usenavigate("/admin");
        else Usenavigate("/user");
      })
      .catch(() => {
        setOutput("Invalid user or please verify your account....");
        // setEmail("");
        // setPassword("");
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4">
      <div className="w-full max-w-md bg-gray-800/70 backdrop-blur-lg border border-gray-700 rounded-3xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-yellow-400 text-3xl font-bold mt-2">
            Login to your account
          </p>
        </div>

        {/* Message */}
        {output && (
          <p className="text-center mb-4 text-green-400 font-medium">
            {output}
          </p>
        )}

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setEmail(e.target.value)}
              value={email}
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-yellow-400 outline-none transition"
              onChange={e => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
            />
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-2xl shadow-lg transition duration-300 hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <div className="text-center mt-6 text-gray-400 text-sm">
          Don’t have an account?
          <span className="text-yellow-400 cursor-pointer hover:underline ml-1">
            <NavLink to="/register">Register</NavLink>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
