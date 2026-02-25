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
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">
        Manage User Details
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow-md">
        <table className="min-w-full text-sm text-left text-gray-600">
          <thead className="bg-gray-200 text-xs uppercase text-gray-700">
            <tr>
              <th className="px-4 py-3">RegID</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Mobile</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">Gender</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {users.map(row => (
              <tr
                key={row._id}
                className="border-b hover:bg-gray-100 transition"
              >
                <td className="px-4 py-3">{row._id}</td>
                <td className="px-4 py-3">{row.name}</td>
                <td className="px-4 py-3">{row.email}</td>
                <td className="px-4 py-3">{row.mobile}</td>
                <td className="px-4 py-3">{row.city}</td>
                <td className="px-4 py-3">{row.gender}</td>

                <td className="px-4 py-3">
                  {row.status ? (
                    <span className="text-green-600 font-semibold">Active</span>
                  ) : (
                    <span className="text-yellow-600 font-semibold">
                      Inactive
                    </span>
                  )}
                </td>

                <td className="px-4 py-3 space-x-2">
                  {row.status ? (
                    <button
                      onClick={() => manageuserstatus(row._id, "inactive")}
                      className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Deactivate
                    </button>
                  ) : (
                    <button
                      onClick={() => manageuserstatus(row._id, "active")}
                      className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-xs"
                    >
                      Activate
                    </button>
                  )}

                  <button
                    onClick={() => manageuserstatus(row._id, "delete")}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-xs"
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
  );
}

export default ManageUsers;
