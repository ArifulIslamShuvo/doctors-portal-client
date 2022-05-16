import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from '../src/Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Appointment from './Pages/Appointment/Appointment';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer, } from 'react-toastify';


function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="appointment" element={
              <RequireAuth>
                <Appointment />
              </RequireAuth>
            } />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
