import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";

// Pages
import Navbar from "./Layouts/Navbar/Navbar";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import DigitalMarketing from "./Pages/DigitalMarketing/DigitalMarketing";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Layouts/Footer/Footer";
import Admaking from "./Pages/AdMaking/Admaking";
import Bpo from "./Pages/BPO/Bpo";

// Images
import ScrollTop from "./Assets/ScrollTop.png";

const Router = () => {
  // Window Scroll
  const Scroll = () => window.scrollTo(0, 0);

  window.addEventListener("scroll", () => {
    const AddClass = document.querySelector(".scroll-btn-fixed");
    const Value = window.scrollY;
    if (Value > 1000) {
      AddClass.classList.add("show-icon");
    } else {
      AddClass.classList.remove("show-icon");
    }
  });
  return (
    <div>
      <div className="router-nav-bar">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/marketing">
          <DigitalMarketing />
        </Route>
        <Route path="/admaking">
          <Admaking />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/bpo">
          <Bpo />
        </Route>
      </Switch>
      <Footer />
      <div onClick={Scroll} className="scroll-btn-fixed">
        <div className="scroll-btn-img">
          <img src={ScrollTop} alt="Top" />
        </div>
      </div>
    </div>
  );
};

export default Router;