import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import a from "../assets/logo.jpeg"; // Update the path if necessary
import Home from "./Home";
import Rooms from "./Rooms";
import ContactUs from "./Contact";
import About from "./About";
import Gallery from "./Gallery";
import Location from "./Location";
import Services from "./Services";
import Login from "./Login";

const NavigationBar = () => {
  return (
    <BrowserRouter>
      {/* ✅ Navbar Merged Here */}
      <Navbar bg="black" variant="dark" expand="lg" className="shadow py-3">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold text-warning fs-4">
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
              <Nav.Link as={Link} to="/" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                About Us
              </Nav.Link>
              <Nav.Link as={Link} to="/services" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Meetings
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/rooms" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Rooms
              </Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Gallery
              </Nav.Link>
              <Nav.Link as={Link} to="/location" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Location
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="text-warning fw-bold mx-3 fs-5 nav-hover">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Routing Setup */}
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

export default NavigationBar;






