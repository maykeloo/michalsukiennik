import React from "react";
import { Title } from "../About/aboutElements";
import {
  Arrow,
  ArrowBox,
  ArrowBoxMobile,
  ArrowMobile,
  Columns,
  Date,
  Datebar,
  Description,
  Descriptionbar,
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
import { Parallax } from "react-scroll-parallax";
import { Routes, Route } from "react-router";
import Gitfinder from "./Gitfinder";
import TipCalc from './TipCalc'

const Works = () => {
  return (
    <>
      <WorksComponent name="Works">
        <Worksbar>
          <Titlebar>
            <Title>Works</Title>
          </Titlebar>
          <WorksContent>
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
            <Routes>
              <Route path="/" element={<Tiles />} />
              <Route path="/gitfinder" element={<Gitfinder />} />
              <Route path="/tipcalc" element={<TipCalc/>} />
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
          <Parallax y={["200px", "-300px"]}>
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
              </WorkTitlebar>
              <Datebar>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </Datebar>
            </Tile>
          </Parallax>

          <Parallax y={["300px", "-100px"]}>
            <Tile to="/tipcalc">
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
              </WorkTitlebar>
              <Descriptionbar>
                <Description>
                  My first ever React web app. It is bad, but FIRST! It shows
                  the weather from all over the world in real time.
                </Description>
              </Descriptionbar>
              <Datebar>
                <Date>February, 2021</Date>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </Datebar>
            </Tile>
          </Parallax>
        </TileColumn>

        <TileColumn style={{ marginTop: "40vh" }}>
          <Parallax y={["500px", "-200px"]}>
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
              </WorkTitlebar>
              <Descriptionbar>
                <Description>
                  Application for calculating the amount of tips per person.
                </Description>
              </Descriptionbar>
              <Datebar>
                <Date>March, 2021</Date>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </Datebar>
            </Tile>
          </Parallax>

          <Parallax y={["200px", "-200px"]}>
            <Tile to="/info">
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
              </WorkTitlebar>
              <Descriptionbar>
                <Description>First portfolio idea.</Description>
              </Descriptionbar>
              <Datebar>
                <Date>August, 2021</Date>
                <ArrowBoxMobile>
                  <ArrowMobile />
                </ArrowBoxMobile>
              </Datebar>
            </Tile>
          </Parallax>
        </TileColumn>
      </Columns>
    </>
  );
};

export default Works;
