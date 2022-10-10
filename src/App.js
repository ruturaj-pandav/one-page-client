import "./App.css";
import ContactUs from "./components/ContactUs";
import AdminLogin from "./components/AdminLogin";
import AboutUs from "./components/AboutUs";
import AdminDashboard from "./components/AdminDashboard";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Quotes from "./components/Quotes";
import ThisDayThatYear from "./components/ThisDayThatYear";
import Facts from "./components/Facts";
import FactsTag from "./components/FactsTag.js";
import Homepage from "./components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App bg-grey">
      <BrowserRouter>
        <Routes>
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/facts/tags/:tag" element={<FactsTag />} />
          <Route path="/Quotes" element={<Quotes />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/this-day-that-year" element={<ThisDayThatYear />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
