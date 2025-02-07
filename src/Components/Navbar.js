
// import React from "react";
// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link, Routes, Route } from "react-router-dom";  // Import Routes and Route here
// import "./Navbar.css";  // For custom styling
// import a from '../assets/logo.jpeg';  // Update path for logo image
// import Rooms from "./Rooms";
// import Home from "./Home";
// import ContactUs from "./Contact";
// import About from "./About";
// import Gallery from "./Gallery";
// import Location from "./Location";
// import Services from "./Services";

// const NavigationBar = () => (
//   <div>
//     {/* <Navbar  variant="dark"  expand="lg" sticky="top" className="shadow-sm" > */}
//     <Navbar expand="lg" variant="dark"  style={{ padding: "20px" }}>
//       <Container>
//         {/* Brand or Logo */}
//         {/* <Navbar.Brand as={Link} to="/" className="navbar-brand-custom"> */}
//         <Navbar.Brand href="#" style={{ fontWeight: "bold", fontSize: "1.5rem", color: "#fff" }}>
//           Clean Swipe
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav  className="ml-auto" style={{ alignItems: "center" }}>
//             {/* Navigation Links */}
//             <Nav.Link as={Link} to="/"  style={{ color: "#fff", marginRight: "20px" }}>
//               Home
//             </Nav.Link>

//             <Nav.Link as={Link} to="/about" style={{ color: "#fff", marginRight: "20px" }}>
//               About Us
//             </Nav.Link>

//             <Nav.Link as={Link} to="/contact" className="nav-link"style={{ color: "#fff", marginRight: "20px" }}>
//               Contact Us
//             </Nav.Link>

//             <Nav.Link as={Link} to="/Login" className="nav-link"style={{ color: "#fff", marginRight: "20px" }}>
//               Login
//             </Nav.Link>
//             <Nav.Link as={Link} to="/BookNow" className="nav-link"style={{ color: "#fff", marginRight: "20px" }}>
//               BookNow
//             </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>

//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/aboutus" element={<About />} />
//       <Route path="/contact" element={<ContactUs />} />
      
//     </Routes>

//   </div>
// );


// export default NavigationBar;
import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import a from '../assets/logo.jpeg';  // Update path for logo image

const HotelNavbar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="shadow py-3">
      <Container>
        <Navbar.Brand href="/" className="fw-bold text-warning fs-4">
          <img
            src={a} 
            alt="Hotel Logo"
            width="130"
            height="60"
            className="d-inline-block align-top me-3"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="text-warning fw-bold mx-3 fs-5 nav-hover">Home</Nav.Link>
            <Nav.Link href="/about" className="text-warning fw-bold mx-3 fs-5 nav-hover">AboutUs</Nav.Link>
            <Nav.Link href="/services" className="text-warning fw-bold mx-3 fs-5 nav-hover">Meetings</Nav.Link>
            <Nav.Link href="/contact" className="text-warning fw-bold mx-3 fs-5 nav-hover">ContactUs</Nav.Link>
            <Nav.Link href="/rooms" className="text-warning fw-bold mx-3 fs-5 nav-hover">Rooms</Nav.Link>
            <Nav.Link href="/gallery" className="text-warning fw-bold mx-3 fs-5 nav-hover">Gallery</Nav.Link>
            <Nav.Link href="/location" className="text-warning fw-bold mx-3 fs-5 nav-hover">Location</Nav.Link>
            <Nav.Link href="/login" className="text-warning fw-bold mx-3 fs-5 nav-hover">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HotelNavbar;





