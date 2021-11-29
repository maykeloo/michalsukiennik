import styled from "styled-components";
import { Link } from "react-scroll";
import {FiArrowDown} from 'react-icons/fi'

import darkLogo from "../../images/darkLogo.png";

export const HeaderContent = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const Navbar = styled.nav`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 50px;
  z-index: 900;

  @media screen and (max-width: 1200px) {
    position: fixed;
    top: 30px;
    width: 80%;
  }
`;
export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 95%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Logobar = styled(Link)`
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

export const Logo = styled.img.attrs(() => ({
  src: `${darkLogo}`,
}))`
  width: 70px;
`;

export const MenuBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    height: 20px;
    margin-right: 20px;
    transition: 0.2s;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    padding: 0;

    &:hover {
      transform: scale(1.1) > span {
        width: 5px;
      }
    }
  }
`;

export const Line1 = styled.span`
  display: block;
  transition: 0.2s;
  transform-origin: left;
  width: 25px;
  height: 2px;
  background-color: black;
  transform: rotate(${(props) => (props.visibility ? "45deg" : "0")});
`;
export const Line2 = styled.span`
  display: block;
  transition: 0.2s;
  opacity: ${(props) => (props.visibility ? "0" : "1")};
  width: 25px;
  height: 2px;
  background-color: black;
`;
export const Line3 = styled.span`
  display: block;
  transform-origin: left;
  transition: 0.2s;
  width: 25px;
  height: 2px;
  background-color: black;
  transform: rotate(${(props) => (props.visibility ? "-45deg" : "0")});
`;

export const MenuTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  font-size: 1.1vw;
  margin-bottom: 30px;
`;

export const MenuOption = styled(Link)`
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;
  font-size: 1.1vw;
  font-family: 'Poppins',Halvetica, sans-serif;

  &:hover {
    letter-spacing: 5px;
  }
`;

export const VideoBox = styled.div`
    width: 95%;
    height: 90%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      transition: 1.4s;
      transition-timing-function: ease-in-out;
      width: ${props => props.width};
      height: 90%;
      bottom: 0;
      right: 0;
      background-color: #f4f1de;
    }

    &:before {
      width: 100%;
      height: 100%;
    }
  
    @media screen and (max-width: 1200px) {
      position: absolute;
      width: 40vw;
      height: 90vh;
      right: 100px;
      bottom: 30vh;
    }

    @media screen and (max-width: 600px) {
      position: absolute;
      width: 100vw;
      height: 40vh;
      right: 0;
      bottom: 5vh;
    }
`

export const VideoCont = styled.video`
  width: 90%;
  height: 90%;
  object-fit: cover;


  &::-webkit-media-controls {
  display: none;
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ArrowCircle = styled(Link)`
  display: none;

  @media screen and (max-width: 1200px)
  {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffd100;
    width: 25vw;
    height: 25vw;
    border-radius: 50%;
  }
`

export const TextBox = styled.div`
  width: 80%;
  margin-top: 150px;
  margin-left: 50px;
  position: relative;
`;

export const TitleBar = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
  font-family: 'Poppins', Halvetica, serif;
  margin: 0;
`;

export const SmallTitleBar = styled.div`
  width: 80%;
  height: 40%;
  margin: 0;

  @media screen and (max-width: 1300px) {
    width: 90%;
  }
`;

export const SmallTitle = styled.h1`
  font-size: 8rem;
  font-weight: 700;
  margin: 0;
  height: 30vh;

  @media screen and (max-width: 1500px) {
    font-size: 5rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 15vw;
  }
`;

export const DescriptionBox = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;

export const DescriptionText = styled.span`
  font-size: 30px;

  @media screen and (max-width: 1300px) {
    font-size: 22px;
  }
`;

export const Arrow = styled(FiArrowDown)`
  color: white;
  font-size: 10vw;
  transition: 0.3s;
  
  &:hover {
    transform: scale(1.4);
  }
`