import React, { useEffect } from "react";
import {
  Content,
  ContentBox,
  DescriptionBox,
  DescriptionText,
  HeaderContent,
  Line1,
  Line2,
  Line3,
  Logo,
  Logobar,
  MenuBox,
  MenuOption,
  MenuTitle,
  MobileMenu,
  Navbar,
  SmallTitle,
  SmallTitleBar,
  TextBox,
  Title,
  TitleBar,
  VideoBox,
  VideoCont,
} from "./headerElements";

import Aos from "aos";
import "aos/dist/aos.css";
import Typewriter from "typewriter-effect";

import video from "../../videos/pexels-koolshooters-6976213 (1).mp4";
import { Animator, ScrollContainer, ScrollPage, MoveOut } from "react-scroll-motion";

const Header = ({setVisibleHandler, visibility}) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const menuOptions = ["About me", "Works", "Contact", "Services"];
  const menuOption = menuOptions.map((option) => (
    <MenuOption>{option}</MenuOption>
  ));


  return (
    <>
    <ScrollContainer>
      <HeaderContent>
        <ContentBox>
          <Content>
            <Navbar data-aos="fade-down">
              <Logobar>
                <Logo />
              </Logobar>
              <Animator animation = {MoveOut(0, -1000)}>
              <MenuBox>
                <MenuTitle>Menu</MenuTitle>
                {menuOption}
              </MenuBox>
              </Animator>
              <MobileMenu onClick = {setVisibleHandler} visibility={visibility}>
                  <Line1 visibility={visibility}></Line1>
                  <Line2 visibility={visibility}></Line2>
                  <Line3 visibility={visibility}></Line3>
              </MobileMenu>
            </Navbar>
            <ScrollPage page={0}>
              <Animator animation = {MoveOut(0, -1000)}>
            <TextBox>
              <TitleBar data-aos="fade-up" data-aos-delay="200">
                <Title>Everybody kills boredom in a different way.</Title>
              </TitleBar>
              <SmallTitleBar data-aos="fade-up" data-aos-delay="400">
                <SmallTitle>
                  <Typewriter
                    options={{
                      strings: ["Mine is the front-end."],
                      autoStart: true,
                      loop: true,
                      pauseFor: '1500',
                      cursorClassName: 'cursorType'
                    }}
                  />
                </SmallTitle>
              </SmallTitleBar>
              <DescriptionBox data-aos="fade-up" data-aos-delay="600">
              <Animator animation = {MoveOut(0, -300)}>
                <DescriptionText>
                  Concept, interactions, software engeneering, UI & graphics
                  design, creative development.
                </DescriptionText>
                </Animator>
              </DescriptionBox>
            </TextBox>
            </Animator>
            </ScrollPage>
          </Content>
        </ContentBox>
        <Animator animation = {MoveOut(0, -2000)}>
        <VideoBox data-aos="fade-left">
          <VideoCont src={video} muted autoPlay="true" loop="true" />
        </VideoBox>
        </Animator>
      </HeaderContent>
      </ScrollContainer>
    </>
  );
};

export default Header;
