import React from "react";
import "./Icons.css";

// Images
import Call from "../../Assets/images/Call_Svg.png";
import WhatsApp from "../../Assets/images/WhatsApp_Svg.png";
const Icons = () => {
  return (
    <div className="Icon_page">
      <div className="icon-call">
        <img src={Call} alt="" />
      </div>
      <div className="icon-whatsapp">
        <img src={WhatsApp} alt="" />
      </div>
    </div>
  );
};

export default Icons;
