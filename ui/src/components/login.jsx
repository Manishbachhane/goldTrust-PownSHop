// import { useState } from "react";
// import axios from "axios";
// import { __userapiurl } from "../API_URL";
// import { useNavigate, NavLink } from "react-router-dom";

// function Login() {
//   const Usenavigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [output, setOutput] = useState("");
//   const [forgetPassword, setForgetPassword] = useState(null);

//   const handleSubmit = () => {
//     const userDetails = { email, password };

//     axios
//       .post(__userapiurl + "login", userDetails)
//       .then(response => {
//         const users = response.data.info;

//         localStorage.setItem("UserId", users._id);
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("name", users.name);
//         localStorage.setItem("email", users.email);
//         localStorage.setItem("mobile", users.mobile);
//         localStorage.setItem("address", users.address);
//         localStorage.setItem("city", users.city);
//         localStorage.setItem("gender", users.gender);
//         localStorage.setItem("role", users.role);

//         users.role === "admin" ? Usenavigate("/admin") : Usenavigate("/user");
//       })
//       .catch(() => {
//         setOutput("Invalid user or verify your account");
//         setForgetPassword(true);
//       });
//   };

//   return (
//     <div className="min-h-screen  grid md:grid-cols-2 bg-black text-white">
//       {/* LEFT SIDE */}
//       <div className="flex flex-col justify-center px-10 md:px-30">
//         <h1 className="text-5xl font-bold text-yellow-400 mb-6">
//           Welcome Back
//         </h1>

//         <p className="text-gray-400 max-w-md">
//           Login to access your account and manage your profile securely with our
//           premium system.
//         </p>

//         <div className="mt-8 space-y-2 text-gray-500 text-sm">
//           <p>⚡ Fast Login</p>
//           <p>🔒 Secure Authentication</p>
//           <p>🚀 Smooth Experience</p>
//         </div>
//       </div>

//       {/* RIGHT SIDE FORM */}
//       <div className="flex flex-col justify-center px-10 md:px-20">
//         <h2 className="text-3xl font-semibold mb-8">Login</h2>

//         {/* Error */}
//         {output && <p className="text-red-400 mb-4">{output}</p>}

//         <div className="space-y-6">
//           {/* Email */}
//           <div>
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full bg-transparent border-0 border-b border-gray-600 py-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
//               onChange={e => setEmail(e.target.value)}
//               value={email}
//             />
//           </div>

//           {/* Password */}
//           <div>
//             <input
//               type="password"
//               placeholder="Password"
//               className="w-full bg-transparent border-0 border-b border-gray-600 py-2 placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
//               onChange={e => setPassword(e.target.value)}
//               value={password}
//             />
//           </div>

//           {/* Button */}
//           <button
//             onClick={handleSubmit}
//             className="w-full mt-6 bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition hover:scale-[1.02]"
//           >
//             Login
//           </button>
//         </div>

//         {/* Links */}
//         <div className="mt-6 text-sm text-gray-400">
//           {forgetPassword && (
//             <p>
//               Forgot password?
//               <NavLink
//                 to="/forgetpassword"
//                 className="text-red-400 ml-1 hover:underline"
//               >
//                 Reset
//               </NavLink>
//             </p>
//           )}

//           <p className="mt-3">
//             Don’t have an account?
//             <NavLink
//               to="/register"
//               className="text-yellow-400 ml-1 hover:underline"
//             >
//               Register
//             </NavLink>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Login;

import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";
import { useNavigate, NavLink } from "react-router-dom";

function Login() {
  const Usenavigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");
  const [forgetPassword, setForgetPassword] = useState(null);
  const [errors, setErrors] = useState({}); // ✅ NEW

  // ✅ VALIDATION FUNCTION
  const validate = () => {
    let newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();

    // ❌ stop if errors
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({}); // clear old errors

    const userDetails = { email, password };

    axios
      .post(__userapiurl + "login", userDetails)
      .then(response => {
        const users = response.data.info;

        localStorage.setItem("UserId", users._id);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("name", users.name);
        localStorage.setItem("email", users.email);
        localStorage.setItem("mobile", users.mobile);
        localStorage.setItem("address", users.address);
        localStorage.setItem("city", users.city);
        localStorage.setItem("gender", users.gender);
        localStorage.setItem("role", users.role);

        users.role === "admin" ? Usenavigate("/admin") : Usenavigate("/user");
      })
      .catch(() => {
        setOutput("Invalid user or verify your account");
        setForgetPassword(true);
      });
  };

  return (
    <div className=" md:px-[250px] bg-black">
      <div className="min-h-screen grid md:grid-cols-2   text-white">
        {/* LEFT SIDE */}
        <div className="flex flex-col justify-center    md:px-30">
          <h1 className="text-5xl font-bold text-yellow-400 mb-6">
            Welcome Back
          </h1>

          <p className="text-gray-400 max-w-md">
            Login to access your account and manage your profile securely with
            our premium system.
          </p>

          <div className="mt-8 space-y-2 text-gray-500 text-sm">
            <p>⚡ Fast Login</p>
            <p>🔒 Secure Authentication</p>
            <p>🚀 Smooth Experience</p>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex flex-col col-span-1 justify-center p-2 ">
          <h2 className="text-3xl font-semibold mb-8">Login</h2>

          {output && <p className="text-red-400 mb-4">{output}</p>}

          <div className="space-y-6">
            {/* Email */}
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent border-0 border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-400"
                onChange={e => {
                  setEmail(e.target.value);
                  setErrors({ ...errors, email: "" }); // live clear
                }}
                value={email}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent border-0 border-b border-gray-600 py-2 focus:outline-none focus:border-yellow-400"
                onChange={e => {
                  setPassword(e.target.value);
                  setErrors({ ...errors, password: "" });
                }}
                value={password}
              />
              {errors.password && (
                <p className="text-red-400 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            {/* Button */}
            <button
              onClick={handleSubmit}
              className="w-full mt-6 bg-yellow-500 text-black font-semibold py-3 rounded-lg hover:bg-yellow-400 transition"
            >
              Login
            </button>
          </div>

          {/* Links */}
          <div className="mt-6 text-sm text-gray-400">
            {forgetPassword && (
              <p>
                Forgot password?
                <NavLink
                  to="/forgetpassword"
                  className="text-red-400 ml-1 hover:underline"
                >
                  Reset
                </NavLink>
              </p>
            )}

            <p className="mt-3">
              Don’t have an account?
              <NavLink
                to="/register"
                className="text-yellow-400 ml-1 hover:underline"
              >
                Register
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
