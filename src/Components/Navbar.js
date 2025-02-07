import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";  // ✅ Import Link
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import a from '../assets/logo.jpeg';

const NavigationBar = () => {
  return (
    <Navbar bg="black" variant="dark" expand="lg" className="shadow py-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning fs-4"> {/* ✅ Use 'as={Link} to="/" ' */}
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
            <Nav.Link as={Link} to="/" className="text-warning fw-bold mx-3 fs-5 nav-hover">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-warning fw-bold mx-3 fs-5 nav-hover">AboutUs</Nav.Link>
            <Nav.Link as={Link} to="/services" className="text-warning fw-bold mx-3 fs-5 nav-hover">Meetings</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-warning fw-bold mx-3 fs-5 nav-hover">ContactUs</Nav.Link>
            <Nav.Link as={Link} to="/rooms" className="text-warning fw-bold mx-3 fs-5 nav-hover">Rooms</Nav.Link>
            <Nav.Link as={Link} to="/gallery" className="text-warning fw-bold mx-3 fs-5 nav-hover">Gallery</Nav.Link>
            <Nav.Link as={Link} to="/location" className="text-warning fw-bold mx-3 fs-5 nav-hover">Location</Nav.Link>
            <Nav.Link as={Link} to="/login" className="text-warning fw-bold mx-3 fs-5 nav-hover">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;







