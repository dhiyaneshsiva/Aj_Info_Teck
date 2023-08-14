import React, { useState } from "react";
import "./Footer.css";
import { Link, useHistory } from "react-router-dom";

// Mantine COre
import { Card, Container } from "@mantine/core";

// Image
import Logo from "../../Assets/Assets/FooterLogo.png";
import Facebook from "../../Assets/Social_Media/FB.png";
import Instagram from "../../Assets/Social_Media/Insta.png";
import { MapPin } from "tabler-icons-react";

const Footer = () => {
  const History = useHistory();

  const [activeBar, setActiveBar] = useState(History.location.pathname);
  return (
    <div>
      <div className="footer-page">
        <div className="footer-container">
          <div className="footer-container-grid">
            <Card
              className="footer-container-grid-card"
            >
              <div className="footer-logo">
                <img src={Logo} alt="Aj-Info-Teck" />
              </div>
            </Card>
            <Card
              className="footer-container-grid-card"
            >
              <div>
                <h3>About AJ InfoTeck</h3>
                <p>
                  Dominate the Digital Landscape with AJ InfoTeck 's Expert
                  Marketing Strategies. Your Gateway to Digital Success Find out
                  the key to the World
                  <br />
                  <p>Contact :- +91 8122788484</p>
                </p>
                <span className="footer-social-media">
                  <a
                    href="https://www.facebook.com/AJinfoteckdigitalmarketing"
                    target="_blank"
                  >
                    <img src={Facebook} alt="Facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/aj_infoteck/"
                    target="_blank"
                  >
                    <img src={Instagram} alt="Instagram" />
                  </a>
                </span>
              </div>
            </Card>
            <Card
              className="footer-container-grid-card"
            >
              <div>
                <h3>Quick Links</h3>
                <ul>
                  <li className="footer-nav-links">
                    <Link
                      className={`link-text-none ${
                        activeBar == "/" ? "active-nav" : ""
                      }`}
                      onClick={() => {
                        window.location.reload(History.push("/"));
                      }}
                      to="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="footer-nav-links">
                    <Link
                      className={`link-text-none ${
                        activeBar == "/about" ? "active-nav" : ""
                      }`}
                      onClick={() => {
                        window.location.reload(History.push("/about"));
                      }}
                      to="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li className="footer-nav-links">
                    <Link
                      className={`link-text-none ${
                        activeBar == "/marketing" ? "active-nav" : ""
                      }`}
                      onClick={() => {
                        window.location.reload(History.push("/marketing"));
                      }}
                      to="/marketing"
                    >
                      Digital Marketing
                    </Link>
                  </li>
                  <li className="footer-nav-links">
                    <Link
                      className={`link-text-none ${
                        activeBar == "/admaking" ? "active-nav" : ""
                      }`}
                      onClick={() => {
                        window.location.reload(History.push("/admaking"));
                      }}
                      to="/admaking"
                    >
                      Ad's Making
                    </Link>
                  </li>
                  <li className="footer-nav-links">
                    <Link
                      className={`link-text-none ${
                        activeBar == "/bpo" ? "active-nav" : ""
                      }`}
                      onClick={() => {
                        window.location.reload(History.push("/bpo"));
                      }}
                      to="/bpo"
                    >
                      BPO
                    </Link>
                  </li>
                  <li className="footer-nav-links">
                    <Link
                      className={`link-text-none ${
                        activeBar == "/contact" ? "active-nav" : ""
                      }`}
                      onClick={() => {
                        window.location.reload(History.push("/contact"));
                      }}
                      to="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </Card>
            {activeBar !== "/contact" ? (
              <Card
                className="footer-container-grid-card"
              >
                <Container size={"100%"} style={{ padding: "2rem 1rem" }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9142674928726!2d77.7326928!3d8.699691599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04135e313d5495%3A0xb07b24533e63b70d!2sAJ%20INFOTECK!5e0!3m2!1sen!2sin!4v1691334170737!5m2!1sen!2sin"
                    width="100%"
                    height="250"
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                  ></iframe>
                </Container>
              </Card>
            ) : (
              <Card className="footer-container-grid-card">
                <div>
                  <h3>Address</h3>
                  <address>
                    <MapPin size={20} strokeWidth={1} color={"black"} />
                    13/1A, 2nd Floor,
                    <br />
                    STC College Road,
                    <br />
                    Perumalpuram,
                    <br />
                    Tirunelveli - 627 007,
                    <br />
                    Tamil Nadu.
                  </address>
                </div>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
