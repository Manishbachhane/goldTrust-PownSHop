import { useState } from 'react';
import axios from 'axios';
import { __userapiurl } from '../API_URL';
import { useNavigate } from 'react-router-dom';

function Login() {
const Usenavigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [output, setOutput] = useState("");

  const handleSubmit=()=>{
     
    console.log("Email:", email);
    const userDetails={"email":email,"password":password}; 
    console.log("Password:", password);
    console.log("UserDetails:", userDetails);
    axios.post(__userapiurl+"login",userDetails).then((response)=>{
      const users=response.data.info;                 
      
      localStorage.setItem("token",response.data.token);
      localStorage.setItem("name",users.name);
      localStorage.setItem("email",users.email);
      localStorage.setItem("mobile",users.mobile);
      localStorage.setItem("address",users.address);
      localStorage.setItem("city",users.city);
      localStorage.setItem("gender",users.gender);     
      localStorage.setItem("info",users.info);
      localStorage.setItem("role",users.role); 

      if(users.role==="admin")
        Usenavigate("/admin");
      else
       Usenavigate("/user");  

    }).catch(()=>{
      setOutput("Invalid user or please verify your account....");
      // setEmail("");
      // setPassword("");
    });
   };


  return (
    <>
      <div 
       
        className="flex justify-center items-center min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300"
      >

        <div className="content_box content_box_last bg-white p-8 rounded-2xl shadow-2xl w-[400px] border-t-8 border-yellow-600">

          <h2 className="text-2xl font-bold text-yellow-700 mb-4">
            Login Here!!!
          </h2>

          <p className="text-blue-600 mb-4">{output}</p>

          <form>

            <label className="block font-semibold mb-1">Email:</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onChange={e=>setEmail(e.target.value)} 
              value={email} 
            />

            <label className="block font-semibold mb-1">Password:</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              onChange={e=>setPassword(e.target.value)} 
              value={password} 
            />

            <button 
              type="button" 
              onClick={handleSubmit}
              className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300 font-semibold"
            >
              Submit
            </button>

          </form>

        </div>

        <div className="cleaner"></div>

      </div>
    </>
  );
}

export default Login;


















// import { useState } from "react";

// function Login() {

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">

//       <div className="bg-white p-8 rounded-2xl shadow-lg w-96">

//         <h2 className="text-3xl font-bold text-center mb-6 text-yellow-600">
//           GoldTrust Login
//         </h2>

//         <form onSubmit={handleSubmit}>

//           <input
//             type="email"
//             placeholder="Enter Email"
//             className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <input
//             type="password"
//             placeholder="Enter Password"
//             className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <button
//             type="submit"
//             className="w-full bg-yellow-600 text-white py-2 rounded-lg hover:bg-yellow-700 transition duration-300"
//           >
//             Login
//           </button>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default Login;