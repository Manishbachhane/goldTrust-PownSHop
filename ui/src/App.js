import { Routes, Route } from 'react-router-dom';
// import goldTrust from './goldTrust.png';
import Nav from './components/Navbar';
// import Hero from './components/Hero';
import Footer from './components/Footer';
import Main from './components/Main';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Register from './components/Register';
import Login from './components/Login';
// import Header from './components/HeaderComponent/Header';
// import Sidebar from './components/SidebarComponent/Sidebar';

function App() {
  return (
    <div>
      <Nav />


      <Routes>
        <Route path='' element={<Main />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
        <Route path='/service' element={<Service />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
      </Routes>

      <Footer />
    </div >
  );
}

export default App;
