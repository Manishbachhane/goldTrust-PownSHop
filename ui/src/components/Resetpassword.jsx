import { useState } from "react";
import axios from "axios";
import { __userapiurl } from "../API_URL";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Resetpassword() {
  const { email } = useParams();
  const navigate = useNavigate();

  const [output, setOutput] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async () => {
    if (password !== cpassword) {
      setOutput("Password and Confirm Password must match");
      return;
    }
    // setEmail(localStorage.getItem("email"));
    // const userDetails = {
    //   email: email,
    //   password: password,
    // };
    try {
      // setEmail("goldtrustpownshop@gmail.com");
      console.log(email, password, "email and password reset password se");
      await axios.patch(__userapiurl + "update", {
        condition_obj: { email: email },
        content_obj: { password: password },
      });
      setOutput("Password Updated Successfully");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.log(err, "err reset password se");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-[400px]">
        <h2 className="text-2xl font-bold text-center mb-6">Reset Password</h2>

        <p className="text-center text-blue-600">{output}</p>

        <div className="space-y-4">
          <input
            type="password"
            placeholder="New Password"
            className="w-full border p-2 rounded-lg"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full border p-2 rounded-lg"
            value={cpassword}
            onChange={e => setCpassword(e.target.value)}
          />

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resetpassword;
