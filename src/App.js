import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from '../src/Pages/Home/Home';
import About from './Pages/About/About';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import Footer from './Pages/Shared/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
