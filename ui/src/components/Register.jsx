import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";

function Register() {
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
        setOutput("User register successfully....");
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
    <div className="min-h-screen bg-gradient-to-br from-yellow-500 to-yellow-200 flex items-center justify-center p-6 pt-20">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-yellow-800 mb-4">
          Register Here !!!
        </h2>

        {output && (
          <p className="text-center text-blue-600 font-semibold mb-4">
            {output}
          </p>
        )}

        <form className="space-y-5 bg-black text-white rounded-xl p-8 shadow-lg">
          {/* Name */}
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={e => setName(e.target.value)}
              value={name}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block mb-1 font-semibold">Mobile</label>
            <input
              type="text"
              placeholder="Enter mobile number"
              className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={e => setMobile(e.target.value)}
              value={mobile}
            />
          </div>

          {/* Address */}
          <div>
            <label className="block mb-1 font-semibold">Address</label>
            <textarea
              placeholder="Enter address"
              className="w-full p-3 rounded-md bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              onChange={e => setAddress(e.target.value)}
              value={address}
            ></textarea>
          </div>

          {/* City */}
          <div>
            <label className="block mb-1 font-semibold">City</label>
            <select
              className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
            <label className="block mb-2 font-semibold">Gender</label>
            <div className="flex gap-6">
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
          <div className="text-center pt-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-3 rounded-lg transition duration-300 shadow-md hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
