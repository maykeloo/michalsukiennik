import React, {useEffect} from "react";
import {
  Column,
  ExamplesBox,
  InformationsTitlebar,
  Row,
  TechToolsbar,
  TechToolsContent,
  Title,
} from "./techToolsElements";
import { CirclesBox, Circle, PointerIcon } from "../aboutElements";

import { Parallax } from "react-scroll-parallax";
import Aos from "aos";
import "aos/dist/aos.css";

const TechTools = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <>
      <TechToolsbar name="tech" data-aos="fade-up" data-aos-delay="200">
        <TechToolsContent>
          <InformationsTitlebar>
            <Title>
              Tech & <span style={{ marginLeft: "10vw" }}>Tools</span>
            </Title>
          </InformationsTitlebar>
          <ExamplesBox>
            <Column1 />
            <Column2 />
            <Column3 />
          </ExamplesBox>
        </TechToolsContent>
      </TechToolsbar>
      <CirclesBox>
            <Parallax y={["-90px", "50px"]}>
              <Circle to="/"style={{textDecoration: 'none', color: 'white'}}>
                <PointerIcon />
                <span style={{fontSize: '2em', fontFamily: 'Poppins'}}>Back</span>
              </Circle>
            </Parallax>
          </CirclesBox>
    </>
  );
};

const Column1 = () => {
  return (
    <Column>
      <Row>JavaScript</Row>
      <Row>React</Row>
      <Row>Redux</Row>
      <Row>GIT</Row>
      <Row>NextJS</Row>
      <Row>SASS</Row>
    </Column>
  );
};

const Column2 = () => {
  return (
    <Column>
      <Row>Styled Components</Row>
      <Row>Node.js</Row>
      <Row>CSS3</Row>
      <Row>JSON</Row>
      <Row>Adobe Illustrator</Row>
      <Row>Adobe Animate</Row>
    </Column>
  );
};

const Column3 = () => {
  return (
    <Column>
      <Row>Adobe Photoshop</Row>
      <Row>Adobe XD</Row>
      <Row>HTML</Row>
      <Row>Figma</Row>
      <Row>Wordpress</Row>
      <Row>Basics of UX</Row>
    </Column>
  );
};

export default TechTools;
