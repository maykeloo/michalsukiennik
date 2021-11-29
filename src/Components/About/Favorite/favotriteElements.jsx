import styled from "styled-components";

export const Favoritebar = styled.div`
    width: 100%;
    height: 70vh;
    display: flex;
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

export const FavoriteContent = styled.div`
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
export const ExamplesBox = styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1300px)
    {
        margin-top: 50px;
        width: 100%;
    }
`

export const Row = styled.li`
    list-style-type: none;
    width: 100%;
    display: flex;

    @media screen and (max-width: 1200px)
    {
        margin-top: 25px;
        flex-direction: column;
    }
`

export const Left = styled.p`
    font-family: 'Poppins', Halvetica, sans-serif;
    width: 30%;
    font-size: 1.3vw;
    color: #999999;
    position: relative;

    @media screen and (max-width: 1200px)
    {
        margin: 0;
        width: 100%;
        font-size: 1.3em;

    }

    &:before {
        position: absolute;
        content: '';
        left: -20px;
        bottom: 50%;
        transform: translateY(50%);
        background-color: #ffbd00;
        width: 8px;
        height: 8px;
        border-radius: 50%;
    }
`

export const Rigth = styled.p`
    margin-left: 30px;
    font-family: 'Poppins', Halvetica, sans-serif;
    font-size: 1.3vw;
    font-weight: bold;

    
    @media screen and (max-width: 1200px)
    {
        margin: 0;
        font-size: 1.3em;

    }

    > a {
        color: black;
    }
`