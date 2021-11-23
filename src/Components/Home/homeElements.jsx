import styled from "styled-components";

export const HomeContent = styled.div`
    width: 100%;
    height: 100%;
    background-color: #ffb703;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContentBox = styled.div`
    width: 80%;
    height: 70%;
`
export const TitleBar = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
`

export const Title = styled.h3`
    color: white;
    font-size: 8em;
    margin: 0;
    padding: 0;
    font-weight: 400;
`

export const ConBar = styled.div`
    height: 70%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Text = styled.div`
    width: 80%;
    color: #6d6d6d;
    font-size: 2em;
    text-align: center;
`

export const ButtonsBar = styled.div`
    width: 50%;
    height: 10vh;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    overflow: hidden;
`

export const LearnMore = styled.img`
    height: 10vw;
    object-fit: contain;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
        transform: translateY(-12vh);
    }
`