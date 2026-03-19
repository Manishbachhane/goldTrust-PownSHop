  import { Routes, Route } from 'react-router-dom';
  import Nav from './components/Nav';
  import Footer from './components/Footer';
  import Main from './components/Main';
  import About from './components/About';
  import Contact from './components/Contact';
  import Service from './components/Service';
  import Register from './components/Register';
  import Login from './components/Login';
  import Logout from './components/Logout'; 
  import Admin from './components/Admin/Admin'
  import Manageusers from './components/Admin/Manageusers';
  import User from './components/user/User';
  import EditProfile from './components/EditProfile';
  import Verifyuser from './components/Verifyuser';
  import Profile from './components/Profile';
  import ChangePassword from './components/ChangePassword';
  import Forgetpassword from './components/Forgetpassword';
  import Resetpassword from './components/Resetpassword';
  import AddCategory from './components/AddCategory';
  import AddSubCategory from './components/AddSubCategory';
  import ViewCategory from './components/ViewCategory';
  import ViewSubCategory from './components/ViewSubCategory';
  import AddProduct from './components/ProductComponent/AddProduct';
  import ShowProducts from './components/ProductComponent/ShowProducts';
  import AIClient from './components/AIClient';
  import Chart from './components/Admin/Chart'
  import VerifyItems from './components/Admin/VerifyItems';

  function App() {
    return (
      <div>
        <Nav />
        <Routes>
          {/* ===============General Routes================= */}
          <Route path='' element={<Main />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/service' element={<Service />} ></Route>
          <Route path='/register' element={<Register />} ></Route>
          <Route path='/viewcategory' element={<ViewCategory />} ></Route>
          <Route path='/viewsubcategory/:cnm' element={<ViewSubCategory />} ></Route> 
          {/* ===============User Routes================= */}
          <Route path='/user' element={<User />} ></Route>
          <Route path='/vemail/:email' element={<Verifyuser />} ></Route>
          {/* ===============user and admin Routes================= */}
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/logout' element={<Logout />} ></Route>
          <Route path='/profile' element={<Profile />} ></Route>
          <Route path="/editprofile" element={<EditProfile/>}></Route>
          <Route path="/changepassword" element={<ChangePassword/>}></Route>
          <Route path='/forgetpassword' element={<Forgetpassword/>}></Route>
          <Route path='/resetpassword/:email' element={<Resetpassword />} ></Route>
          {/* ===============Product Routes================= */}
          <Route path='/addproduct' element={<AddProduct />} ></Route>
          <Route path='/showproducts' element={<ShowProducts />} ></Route>
          {/* ===============AI Client Routes================= */}
          <Route path='/aiclient' element={<AIClient />} ></Route> 
          <Route path='/chart' element={<Chart />} ></Route>
          {/* ===============Admin ================= */}
          <Route path='/admin' element={<Admin />} ></Route>
          <Route path='/verifyitems' element={<VerifyItems />} ></Route>
          <Route path='/addcategory' element={<AddCategory />} ></Route>
          <Route path='/addsubcategory' element={<AddSubCategory />} ></Route>
          <Route path='/manageusers' element={   <Manageusers/>} ></Route>
        </Routes>
        <Footer />
    
      </div >
    );
  }

  export default App;
