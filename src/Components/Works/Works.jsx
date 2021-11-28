import React from "react";
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
  return (
    <>
      <WorksComponent name="Works">
        <Worksbar>
          <Titlebar>
            <Title>Works</Title>
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
  return (
    <>
      <Columns>
        <TileColumn style={{ marginTop: "100px" }}>
            <Tile to="/gitfinder">
              <Videobar>
                <Video
                  src={gitfinder}
                  muted
                  autoPlay={true}
                  loop="true"
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

            <Tile to="/weather">
              <Videobar>
                <Video
                  src={weather}
                  muted
                  autoPlay={true}
                  loop="true"
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
            <Tile to="/tipcalc">
              <Videobar>
                <Video
                  src={tip}
                  muted
                  autoPlay={true}
                  loop="true"
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

            <Tile to="/portfolio">
              <Videobar>
                <Video
                  src={port}
                  muted
                  autoPlay={true}
                  loop="true"
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
