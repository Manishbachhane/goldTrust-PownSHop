import { useState, useEffect } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";

function ManageUsers() {
  const [users, setUserDetails] = useState([]);

  const fetchUsers = () => {
    axios
      .get(__userapiurl + "fetch", {
        params: { role: "user" },
      })
      .then(response => {
        setUserDetails(response.data.info);
      })
      .catch(error => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const manageuserstatus = (_id, s) => {
    if (s === "active") {
      let data = {
        condition_obj: { _id: _id },
        content_obj: { status: 1 },
      };
      axios.patch(__userapiurl + "update", data).then(() => {
        fetchUsers();
      });
    } else if (s === "inactive") {
      let data = {
        condition_obj: { _id: _id },
        content_obj: { status: 0 },
      };
      axios.patch(__userapiurl + "update", data).then(() => {
        fetchUsers();
      });
    } else {
      axios
        .delete(__userapiurl + "delete", {
          data: { _id: _id },
        })
        .then(() => {
          fetchUsers();
        });
    }
  };

  return (
    <div className="pt-28 min-h-screen  bg-gradient-to-b from-black via-gray-900 to-black p-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 ">
          GoldTrust Admin Panel
        </h2>
        <p className="text-gray-400 mt-2 text-sm">Manage Registered Users</p>
      </div>

      {/* Table Card */}
      <div className="bg-gray-900 rounded-2xl shadow-2xl border border-yellow-500/30 overflow-hidden">
        <div className="overflow-x-auto">
          <table
            className="min-w-full text-sm text-gray-300"
            border={2}
            cellPadding={10}
            cellSpacing={10}
          >
            {/* Table Head */}
            <thead className="bg-gradient-to-r from-yellow-500 to-yellow-600 font-bold text-black uppercase text-xl tracking-wider">
              <tr>
                <th className="px-6 py-4">RegID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Email</th>
                <th className="px-6 py-4">Mobile</th>
                <th className="px-6 py-4">City</th>
                <th className="px-6 py-4">Gender</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {users.map(row => (
                <tr
                  key={row._id}
                  className="border-b border-gray-700 hover:bg-gray-800 transition duration-300"
                >
                  <td className="px-6 text-center py-4">{row._id}</td>
                  <td className="px-6 py-4 font-semibold text-center text-yellow-400">
                    {row.name}
                  </td>
                  <td className="px-12  py-4 text-center">{row.email}</td>
                  <td className="px-12 py-4 text-center">{row.mobile}</td>
                  <td className="px-6 py-4 text-center">{row.city}</td>
                  <td className="px-6 py-4 text-center">{row.gender}</td>

                  {/* Status */}
                  <td className="px-6 py-4 text-center">
                    {row.status ? (
                      <span className="px-3 py-1 text-xs font-semibold bg-green-600/20 text-green-400 rounded-full">
                        Active
                      </span>
                    ) : (
                      <span className="px-3 py-1 text-xs font-semibold bg-red-600/20 text-red-400 rounded-full">
                        Inactive
                      </span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 bg-gray-800 rounded-lg text-center justify-between space-x-2">
                    {row.status ? (
                      <button
                        onClick={() => manageuserstatus(row._id, "inactive")}
                        className=" px-4 py-1 text-xs rounded-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold transition"
                      >
                        Deactivate
                      </button>
                    ) : (
                      <button
                        onClick={() => manageuserstatus(row._id, "active")}
                        className="px-4 py-1 text-xs rounded-full bg-green-500 hover:bg-green-600 text-black font-semibold transition"
                      >
                        Activate
                      </button>
                    )}

                    <button
                      onClick={() => manageuserstatus(row._id, "delete")}
                      className="px-4 py-1 text-xs rounded-full bg-red-600 hover:bg-red-700 text-white font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ManageUsers;
