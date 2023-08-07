import React from "react";
import "./Icons.css";

// Images
import Call from "../../Assets/images/Call_Svg.png";
import WhatsApp from "../../Assets/images/WhatsApp_Svg.png";
const Icons = () => {
  return (
    <div className="Icon_page">
      <div className="icon-call">
        <a href="tel:+91 81227 88484">
          <img src={Call} alt="" />
        </a>
      </div>
      <div className="icon-whatsapp">
        <a href="https://wa.me/+918122788484">
          <img src={WhatsApp} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Icons;
