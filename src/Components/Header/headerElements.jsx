import styled from "styled-components";
import { Link } from "react-scroll";

import darkLogo from "../../images/darkLogo.png";
import lightLogo from "../../images/lightLogo.png";

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

  @media screen and (max-width: 1200px)
  {
    position: fixed;
    top: 30px;
    width: 80%;
  }
`;
export const ContentBox = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  @media screen and (max-width: 1200px)
  {
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
export const Logobar = styled.div`
  display: flex;
  justify-content: center;
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

  @media screen and (max-width: 600px)
  {
    display: none;
  }
`;

export const MobileMenu = styled.div`
    display: none;

    @media screen and (max-width: 600px)
  {
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

    &:hover 
    {
        transform: scale(1.1)

        > span {
            width: 5px;
        }
    }
  }
`

export const Line1 = styled.span`
    display: block;
    transition: 0.2s;
    transform-origin: left;
    width: 25px;
    height: 2px;
    background-color: black;
    transform: rotate(${props => props.visibility ? '45deg' : '0'});
`
export const Line2 = styled.span`
    display: block;
    transition: 0.2s;
    opacity: ${props => props.visibility ? '0' : '1'};
    width: 25px;
    height: 2px;
    background-color: black;
`
export const Line3 = styled.span`
    display: block;
    transform-origin: left;
    transition: 0.2s;
    width: 25px;
    height: 2px;
    background-color: black;
    transform: rotate(${props => props.visibility ? '-45deg' : '0'});
`


export const MenuTitle = styled.h3`
  font-weight: bold;
  margin: 0;
  margin-bottom: 30px;
`;

export const MenuOption = styled(Link)`
  margin-top: 10px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    letter-spacing: 5px;
  }
`;

export const VideoBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1200px)
  {
    align-items: flex-end;
    position: absolute;
    right: 40px;
    z-index: -1;
  }

  @media screen and (max-width: 600px)
  {
    display: none;
  }
`;
export const VideoCont = styled.video`
  width: 95%;
  height: 90%;
  object-fit: cover;

  @media screen and (max-width: 1200px)
  {
    height: 60%
  }
`;

export const TextBox = styled.div`
  height: 70%;
  width: 80%;
  margin-top: 150px;
  margin-left: 50px;

  @media screen and (max-width: 1300px)
  {
    height: 50%;
  }
`;

export const TitleBar = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.h1`
  font-size: 1.5em;
  font-weight: 400;
  margin: 0;
`;

export const SmallTitleBar = styled.div`
  width: 70%;
  height: 40%;
  margin: 0;
  justify-self: end;

  @media screen and (max-width: 1300px)
  {
    width: 90%;
  }
`;

export const SmallTitle = styled.h1`
  font-size: 6rem;
  font-weight: 400;
  margin: 0;
  height: 30vh;

  
  @media screen and (max-width: 1300px)
  {
    font-size: 5rem;
  }

  @media screen and (max-width: 600px)
  {
    font-size: 15vw;
  }
`;

export const DescriptionBox = styled.div`
  width: 70%;
  height: 50%;
  display: flex;
  align-items: flex-end;
  overflow: hidden;

  @media screen and (max-width: 600px)
  {
    width: 80%;
  }
`;

export const DescriptionText = styled.span`
  font-size: 30px;

  @media screen and (max-width: 1300px)
  {
    font-size: 22px;
  }
`;
