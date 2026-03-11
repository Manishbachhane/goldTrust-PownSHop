import  { useState, useEffect } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";
import { useNavigate } from "react-router-dom";

function ChangePassword() {
  const navigate = useNavigate();
  const [output, setOutput] = useState({});

  const [email] = useState(localStorage.getItem("email"));
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userDetail, setUserDetails] = useState([]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(__userapiurl + "fetch", {
        params: { email: email },
      });
      setUserDetails(res.data.info);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const handleSubmit = async e => {
    e.preventDefault();

    const dbPassword = userDetail[0]?.password;

    if (oldPassword !== dbPassword) {
      setOutput({ msg: "Old Password Incorrect", value: false });
      return;
    }

    if (newPassword !== confirmPassword) {
      setOutput({
        msg: "New Password and Confirm Password Not Match",
        value: false,
      });
      return;
    }

    try {
      await axios.patch(__userapiurl + "update", {
        condition_obj: { email: email },
        content_obj: { password: newPassword },
      });
      setOutput({ msg: "Password Updated Successfully", value: true });
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black  via-gray-900 to-black
"
    >
      <div
        className="bg-gradient-to-br from-gray-900 via-black to-gray-900
 p-10 text-white border border-yellow-400 rounded-xl w-full max-w-md"
      >
        <h1 className="text-2xl text-yellow-400  font-bold mb-6 text-center">
          Change Password
        </h1>
        {output.value ? (
          <div className="text-center mb-6 font-semibold text-green-400">
            {output.msg}
          </div>
        ) : (
          <div className="text-center mb-6 font-semibold text-red-500">
            {output.msg}
          </div>
        )}
        <form onSubmit={handleSubmit} autoComplete="off" className="space-y-4">
          <div>
            <label>Email</label>
            <input
              type="email"
              value={email}
              disabled
              className="w-full p-2 rounded bg-gray-700"
            />
          </div>

          <div>
            <label>Old Password</label>
            <input
              type="password"
              value={oldPassword}
              onChange={e => setOldPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700"
            />
          </div>

          <div>
            <label>New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700"
            />
          </div>

          <div>
            <label>Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded bg-gray-700"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg"
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChangePassword;
