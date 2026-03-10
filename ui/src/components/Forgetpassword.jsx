import { useState } from 'react';
import axios from 'axios';
import { __userapiurl , __forgetpasswordurl } from '../API_URL';
// import { useNavigate } from 'react-router-dom';

function Forgetpassword() {

  // const navigate = useNavigate();
  const [ output , setOutput ] = useState();  
  const [ email , setEmail ] = useState();  

  const handleSubmit=()=>{
    const userDetails={"email":email}; 
    console.log(userDetails);
    axios.get(__userapiurl+"fetch",{
     params : {"email":email}
     }).then((response)=>{
      axios.post(__forgetpasswordurl,{"email":email});
      setOutput("Verification link sent on register emailid...."); 
     }).catch((error)=>{
      setOutput("EmailId not exists....",error);
     });
   };

  return (
<>
<div className="min-h-screen flex items-center justify-center bg-gray-100">

  <div className="bg-white shadow-lg rounded-xl p-8 w-[400px]">

    <h2 className="text-2xl font-bold text-center mb-4">
      Forget Password
    </h2>

    <p className="text-blue-600 text-center mb-4">{output}</p>

    <form className="flex flex-col gap-4">

      <label className="text-gray-700 font-medium">
        Enter register email id to get reset link:
      </label>

      <input
        type="email"
        placeholder="Enter your email"
        className="border p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={e=>setEmail(e.target.value)}
        value={email}
      />

      <button
        type="button"
        onClick={handleSubmit}
        className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Submit
      </button>

    </form>

  </div>

</div>
</>
);
}

export default Forgetpassword;
