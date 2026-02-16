// import './Navbar.css';

import gsap from 'gsap';
import  {useGSAP}  from '@gsap/react';
import { NavLink } from "react-router-dom";

function Nav() {

  useGSAP(() => {
    gsap.from(".nav-content",{ 
        opacity: 0,
        y: -100,
        duration: 1, 
        stagger: 0.2
      });
  });

  return (
<>    

  <nav className="fixed z-50 w-full bg-black text-white p-4 flex justify-between items-center h-16 overflow-hidden px-24 ">
        {/* <h1 className="text-2xl font-bold text-yellow-400">GoldTrust Pawn</h1>  */}
        <img src="./assets/goldTrust.png" className="w-24 ml-4 " alt="img" />
        <div className="space-x-6">
<NavLink to="/" className={({ isActive }) =>`nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`}>Home</NavLink>

<NavLink to="/about" className={({ isActive }) =>`nav-content hover:text-yellow-400 hover:font-bold ${
isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`}
>About-us</NavLink>

<NavLink 
  to="/service" 
  
  className={({ isActive }) =>
    `nav-content hover:text-yellow-400 hover:font-bold ${
      isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""
    }`
  }
>
  Service
</NavLink>

<NavLink 
  to="/contact" 
  className={({ isActive }) =>
    `nav-content hover:text-yellow-400 hover:font-bold ${
      isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""
    }`
  }
>
  Contact
</NavLink>

<NavLink to="/register" className={({ isActive }) =>`nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`}>Register</NavLink>

<NavLink to="/login" className={({ isActive }) =>`nav-content hover:text-yellow-400 hover:font-bold ${isActive ? "text-yellow-400 font-bold border-b-2 border-yellow-400" : ""}`}>Login</NavLink>

        </div>
</nav>
</>
  );
}

export default Nav;