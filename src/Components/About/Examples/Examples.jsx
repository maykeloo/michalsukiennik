import React from "react";
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

import video from "../../../videos/webdesign.mp4";

const Examples = () => {
  return (
    <>
      <Content>
        <Textbox>
          <Text>
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
            <Parallax y={["-90px", "50px"]}>
              <Circle to="/more" style={{ textDecoration: "none", color: "white" }}>
                <PointerIcon style={{ fontSize: "2.5em" }} />
                <span style={{ fontSize: "1em", fontFamily: "Poppins" }}>
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
