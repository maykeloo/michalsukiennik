import React, {useEffect} from "react";
import { Title } from "../About/aboutElements";
import {
  Arrow,
  ArrowBox,
  ArrowBoxMobile,
  ArrowMobile,
  Columns,
  Datebar,
  OpenText,
  Textbar,
  Tile,
  TileColumn,
  Titlebar,
  Video,
  Videobar,
  Worksbar,
  WorksComponent,
  WorksContent,
  WorkTitle,
  WorkTitlebar,
} from "./worksElements";

import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

import gitfinder from "../../videos/gitfinder.mp4";
import weather from "../../videos/weather.mp4";
import port from "../../videos/port.mp4";
import tip from "../../videos/tip.mp4";
import { Routes, Route } from "react-router";
import Gitfinder from "./Gitfinder";
import TipCalc from './TipCalc'
import WeatherApp from "./WeatherApp";
import Portfolio from "./Portfolio";


const Works = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <WorksComponent name="Works">
        <Worksbar>
          <Titlebar>
            <Title data-aos="fade-up" data-aos-delay="200">Works</Title>
            <Textbar>
              <OpenText>
                <Typewriter
                  options={{
                    strings: ["Some of mine."],
                    autoStart: true,
                    loop: true,
                    pauseFor: "2500",
                    cursorClassName: "cursorType",
                  }}
                />
              </OpenText>
            </Textbar>
          </Titlebar>
          <WorksContent>
            <Tiles />
            <Routes>
              <Route path="/gitfinder" element={<Gitfinder />} />
              <Route path="/tipcalc" element={<TipCalc/>} />
              <Route path="/weather" element={<WeatherApp/>} />
              <Route path="/portfolio" element={<Portfolio/>} />
            </Routes>
          </WorksContent>
        </Worksbar>
      </WorksComponent>
    </>
  );
};

const Tiles = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Columns>
        <TileColumn style={{ marginTop: "100px" }}>
            <Tile to="/gitfinder" data-aos="fade-up" data-aos-delay="200">
              <Videobar>
                <Video
                  src={gitfinder}
                  muted
                  autoPlay={true}
                  loop={true}
                  playsinline
                />
              </Videobar>
              <WorkTitlebar>
                <WorkTitle>Gitfinder</WorkTitle>
                <ArrowBox>
                  <Arrow />
                </ArrowBox>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </WorkTitlebar>
              <Datebar>
              </Datebar>
            </Tile>

            <Tile to="/weather" data-aos="fade-up" data-aos-delay="200">
              <Videobar>
                <Video
                  src={weather}
                  muted
                  autoPlay={true}
                  loop={true}
                  playsinline
                />
              </Videobar>
              <WorkTitlebar>
                <WorkTitle>WeatherApp</WorkTitle>
                <ArrowBox>
                  <Arrow />
                </ArrowBox>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </WorkTitlebar>
              <Datebar>
              </Datebar>
            </Tile>
        </TileColumn>

        <TileColumn>
            <Tile to="/tipcalc" data-aos="fade-up" data-aos-delay="400">
              <Videobar>
                <Video
                  src={tip}
                  muted
                  autoPlay={true}
                  loop={true}
                  playsinline
                />
              </Videobar>
              <WorkTitlebar>
                <WorkTitle>TipCalc</WorkTitle>
                <ArrowBox>
                  <Arrow />
                </ArrowBox>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </WorkTitlebar>
              <Datebar>
              </Datebar>
            </Tile>

            <Tile to="/portfolio" data-aos="fade-up" data-aos-delay="400">
              <Videobar>
                <Video
                  src={port}
                  muted
                  autoPlay={true}
                  loop={true}
                  playsinline
                />
              </Videobar>
              <WorkTitlebar>
                <WorkTitle>Portfolio</WorkTitle>
                <ArrowBox>
                  <Arrow />
                </ArrowBox>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </WorkTitlebar>
              <Datebar>
              </Datebar>
            </Tile>
        </TileColumn>
      </Columns>
    </>
  );
};

export default Works;
