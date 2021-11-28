import styled from "styled-components";

export const MoreInfoBox = styled.div`
  position: fixed;
  z-index: 995;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;  
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f1de;
`

export const Content = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;

`

export const Videobar = styled.div`
  height: 30%;
  width: 100%;
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
  }
`

export const Typebar = styled.div`
  width: 60%;
  margin-bottom: 40px;
  font-size: 2em;
  font-family: 'Poppins';


`

export const Descriptionbar = styled.div`
  width: 100%;
  margin-top: 120px;
`

export const Description = styled.span`
  font-size: 2em;
  font-family: 'Poppins', sans-serif;

  @media screen and (max-width: 1200px)
  {
    font-size: 1em;
  }
`

export const Informationsbar = styled.div`
  width: 100%;
  margin-top: 120px;
  border-bottom: 1px solid gray;
  padding-bottom: 50px;

  @media screen and (max-width: 1200px)
  {
    margin-top: 50px;
  }
`

export const InformationsBox = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 1200px)
  {
    flex-direction: column;
    width:100%;
  }
`

export const InfoTile = styled.div`
  display: flex;
  flex-direction: column;
  
  @media screen and (max-width: 1200px)
  {
    margin-top: 10px;
  }
`

export const InfoTitle = styled.span`
  font-family: 'Cormorant', serif;
  font-size: 1em;
  color: #9e9e9e;

`

export const Info = styled.span`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3em;
  > * {
    color: black;
  }

  @media screen and (max-width: 1200px)
  {
    font-size: 0.8em;
  }

`



