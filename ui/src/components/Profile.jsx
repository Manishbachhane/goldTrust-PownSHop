import { NavLink } from "react-router-dom";

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
      className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900
 text-white px-6 md:px-20 py-36"
    >
      {/* Top Section */}
      <div className="flex items-center justify-between border-b border-gray-600 pb-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 text-black flex items-center justify-center text-3xl font-bold shadow-lg">
            {user.name?.charAt(0).toUpperCase()}
          </div>

          <div>
            <h1 className="text-3xl font-bold tracking-wide">{user.name}</h1>
            <p className="text-gray-400 text-sm uppercase">{user.role}</p>
          </div>
        </div>

        <div className="flex gap-3">
          <NavLink
            to="/editprofile"
            className="px-5 py-2 bg-yellow-500 text-black rounded-full text-sm font-semibold hover:bg-yellow-400 transition"
          >
            Edit
          </NavLink>

          <NavLink
            to="/changepassword"
            className="px-5 py-2 border border-yellow-500 text-yellow-400 rounded-full text-sm hover:bg-yellow-500 hover:text-black transition"
          >
            Password
          </NavLink>
        </div>
      </div>

      {/* Info Section */}
      <div className="grid md:grid-cols-2 gap-10 mt-10">
        <div className="space-y-6">
          <div>
            <p className="text-gray-500 text-xs uppercase font-semibold">
              Email
            </p>
            <p className="text-lg border-b border-gray-600  p-3 pb-5 font-medium">
              {user.email}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs uppercase">Phone</p>
            <p className="text-lg border-b border-gray-600  p-3 pb-5 font-medium">
              {user.phone}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs uppercase">City</p>
            <p className="text-lg border-b border-gray-600  p-3 pb-5 font-medium">
              {user.city}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-gray-500 text-xs uppercase">Gender</p>
            <p className="text-lg capitalize border-b border-gray-600  p-3 pb-5 font-medium">
              {user.gender}
            </p>
          </div>

          <div>
            <p className="text-gray-500 text-xs uppercase">Joined</p>
            <p className="text-lg text-yellow-400 border-b border-gray-600  p-3 pb-5 font-medium">
              {user.joined}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
