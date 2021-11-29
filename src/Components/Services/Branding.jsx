import React, {useEffect} from "react";
import {
  CirclesBox,
  Circle,
  ServiceBox,
  ServiceTitle,
  TextBox,
  DescriptonBox,
  Text,
  VideoBox,
  Video,
  Section,
} from "./servicesElements";
import branding from "../../videos/branding.mp4";
import circle from "../../images/circle.svg";

import Aos from "aos";
import "aos/dist/aos.css";
import {Parallax} from 'react-scroll-parallax'

const Branding = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    <Section name = 'branding' data-aos="fade-up">
      <ServiceBox>
        <CirclesBox to = 'adv' smooth = {true} duration = {1500}>
          <Circle src={circle} />
        </CirclesBox>
        <Parallax x={[5,-5]}>
        <ServiceTitle>Branding</ServiceTitle>
        </Parallax>
        <TextBox>
          <DescriptonBox>
            <Text>
              Building your brand from scratch or carry out its rebranding.
              Creating the body and soul of your company, which will be a key
              step in the fight for a strong strategy of maintaining or
              achieving a high position in the market.
            </Text>
          </DescriptonBox>
          <DescriptonBox>
            <Text>
            A good idea without thoughtful implementation is worth nothing. Creative activities are ALWAYS based on a solid strategy.
            </Text>
          </DescriptonBox>
        </TextBox>
        <VideoBox data-aos="fade-left">
          <Video src={branding} muted autoPlay={true} loop={true} />
        </VideoBox>
      </ServiceBox>
      </Section>
    </>
  );
};

export default Branding;
