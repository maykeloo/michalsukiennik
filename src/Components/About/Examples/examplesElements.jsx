import styled from "styled-components";


export const Content = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media screen and (max-width: 1000px)
  {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const Textbox = styled.div`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 1000px)
  {
    display: none;
  }
`

export const Text = styled.span`
  font-family: 'Poppins', Halvetica, sans-serif;
  font-size: 3vw;
  line-height: 1em;
  text-align: justify;

  @media screen and (max-width: 1000px)
  {
    font-size: 1em;
  }
`

export const Videocolumn = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  align-items: flex-end;
  position: relative;

  @media screen and (max-width: 1000px)
  {
    display: none;
  }
`

export const Video = styled.video`
  width: 100%;
  object-fit: cover;
  height: 80%;

  @media screen and (max-width: 1200px)
  {
  height: 30vh;
  }
`

export const Circlebar = styled.div`
  width: 30%;
  height: 40%;

  @media screen and (max-width: 1000px)
  {
    height: 20%;
    position: absolute;
    bottom: 5vh;
    right: 0;
  }
`
