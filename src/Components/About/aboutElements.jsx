import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

import {FaRegHandPointer} from 'react-icons/fa'

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
  
`

export const AboutContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin-top: 100px;
`;

export const AboutContentBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Titlebar = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
`;

export const Title = styled.h3`
  margin: 0;
  font-size: 10vw;
  color: #ffbd00;
  z-index: 3;
`;

export const Namebar = styled.div`
  width: 40%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-end;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: -300px;
  z-index: 0;
  width: 50%;
  transform: ${props => props.scale};

  @media screen and (max-width: 1200px) {
    left: 150px;
    bottom: 100px;
  }
`;

export const Namebox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  transform: ${props => props.scale};
`;

export const Name = styled.span`
  margin-top: 40px;
  font-size: 3vw;
  z-index: 1;
  transition: 0;

  @media screen and (max-width: 1200px) {
    margin-top: 0;
    font-size: 8vw;
  }
`;

export const Textbar = styled.div`
  width: 40%;
  margin-top: 100px;
  display: flex;
  z-index: 10;
  font-family: "Poppins", Halvetica, sans-serif;

  @media screen and (max-width: 1200px) {
    margin-top: 30px;
    width: 100%;
  }
`;

export const Text = styled.span`
  font-size: 2vw;
  text-align: justify;

  @media screen and (max-width: 1200px) {
    font-size: 5vw;
  }
`;
export const Showbar = styled.div`
  width: 100%;
  height: 100vh;
  margin-top: 10vh;
  display: flex;
  justify-content: flex-start;
`;

export const CirclesBox = styled.div`
  cursor: pointer;
  transition: 0.4s;
  z-index: 300;
  margin-top: 30px;
  width: 50%;

  &:hover {
      transform: scale(1.2) rotate(45deg);
    }
`;

export const Circle = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffd100;
    width: 15em;
    height: 15em;
    border-radius: 50%;
    animation: ${rotate} 7s infinite;
    display: flex;
    flex-direction: column;


    @media screen and (max-width: 1200px)
    {
      width: 7em;
      height: 7em;
    }
`

export const PointerIcon = styled(FaRegHandPointer)`
  color: white;
  font-size: 6em;

  
  @media screen and (max-width: 1200px)
    {
      font-size: 3em;
    }
`
