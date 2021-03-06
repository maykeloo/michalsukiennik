import React, {useEffect} from "react";
import {
  Circlebar,
  Content,
  Text,
  Textbox,
  Video,
  Videocolumn,
} from "./examplesElements";
import { CirclesBox, Circle, PointerIcon } from "../aboutElements";

import { Parallax } from "react-scroll-parallax";
import Aos from "aos";
import "aos/dist/aos.css";

import video from "../../../videos/webdesign.mp4";

const Examples = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  
  return (
    <>
      <Content>
        <Textbox>
          <Text data-aos="fade-up" ata-aos-delay="200">
            "The most important thought I had was that I must have something
            else. I didn't want to be content with the general template. I
            wanted users to take a trip to see what it is like now and what the
            user experience will be from today."
          </Text>
        </Textbox>
        <Videocolumn>
          <Video src={video} muted autoPlay={true} loop="true" playsinline />
        </Videocolumn>
        <Circlebar>
          <CirclesBox>
            <Parallax y={["-200px", "100px"]}>
              <Circle to="/more" style={{ textDecoration: "none", color: "white" }}>
                <PointerIcon />
                <span style={{ fontSize: "1.5em", fontFamily: "Poppins" }}>
                  More
                </span>
              </Circle>
            </Parallax>
          </CirclesBox>
        </Circlebar>
      </Content>
    </>
  );
};

export default Examples;
