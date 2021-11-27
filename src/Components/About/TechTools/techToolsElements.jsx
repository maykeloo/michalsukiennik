import styled from "styled-components";


export const TechToolsbar = styled.div`
    width: 100%;
    display: flex;
    margin-top: 200px;
    justify-content: center;
    align-items: center;

`

export const Title = styled.h3`
    font-size: 8em;
    line-height: 0.8em;
    margin: 0;

    @media screen and (max-width: 1200px)
    {
        font-size: 4em;
    }
`

export const TechToolsContent = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;

    
    @media screen and (max-width: 1300px)
    {
        flex-direction: column;
        align-items: center;
    }
`

export const InformationsTitlebar = styled.div`
    width: 30%;

    @media screen and (max-width: 1300px)
    {
        width: 100%;
    }
`
export const ExamplesBox = styled.div`
    width: 50%;
    height: 100%;
    display: flex;

    @media screen and (max-width: 1300px)
    {
        margin-top: 50px;
        width: 100%;
    }
`

export const Column = styled.div`
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: space-between;

    @media screen and (max-width: 1300px)
    {
    margin-left: 10px;
    }
    
`

export const Row = styled.div`
    font-size: 1.5em;
    font-family: 'Poppins', Halvetica, sans-serif;
    color: #999999;
    margin: 0;
    font-weight: 300;

    @media screen and (max-width: 1300px)
    {
    font-size: 1em;
    }
`

