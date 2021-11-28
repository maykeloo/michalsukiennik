import React, { useState, useEffect } from "react";
import About from "../About/About";
import Header from "../Header/Header";
import Servieces from "../Services/Servieces";
import Sidebar from "../Sidebar/Sidebar";
import { Home } from "./applicationElements";

import { ParallaxProvider } from "react-scroll-parallax";
import { HashRouter } from "react-router-dom";
import Works from "../Works/Works";
import Contact from "../Contanct/Contact";

const Application = () => {
  const [visibility, setVisible] = useState(false);
  const setVisibleHandler = () => setVisible(!visibility);


  useEffect(() => {
    const cursor = document.querySelector(".cursor");

    document.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
      );
    });
  }, []);

  return (
    <>
      <HashRouter>
        <ParallaxProvider>
          <Home>
            <div className="cursor"></div>
            <Sidebar
              visibility={visibility}
              setVisibleHandler={setVisibleHandler}
            />
            <Header
              visibility={visibility}
              setVisibleHandler={setVisibleHandler}
            />
            <Servieces />
            <About />
            <Works />
            <Contact />
          </Home>
        </ParallaxProvider>
      </HashRouter>
    </>
  );
};

export default Application;
