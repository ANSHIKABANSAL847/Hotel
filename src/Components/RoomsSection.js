//import { Container, Row, Col,  Button } from "react-bootstrap";
import slide1 from "../assets/Deluxe-1.jpg";
import slide2 from "../assets/semi-delux.jpg";
import slide3 from "../assets/executive.jpg";
import slide4 from "../assets/Super-Deluxe.jpg";
const RoomsSection = () => {
    return (
      <section style={{ backgroundColor: "#e0e0e0", padding: "40px 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section 1: Image on Left, Text on Right */}
          <div className="row align-items-center mb-5">
            {/* Left Image */}
            <div className="col-md-6">
              <img src={slide1} Replace with your image URL alt="Car Wash"className="img-fluid rounded"
                style={{ width: "100%",height: "auto",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",}}/>
            </div>
  
            {/* Right Text */}
            <div className="col-md-6">
              <div style={{ border: "none",boxShadow: "0 4px 8px rgba(0,0,0,0.2)",padding: "20px",borderRadius: "10px",backgroundColor: "#fff",}}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-droplet" style={{fontSize: "2rem",color: "#007bff",}}></i>
                  </div>
                  <h3 style={{fontWeight: "bold",}}>
                    Deluxe Room
                  </h3>
                  <hr style={{width: "50px",border: "2px solid #007bff", margin: "10px auto",}}/>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  Indulge in luxury and relaxation in our Deluxe rooms, featuring 30 square meters of elegantly appointed space. Pamper yourself with a rejuvenating rain shower or indulge in a soothing bath in our beautifully designed bathrooms. Stay connected with high-speed internet access and Wi-Fi, and enjoy a variety of premium amenities for a memorable stay.
                  Amenities include: LED TV, luggage rack, in-room safe, complimentary water bottles, hair dryer, minibar, iron and ironing board, and a tea/coffee maker
                </p>
              </div>
            </div>
          </div>
  
          {/* Section 2: Text on Left, Image on Right */}
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6">
              <div style={{ border: "none",boxShadow: "0 4px 8px rgba(0,0,0,0.2)",padding: "20px",borderRadius: "10px",backgroundColor: "#fff",}}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-star" style={{fontSize: "2rem",color: "#007bff"}}></i>
                  </div>
                  <h3 style={{fontWeight: "bold", }}>
                    Semi-Deluxe Room
                  </h3>
                  <hr style={{width: "50px",border: "2px solid #007bff",margin: "10px auto",}}/>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                  Experience comfort and style in our Semi Deluxe rooms, offering 24 square meters of thoughtfully designed space. Unwind after a day of exploration in the city with your choice of a refreshing rain shower or a leisurely soak in the bathtub in our modern bathrooms. Stay connected with complimentary high-speed internet access and Wi-Fi, and enjoy a selection of in-room conveniences for a pleasant stay.
                  Amenities include: LED TV, luggage rack, in-room safe, complimentary water bottles, hair dryer, minibar, and a tea/coffee maker.
                </p>
              </div>
            </div>
  
            {/* Right Image */}
            <div className="col-md-6">
              <img src={slide2} Replace with your image URL alt="Car Wash" className="img-fluid rounded"
                style={{width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",}}/>
            </div>
          </div>
        </div>



        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Section 3: Image on Left, Text on Right */}
          <div className="row align-items-center mb-5">
            {/* Left Image */}
            <div className="col-md-6">
              <img src={slide3} Replace with your image URL alt="Car Wash"className="img-fluid rounded"
                style={{ width: "100%",height: "auto",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",}}/>
            </div>
  
            {/* Right Text */}
            <div className="col-md-6">
              <div style={{ border: "none",boxShadow: "0 4px 8px rgba(0,0,0,0.2)",padding: "20px",borderRadius: "10px",backgroundColor: "#fff",}}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-droplet" style={{fontSize: "2rem",color: "#007bff",}}></i>
                  </div>
                  <h3 style={{fontWeight: "bold",}}>
                    Executive Room
                  </h3>
                  <hr style={{width: "50px",border: "2px solid #007bff", margin: "10px auto",}}/>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Experience the pinnacle of luxury in our Executive Level rooms, featuring 40 square meters of refined elegance. Relax and unwind with a choice of a rejuvenating rain shower or a sumptuous bath in our opulent bathrooms. Stay seamlessly connected with high-speed internet access and Wi-Fi, and enjoy exclusive access to additional amenities for a truly exceptional stay.
                Amenities include: LED TV, luggage rack, in-room safe, complimentary water bottles, hair dryer, minibar, iron and ironing board, Nespresso machine, premium bath amenities, plush bathrobe and slippers, and a work desk with ergonomic chair.
                </p>
              </div>
            </div>
          </div>
  
          {/* Section 4: Text on Left, Image on Right */}
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6">
              <div style={{ border: "none",boxShadow: "0 4px 8px rgba(0,0,0,0.2)",padding: "20px",borderRadius: "10px",backgroundColor: "#fff",}}>
                <div className="text-center">
                  <div className="mb-3">
                    <i className="bi bi-star" style={{fontSize: "2rem",color: "#007bff"}}></i>
                  </div>
                  <h3 style={{fontWeight: "bold", }}>
                    Super-Deluxe Room
                  </h3>
                  <hr style={{width: "50px",border: "2px solid #007bff",margin: "10px auto",}}/>
                </div>
                <p style={{ fontSize: "1rem", lineHeight: "1.6" }}>
                Elevate your stay with our Super Deluxe rooms, offering 35 square meters of sophisticated comfort. Rejuvenate your senses with a revitalizing rain shower or a luxurious soak in the bathtub in our stylish bathrooms. Stay connected with complimentary high-speed internet access and Wi-Fi, and enjoy an array of premium amenities for an enhanced experience.
                Amenities include: LED TV, luggage rack, in-room safe, complimentary water bottles, hair dryer, minibar, iron and ironing board, tea/coffee maker, and a plush bathrobe and slippers.
                </p>
              </div>
            </div>
  
            {/* Right Image */}
            <div className="col-md-6">
              <img src={slide4} Replace with your image URL alt="Car Wash" className="img-fluid rounded"
                style={{width: "100%", height: "auto", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",}}/>
            </div>
          </div>
        </div>
      </section>
    );
  };

export default RoomsSection;