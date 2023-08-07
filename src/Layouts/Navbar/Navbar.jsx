import React, { useEffect, useRef, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import "./Navbar.css";

// Images
// import BrandLogo from "../../Assets/Assets/Logo/Logo.png";
import BrandLogo from "../../Assets/Assets/LogoAJ.png";

// Icons
import { ChevronDown, Menu2, X } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";

const Navbar = () => {
  // History
  const History = useHistory();

  // useReff
  const MenuRef = useRef();

  // UseState
  const [menuBar, setMenuBar] = useState(true);
  const [activeBar, setActiveBar] = useState(History.location.pathname);

  // Media Condition
  const Media768px = useMediaQuery("(max-width:768px)");

  // useEffect
  useEffect(() => {
    if (Media768px) {
      setMenuBar(true);
    }
  }, [Media768px]);

  useEffect(() => {
    const AddClass = document.querySelector(".nav-bar-container-right-list-ul");
    if (menuBar !== true) {
      AddClass.classList.add("display-block");
    } else {
      AddClass.classList.remove("display-block");
    }
  }, [menuBar]);

  useEffect(() => {
    let hanlder = (e) => {
      MenuRef.current.contains(e.target);
      if (MenuRef.current.contains(e.target) !== true) {
        setMenuBar(true);
      }
    };
    document.addEventListener("mousedown", hanlder);
    return () => {
      document.removeEventListener("mousedown", hanlder);
    };
  });

  return (
    <div>
      <div className="nav-bar-page">
        <div className="nav-bar-container">
          <div className="nav-bar-container-left">
            <div className="nav-bar-container-left-logo">
              <img src={BrandLogo} alt="Aj Info Teck" />
            </div>
          </div>
          <div className="nav-bar-container-right">
            <div className="nav-bar-container-right-list">
              <ul className="nav-bar-container-right-list-ul" ref={MenuRef}>
                <li>
                  <Link
                    to="/"
                    className={`link-text-none ${
                      activeBar == "/" ? "active-nav" : ""
                    }`}
                    onClick={() => {
                      window.location.reload(History.push("/"));
                    }}
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`link-text-none ${
                      activeBar == "/about" ? "active-nav" : ""
                    }`}
                    onClick={() => {
                      window.location.reload(History.push("/about"));
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link-text-none ${
                      activeBar == "/marketing" ? "active-nav" : ""
                    }`}
                    onClick={() => {
                      window.location.reload(History.push("/marketing"));
                    }}
                    to="/marketing"
                  >
                    DIGITAL MARKETING
                  </Link>
                  {/* <ChevronDown strokeWidth={1} /> */}
                  {/* <ul className="nav-bar-container-right-list-dropdown">
                    <li className="nav-bar-container-right-ul-li">Social Media Marketing</li>
                    <li className="nav-bar-container-right-ul-li">Logo designing</li>
                    <li className="nav-bar-container-right-ul-li">Website Development</li>
                    <li className="nav-bar-container-right-ul-li">Application Development</li>
                    <li className="nav-bar-container-right-ul-li">SEO</li>
                    <li className="nav-bar-container-right-ul-li">EMAIL marketing</li>
                  </ul>*/}
                </li>
                <li>
                  <Link
                    className={`link-text-none ${
                      activeBar == "/admaking" ? "active-nav" : ""
                    } `}
                    onClick={() => {
                      window.location.reload(History.push("/admaking"));
                    }}
                    to="/admaking"
                  >
                    AD's MAKING
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link-text-none ${
                      activeBar == "/bpo" ? "active-nav" : ""
                    } `}
                    onClick={() => {
                      window.location.reload(History.push("/bpo"));
                    }}
                    to="/admaking"
                  >
                    BPO
                  </Link>
                </li>
                <li>
                  <Link
                    className={`link-text-none ${
                      activeBar == "/contact" ? "active-nav" : ""
                    }`}
                    onClick={() => {
                      window.location.reload(History.push("/contact"));
                    }}
                    to="/contact"
                  >
                    CONTACT US
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="nav-bar-container-menu-icon">
            {menuBar ? (
              <Menu2 size={35} onClick={() => setMenuBar(false)} />
            ) : (
              <X size={35} onClick={() => setMenuBar(true)} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
