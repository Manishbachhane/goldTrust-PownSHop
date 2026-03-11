import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav() {
  const [role, setRole] = useState("guest");

  useEffect(() => {
    setInterval(() => {
      const token = localStorage.getItem("token");
      const userRole = localStorage.getItem("role");

      if (token && userRole === "admin") {
        setRole("admin");
      } else if (token && userRole === "user") {
        setRole("user");
      } else {
        setRole("guest");
      }
    }, 1);
  }, []);

  const profiledropdown = (
    <div className="relative group">
      <button
        className={({ isActive }) =>
          `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
        }
      >
        Profile<span className="text-lg">▾</span>
      </button>

      <div
        className="absolute right-0 top-full mt-3 w-44   bg-gradient-to-br from-gray-900 via-black to-gray-900
 text-white rounded-xl shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-700"
      >
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `block rounded-lg hover:bg-yellow-400 px-4 py-2 text-sm hover:text-black ${
              isActive ? "bg-yellow-400 text-black font-semibold" : ""
            }`
          }
        >
          View Profile
        </NavLink>
        <NavLink
          to="/editprofile"
          className={({ isActive }) =>
            `block rounded-lg hover:bg-yellow-400 px-4 py-2 text-sm hover:text-black ${
              isActive ? "bg-yellow-400 text-black font-semibold" : ""
            }`
          }
        >
          Edit Profile
        </NavLink>

        <NavLink
          to="/changepassword"
          className={({ isActive }) =>
            `block rounded-lg hover:bg-yellow-400 px-4 py-2 text-sm hover:text-black ${
              isActive ? "bg-yellow-400 text-black font-semibold" : ""
            }`
          }
        >
          Change Password
        </NavLink>

        <NavLink
          to="/logout"
          className="block  rounded-lg hover:bg-red-500 px-4 py-2 text-sm hover:text-black"
        >
          Logout
        </NavLink>
      </div>
    </div>
  );

  return (
    <nav className=" fixed z-50 w-full bg-black text-white p-4 flex justify-between items-center h-16 px-24 ">
      <img
        src="./assets/goldTrust.png"
        className="w-24 ml-4 object-cover h-12"
        alt="img"
      />
      {/* NAV ITEMS */}
      <div className="space-x-6 flex items-center">
        {/*  ADMIN NAV  */}
        {role === "admin" && (
          <>
            <NavLink
              to="/admin"
              className={({ isActive }) =>
                `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
              }
            >
              Admin-Home
            </NavLink>
            <NavLink
              to="/addcategory"
              className={({ isActive }) =>
                `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
              }
            >
              Add Category
            </NavLink>

            <NavLink
              to="/addsubcategory"
              className={({ isActive }) =>
                `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
              }
            >
              AddSubCategory
            </NavLink>

            <NavLink
              to="/manageusers"
              className={({ isActive }) =>
                `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
              }
            >
              ManageUsers
            </NavLink>

            {/* DROPDOWN */}

            {profiledropdown}
          </>
        )}
        {/*  USER NAV  */}
        {role === "user" && (
          <>
            <NavLink
              to="/user"
              className={({ isActive }) =>
                `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
              }
            >
              User-Home
            </NavLink>
            {/* USER DROPDOWN */}
            {profiledropdown}
          </>
        )}
        {/*  GUEST NAV  */}
        {role === "guest" && (
          <>
            <div className="space-x-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-content hover:text-yellow-400 hover:font-bold ${
                    isActive
                      ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                      : ""
                  }`
                }
              >
                About-us
              </NavLink>
              <NavLink
                to="/service"
                className={({ isActive }) =>
                  `nav-content hover:text-yellow-400 hover:font-bold ${
                    isActive
                      ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                      : ""
                  }`
                }
              >
                Service
              </NavLink>

              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-content hover:text-yellow-400 hover:font-bold ${
                    isActive
                      ? "text-yellow-400 font-bold border-b-2 border-yellow-400"
                      : ""
                  }`
                }
              >
                Contact
              </NavLink>

              <NavLink
                to="/register"
                className={({ isActive }) =>
                  `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
                }
              >
                Register
              </NavLink>

              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`
                }
              >
                Login
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Nav;
