import { Link } from "react-scroll";
import styled from "styled-components";

export const SerivcesContent = styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Sections = styled.div`
  margin-top: 100px;
`;

export const ServicesTitleBar = styled.div`
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 10vw;
  margin: 0;
  color: #ffbd00;
`;

export const TitleBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

export const ServiceBox = styled.div`
  width: 90vw;
  height: 90vh;
  position: relative;

  @media screen and (max-width: 1200px) {
    height: 90vh;
  }
`;

export const ServiceTitle = styled.h2`
  font-size: 10vw;
  margin: 0;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1200px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Text = styled.span`
  font-size: 1.9em;
  font-family: "Poppins", Halvetica, sans-serif;

  @media screen and (max-width: 1200px) {
    font-size: 0.8em;
  }
`;

export const CirclesBox = styled(Link)`
  position: absolute;
  bottom: 0;
  left: 0;
  transition: 0.3s;
  cursor: pointer;
`;

export const Circle = styled.img`
  width: 15vh;
  transition: 0.3s;

  &:hover {
    transform: scale(1.4);
  }
`;

export const DescriptonBox = styled.div`
  width: 35%;

  @media screen and (max-width: 1200px) {
    width: 90%;
  }
`;

export const VideoBox = styled.div`
  position: absolute;
  width: 40vw;
  height: 40vh;
  bottom: 0;
  right: 25vw;
  z-index: -1;

  @media screen and (max-width: 1200px) {
    position: relative;
    right: 0;
    width: 100%;
  }
`;

export const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media screen and (max-width: 1200px) {
    border-radius: 5px;
  }
`;
