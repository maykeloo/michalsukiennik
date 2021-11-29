import React from "react";
import {
  ServiceBox,
  CirclesBox,
  Circle,
  ServiceTitle,
  TextBox,
  DescriptonBox,
  Text,
  VideoBox,
  Video,
  Section,
} from "./servicesElements";
import circle from "../../images/circle.svg";
import website from "../../videos/website.mp4";
import {Parallax} from 'react-scroll-parallax'

const Website = () => {
  return (
    <>
      <Section>
        <ServiceBox>
          <CirclesBox to="branding" smooth={true} duration={1500}>
            <Circle src={circle} />
          </CirclesBox>
          <Parallax x={[-10,5]}>
          <ServiceTitle>Websites</ServiceTitle>
          </Parallax>
          <TextBox>
            <DescriptonBox>
              <Text>Tailored to your needs and for every purpose.</Text>
            </DescriptonBox>
            <DescriptonBox>
            <Text>
              Web design is not just a job, but a mission to build your
              professional image online. I will create an effective and
              professional website for you. It can be a small website project as
              well as a complex web service
            </Text>
            </DescriptonBox>
          </TextBox>
          <VideoBox data-aos="fade-left">
            <Video src={website} muted autoPlay={true} loop={true} />
          </VideoBox>
        </ServiceBox>
      </Section>
    </>
  );
};

export default Website;
