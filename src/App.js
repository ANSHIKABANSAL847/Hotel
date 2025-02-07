import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "./Components/Navbar";  // Ensure correct import
import Home from "./Components/Home";
import Rooms from "./Components/Rooms";
import ContactUs from "./Components/Contact";
import About from "./Components/About";
import Gallery from "./Components/Gallery";
import Location from "./Components/Location";
import Services from "./Components/Services";
import Login from "./Components/Login";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar /> {/* ✅ Add Navbar inside BrowserRouter */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/location" element={<Location />} />
        <Route path="/services" element={<Services />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

