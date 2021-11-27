import React, { useEffect } from "react";
import {
  SerivcesContent,
  ServicesTitleBar,
  TextBox,
  Title,
  TitleBar,
  Text,
  Sections,
} from "./servicesElements";


import Website from "./Website";
import Branding from "./Branding";
import Adv from "./Adv";


import Aos from "aos";
import "aos/dist/aos.css";
import {Parallax} from 'react-scroll-parallax'

const Servieces = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <SerivcesContent name="Services" data-aos="fade-right">
        <ServicesTitleBar>
          <TitleBar data-aos="fade-up">
            <Parallax x={[5,-5]}>
            <Title>Services</Title>
            </Parallax>
            <TextBox style={{ marginLeft: "20vw", width: '70%' }} data-aos="fade-left">
              <Parallax x={[-5,5]}>
              <Text>
                Everything I can do for you is just below. Check it out.
              </Text>
              </Parallax>
            </TextBox>
          </TitleBar>
          <Sections>
          <Website />
          <Branding />
          <Adv />
          </Sections>
        </ServicesTitleBar>
      </SerivcesContent>
    </>
  );
};

export default Servieces;
