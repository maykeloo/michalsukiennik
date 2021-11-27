import React, { useEffect, useState } from "react";
import {
  AboutContent,
  AboutContentBox,
  Circle,
  CirclesBox,
  Image,
  Name,
  Namebar,
  Namebox,
  PointerIcon,
  Showbar,
  Text,
  Textbar,
  Title,
  Titlebar,
} from "./aboutElements";

import { Parallax } from "react-scroll-parallax";
import Aos from "aos";
import "aos/dist/aos.css";

import ja from "../../images/ja.png";
import Examples from "./Examples/Examples";
import TechTools from "./TechTools/TechTools";
import Favorite from "./Favorite/Favorite";
import { Route, Routes } from "react-router";

const About = () => {

  return (
    <>
      <AboutContent name="About me">
        <AboutContentBox>
          <Titlebar data-aos="fade-up" data-aos-delay="200">
            <Title>About</Title>
          </Titlebar>
          <Namebar>
            <Namebox>
              <Image src={ja} data-aos="fade-up" data-aos-delay="300" />
              <Name data-aos="fade-up" data-aos-delay="700">
                Hi, I am Michał Sukiennik, a Front-end Developer from Lesser
                Poland province. <br /> I design <em>things.</em>
              </Name>
            </Namebox>
          </Namebar>
          <Textbar>
            <TextComp />
          </Textbar>
          <Routes>
            <Route path="/" element={<AboutRoute />} />
            <Route path="/more" element={<MoreAboutMe />} />
          </Routes>
        </AboutContentBox>
      </AboutContent>
    </>
  );
};

export default About;

const TextComp = () => {
  return (
    <Text>
      <div data-aos="fade-up" data-aos-delay="300">
        I am a multidisciplinary designer. My experience includes UI/UX design,
        product design, marketing design and front-end development.
      </div>
      <br />
      <br />
      <div data-aos="fade-up" data-aos-delay="400">
        As a designer, I put user needs first. I have a passion for organized
        workflows, visual language design, and solving complex problems.
      </div>
      <br />
      <br />
      <div data-aos="fade-up" data-aos-delay="500">
        I am more hands-on by profession as I have a mechatronics qualification,
        but software development has consumed me enough to stay in front of my
        desk for extended periods of time.
      </div>
    </Text>
  );
};

const AboutRoute = () => {
    useEffect(() => {
      Aos.init({ duration: 2000 });
    }, []);

  return (
    <Showbar data-aos="fade-up" data-aos-delay="200">
      <Textbar>
        <Parallax y={["-80px", "60px"]}>
          <Text style={{ zIndex: "3", fontSize: "1.7em", fontStyle: 'italic', fontWeight: 'bold' }}>
            "The most important thought I had was that I must have something
            else. I didn't want to be content with the general template. I
            wanted users to take a trip to see what it is like now and what the
            user experience will be from today."
          </Text>
        </Parallax>
      </Textbar>
      <CirclesBox>
        <Parallax y={["-90px", "50px"]}>
          <Circle to="/more" style={{textDecoration: 'none', color: 'white'}}>
            <PointerIcon />
            <span style={{fontSize: '2em', fontFamily: 'Poppins'}}>More</span>
          </Circle>
        </Parallax>
      </CirclesBox>
      <Examples />
    </Showbar>
  );
};

const MoreAboutMe = () => {
  return (
    <>
      <TechTools />
      <Favorite />
    </>
  );
};
