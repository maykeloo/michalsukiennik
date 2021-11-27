import React from "react";
import { Parallax } from "react-scroll-parallax";

import { Example, ExampleBox } from "./examplesElements";

import port2 from "../../../videos/port2.mp4";
import tip from "../../../images/tip.png";
import gitfinder from "../../../images/gifinder.png";
import sF from "../../../images/wA.png";
import { Video } from "../../Works/worksElements";

const Examples = () => {
  return (
    <>
      <ExampleBox top="20%" left="5%">
        <Parallax y={["40px", "-80px"]}>
          <Example src={gitfinder} />
        </Parallax>
      </ExampleBox>

      <ExampleBox top="80%" left="20%">
        <Parallax y={["50px", "-100px"]}>
          <Video muted autoPlay={true} loop="true" playsinline src={port2} />
        </Parallax>
      </ExampleBox>

      <ExampleBox top="30%" left="75%">
        <Parallax y={["50px", "-100px"]}>
          <Example src={tip} />
        </Parallax>
      </ExampleBox>

      <ExampleBox top="70%" left="65%">
        <Parallax y={["50px", "-100px"]}>
          <Example src={sF} />
        </Parallax>
      </ExampleBox>
    </>
  );
};

export default Examples;
