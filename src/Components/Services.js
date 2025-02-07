import React from "react";

import Footer from "./Footer";
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
//import { Navbar } from "react-bootstrap";


import ab from "../assets/b1.jpg"; // Replace with actual image paths
import a from "../assets/p1.jpg"

const MeetingsEvents = () => {
  return (
    <section style={{ position: "relative", backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <Container>
  {/* First Card: Image on Left, Text on Right */}
        <Row className="align-items-center mb-5">
         {/* Left Image */}
          <Col md={7} className="position-relative">
            <img
              src={ab} // Replace with your image URL
              alt="Car Wash"
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          {/* Right Content */}
          <Col
            md={5}
            className="position-absolute"
            style={{
              top: "50%",
              right: "15%",
              transform: "translateY(-50%)",
              zIndex: "10",
            }}
          >
            <Card
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <Card.Body>
                <div className="text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-droplet"
                      style={{
                        fontSize: "2rem",
                        color: "#007bff",
                      }}
                    ></i>
                  </div>
                  <Card.Title as="h3" style={{ fontWeight: "bold" }}>
                  Ballroom
                  </Card.Title>
                  <hr
                    style={{
                      width: "50px",
                      border: "2px solid #007bff",
                      margin: "10px auto",
                    }}
                  />
                </div>
                <Card.Text style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Ballroom is our largest banquet hall, spanning 8000 square feet.
                 It stands out as one of the premier wedding venues in Sirsa, offering exclusivity and elegance. 
                 With a capacity of up to 500 guests, it is ideal for hosting a variety of events, 
                from dreamy wedding receptions to large-scale business conferences.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};


const MeetingsEventsSection = () => {
  return (
    <section style={{ position: "relative", backgroundColor: "#f8f9fa", padding: "40px 0" }}>
      <Container>
        {/* First Card: Image on Left, Text on Right */}
        <Row className="align-items-center mb-5">
          {/* Left Image */}
          <Col md={7} className="position-relative">
            <img
              src={a} // Replace with your image URL
              alt="Car Wash"
              className="img-fluid rounded"
              style={{
                width: "100%",
                height: "auto",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              }}
            />
          </Col>

          {/* Right Content */}
          <Col
            md={5}
            className="position-absolute"
            style={{
              top: "50%",
              right: "15%",
              transform: "translateY(-50%)",
              zIndex: "10",
            }}
          >
            <Card
              style={{
                border: "none",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                padding: "20px",
                borderRadius: "10px",
                backgroundColor: "#fff",
              }}
            >
              <Card.Body>
                <div className="text-center">
                  <div className="mb-3">
                    <i
                      className="bi bi-droplet"
                      style={{
                        fontSize: "2rem",
                        color: "#007bff",
                      }}
                    ></i>
                  </div>
                  <Card.Title as="h3" style={{ fontWeight: "bold" }}>
                  Platinum
                  </Card.Title>
                  <hr
                    style={{
                      width: "50px",
                      border: "2px solid #007bff",
                      margin: "10px auto",
                    }}
                  />
                </div>
                <Card.Text style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                The Diamond Palace is an exquisite banquet hall in Sirsa, covering 6250 sq. ft. 
                It is designed to host up to 250 guests, making it perfect for meetings and other professional events. 
                The hall can also be divided into two separate spaces - Diamond Palace 1 and Diamond Palace 2.
                 Diamond Palace 1 can accommodate up to 100 guests, while Diamond Palace 2 can host a maximum of 150 guests.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

const Services = () => {
    return (
      <>
        
        <br></br>
        <h2 className="text-center" style={{ fontWeight: "bold", color: "#007bff" }}>
              Meeting & Events at The Gopiraj, Sirsa
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: "1.6", textAlign: "center", marginTop: "20px" }}>
              Hotel Gopiraj in Sirsa is your ideal choice for conference venues, offering four versatile halls that can accommodate between 40 to 400 guests, tailored to the specific needs of your event. 
              Our dedicated event managers are on hand to ensure every aspect of your event is seamlessly managed.
            </p>
        <MeetingsEvents/>
        <MeetingsEventsSection/>
        <Footer/>
      </>
    );
  };
export default Services;
