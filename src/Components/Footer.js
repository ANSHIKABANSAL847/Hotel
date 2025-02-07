import { FaInstagram, FaFacebook } from "react-icons/fa";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Footer.css"; // Ensure this file is included

const FooterComponent = () => (
  <footer className="footer bg-dark text-white py-5">
    <Container>
      <Row>
        {/* Contact Information */}
        <Col md={4} className="mb-4">
          <h5 className="fw-bold text-uppercase">📍 Contact Us</h5>
          <p className="mb-1">Hotel Gopiraj</p>
          <p className="mb-1">
            Hisar Rd, near Surkhab Chowk, Agarsain Colony, Sirsa, Haryana 125055
          </p>
          <p className="mb-1">
            <strong>Email:</strong>{" "}
            <a
              href="mailto:hotelgopiraj@gmail.com"
              className="text-warning text-decoration-none"
            >
              hotelgopiraj@gmail.com
            </a>
          </p>
          <p className="mb-0">
            <strong>Phone:</strong>{" "}
            <a
              href="tel:+919017327424"
              className="text-warning text-decoration-none"
            >
              +91 90173 27424
            </a>
          </p>
        </Col>

        {/* Quick Links */}
        <Col md={4} className="mb-4">
          <h5 className="fw-bold text-uppercase">🔗 Quick Links</h5>
          <ListGroup className="quick-links">
            <ListGroup.Item as={Link} to="/" className="footer-link">
              Home
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/about" className="footer-link">
              About Us
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/contact" className="footer-link">
              Contact Us
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/rooms" className="footer-link">
              Rooms
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/location" className="footer-link">
              Location
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/gallery" className="footer-link">
              Gallery
            </ListGroup.Item>
            <ListGroup.Item as={Link} to="/services" className="footer-link">
              Meetings & Events
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Social Media Links */}
        <Col md={4} className="mb-4">
          <h5 className="fw-bold text-uppercase">🌍 Follow Us</h5>
          <div className="d-flex gap-3">
            <a
              href="https://www.instagram.com/hotelgopiraj01?igsh=MWVkMzZ6bG1qZ3RneQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={28} />
            </a>

            <a
              href="https://www.facebook.com/hotelgopirajsirsa/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook size={28} />
            </a>
          </div>
        </Col>
      </Row>

      {/* Separator Line */}
      <hr className="border-light" />

      {/* Copyright Notice */}
      <Row>
        <Col className="text-center">
          <p className="mb-0 text-secondary">
            © 2025 Hotel Gopiraj. All rights reserved.
          </p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterComponent;




