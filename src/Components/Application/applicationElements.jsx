import styled from "styled-components";

export const Sections = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
`

export const Cursor = styled.div`
    position: absolute;
    top: ${props => props.top}px;
    left: ${props => props.left}px;
    transform: translate(-50%, -50%);
    width: 30px;
    border-radius: 50%;
    height: 30px;
    border: 1px solid black;
    pointer-events: none;
    box-sizing: border-box;
    z-index: 990;
    transition-timing-function: ease-in-out;

    @media screen and (max-width: 1200px)
    {
        display: none;
    }
`