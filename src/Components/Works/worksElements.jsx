import styled, {keyframes} from "styled-components";
import {Link} from 'react-router-dom';

import { AiOutlineArrowRight } from "react-icons/ai";
import {FaRegHandPointer} from 'react-icons/fa'

const rotate = keyframes`
  0% {
    transform: rotate(0);
  }

  100% {
    transform: rotate(360deg);
  }
  
`

export const WorksComponent = styled.section`
  width: 100vw;
  margin-top: 40vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  position: relative;

  @media screen and (max-width: 1200px)
  {
    margin-top: 10vh;
  }
`;

export const Worksbar = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Titlebar = styled.div`
  width: 100%;
`;

export const WorksContent = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;

export const Textbar = styled.div`
  width: 50%;
  height: 35vh;
  text-align: right;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
    position: relative;
    height: 15vh;
  }
`;

export const OpenText = styled.span`
  font-size: 10em;
  z-index: 4;

  @media screen and (max-width: 1200px)
  {
    font-size: 4em;
  }
`;

export const Columns = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
  }
`

export const TileColumn = styled.div`
  width: 40%;
  display:flex;
  flex-direction: column;
  gap: 100px;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
    gap: 0;
  }
`;

export const Tile = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    #arrowbox {
      &:after {
        position: absolute;
        content: "";
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #ffc300;
        width: 60px;
        height: 60px;
        border-radius: 50%;
      }
    }

    #arrow {
      transform: rotate(-45deg);
    }
  }
`;

export const Videobar = styled.div`
  width: 100%;
`;

export const Video = styled.video`
  width: 100%;

  @media screen and (max-width: 1200px)
  {
    width: 100%;
  }
  
`;
export const WorkTitlebar = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const WorkTitle = styled.span`
  font-family: "Poppins", Halvetica, sans-serif;
  font-weight: bold;
  font-size: 5em;
  color: black;
  text-decoration: underline;

  @media screen and (max-width: 1200px)
  {
    font-size: 2em;
  }
`;

export const ArrowBox = styled.div.attrs(() => ({
  id: "arrowbox",
}))`
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 1200px)
  {
    display: none;
  }

  &:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffc300;
    width: 0px;
    height: 0px;
    transition: 0.2s;
  };
`;

export const Arrow = styled(AiOutlineArrowRight).attrs(() => ({
  id: "arrow",
}))`
  transition: 0.2s;
  color: black;
  font-size: 2em;
  z-index: 1;
`;

export const ArrowBoxMobile = styled.div`
  display: none;

  @media screen and (max-width: 1200px)
  {
  width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffc300;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: 0.2s;
  }
  }

`;

export const ArrowMobile = styled(AiOutlineArrowRight).attrs(() => ({
  id: "arrow",
}))`
  transition: 0.2s;
  color: black;
  font-size: 2em;
  z-index: 1;
`;


export const Descriptionbar = styled.div`
  width: 100%;
`
export const Description = styled.span`
  font-family: 'Poppins', Halvetica, sans-serif;
  font-size: 1.5em;
`

export const Datebar = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`

export const Date = styled.span`
  font-family: 'Poppins', Halvetica, sans-serif;
  font-size: 1.2em;
`

export const CirclesBox = styled.div`
  cursor: pointer;
  transition: 0.4s;
  z-index: 300;
  margin-top: 30px;
  position: absolute; 
  right: 0;
  bottom: 15vh;

  &:hover {
      transform: scale(1.2) rotate(45deg);
    }
`;

export const Circle = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffd100;
    width: 7em;
    height: 7em;
    border-radius: 50%;
    animation: ${rotate} 7s infinite;
    display: flex;
    flex-direction: column;


    @media screen and (max-width: 1200px)
    {
      width: 5em;
      height: 5em;
    }
`

export const PointerIcon = styled(FaRegHandPointer)`
  color: white;
  font-size: 6em;

  
  @media screen and (max-width: 1200px)
    {
      font-size: 2em;
    }
`

