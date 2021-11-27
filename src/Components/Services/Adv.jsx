import React, {useEffect} from "react";
import {
  ServiceBox,
  ServiceTitle,
  TextBox,
  DescriptonBox,
  Text,
  VideoBox,
  Video,
  Section,
} from "./servicesElements";

import adv from "../../videos/adv.mp4";
import Aos from "aos";
import "aos/dist/aos.css";
import {Parallax} from 'react-scroll-parallax'

const Adv = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
    <Section name ='adv' data-aos="fade-up">
      <ServiceBox>
        <Parallax x={[-5,5]}>
        <ServiceTitle>Advertisements</ServiceTitle>
        </Parallax>
        <TextBox>
          <DescriptonBox>
            <Text>
              Advertisements are a guaranteed method of reaching an audience. By
              creating an engaging ad, and spending enough to reach many users,
              advertisements can have an immediate impact on business.
            </Text>
          </DescriptonBox>
          <DescriptonBox>
            <Text>
              Your complete online action strategy to bring order to your
              marketing chaos.
            </Text>
          </DescriptonBox>
        </TextBox>
        <VideoBox data-aos="fade-left">
          <Video src={adv} muted autoPlay="true" loop="true" />
        </VideoBox>
      </ServiceBox>
      </Section>
    </>
  );
};

export default Adv;
