import styled from "styled-components";


export const Example = styled.img`
  position: absolute;
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 25vw;
  object-fit: cover;
  opacity: 0.7;

  @media screen and (max-width: 1200px) {
    width: 130px;
    height: 130px;
    opacity: 0.5;
  }
`;

export const ExampleBox = styled.div`
  position: absolute;
  border-radius: 5px;
  bottom: ${(props) => props.bottom};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  width: 20vw;
  object-fit: cover;
  transform: none;
  transition: 1s;

  @media screen and (max-width: 1200px) {
    width: 130px;
    height: 130px;
  }
`;

