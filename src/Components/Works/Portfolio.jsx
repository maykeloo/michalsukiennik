import React, {useEffect} from "react";
import {
  Content,
  Descriptionbar,
  Description,
  MoreInfoBox,
  Typebar,
  Videobar,
  Informationsbar,
  InformationsBox,
  InfoTile,
  InfoTitle,
  Info,
} from "./moreInfoElements";
import { Video } from "./worksElements";
import {
  InformationsTitlebar,
  Title,
} from "../About/Favorite/favotriteElements";
import { CirclesBox, Circle, PointerIcon } from "./worksElements";


import Aos from "aos";
import "aos/dist/aos.css";


import port from "../../videos/port.mp4";

const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

  return (
    <>
      <MoreInfoBox>
        <Content data-aos="fade-up" data-aos-delay="200">
          <Videobar>
            <InformationsTitlebar>
              <Typebar>Website</Typebar>
              <Title>Portfolio</Title>
              <CirclesBox>
                  <Circle
                    to="/"
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <PointerIcon style={{ fontSize: "2.5em"}}/>
                    <span style={{ fontSize: "1em", fontFamily: "Poppins"}}>
                      Back
                    </span>
                  </Circle>
              </CirclesBox>
            </InformationsTitlebar>
            <Video
            data-aos="fade-left" data-aos-delay="200"
            style ={{width: '60%'}}
              src={port}
              muted
              autoPlay={true}
              loop="true"
              playsinline
            />
          </Videobar>
          <Descriptionbar>
            <Description>
            First portfolio idea.
            </Description>
          </Descriptionbar>
          <Informationsbar>
            <InformationsBox>
              <InfoTile>
                <InfoTitle>Website</InfoTitle>
                <Info>
                  <a href="https://maykeloo.github.io/gitapi/" target="_blank" rel="noreferrer">
                    https://maykeloo.github.io/gitapi/
                  </a>
                </Info>
              </InfoTile>
              <InfoTile>
                <InfoTitle>Project date</InfoTitle>
                <Info>August, 2021</Info>
              </InfoTile>
            </InformationsBox>
          </Informationsbar>
        </Content>
      </MoreInfoBox>
    </>
  );
};

export default Portfolio;
