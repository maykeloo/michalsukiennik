import styled from "styled-components";

export const ContactComponent = styled.section`
    margin-top: 40vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
export const Content = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;

    @media screen and (max-width: 1200px)
    {
        flex-direction: column;
    }
`

export const Leftside = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media screen and (max-width: 1200px)
    {
        width: 100%;
    }
`

export const OpenTextbar = styled.div`
    width: 100%;
    font-size: 5vw;
`

export const SmallContactbar = styled.div`
    width: 60%;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const City = styled.span`
    font-family: 'Poppins', Halvetica, sans-serif;
    font-weight: bold;
    font-size: 0.7vw;

    @media screen and (max-width: 1200px)
    {
        font-size: 18px;
    }
`

export const ContactDate = styled.span`
    font-family: 'Poppins', Halvetica, sans-serif;
    font-size: 0.7vw;

    @media screen and (max-width: 1200px)
    {
        font-size: 16px;
    }
`

export const FormSide = styled.div`
    height: 100%;
    width: 40%;

    @media screen and (max-width: 1200px)
    {
        width: 100%;
    }
`


export const FormContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;


    @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: flex-start;
    }
`

export const LeftSize = styled.div`
    height: 100%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media screen and (max-width: 1200px){
        width: 100%;
    }
`

export const FormBox = styled.div`
    width: 100%;
    height: 70%;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

export const FormLabel = styled.div`
    width: 100%;
    height: 90%;
`

export const Input = styled.input`
    padding: 5px 0px;
    border: 0;
    width: 100%;
    border-radius: 0;
    border-bottom: 1px solid black;
    color: black;
    background-color: transparent;
    outline: none;
    font-size: 1.3vw;
    margin-top: 20px;
    -moz-appearance: textfield;

    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
         margin: 0;
    }

    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
         margin: 0;
    }
    
    &::placeholder {
        color: black;
        font-size: 18px;
    }

    @media screen and (max-width: 1200px)
    {
        font-size: 16px;
    }
`

export const Text = styled.textarea`
    width: 100%;
    padding: 5px 0px;
    background-color: transparent;
    border-radius: 0;
    border: 0;
    border-bottom: 1px solid black;
    color: black;
    outline: none;
    font-size: 1.2vw;
    margin-top: 20px;

    &::placeholder {
        color: grey;
        font-size: 18px;
    }

    @media screen and (max-width: 1200px)
    {
        font-size: 14px;
    }
`

export const Submit = styled.input`
    width: 100%;
    padding: 5px;
    border-radius: 0;
    background-color: #ffc300;
    border: 3px solid #ffc300;
    color: black;
    outline: none;
    font-size: 1.5vw;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;  
    margin-top: 20px;  

    &:hover {
        background-color: #F1FAEE;
        color: #ffc300;
        border: 3px solid #ffc300;
    }

    @media screen and (max-width: 1200px)
    {
        font-size: 20px;
    }

`

export const ErrorBar = styled.div`
    width: 100%;
    height: 30px;
    margin-top: 5px;
    font-size: 14px;
`

export const ErrowText = styled.span`
    color: red;
`

export const SentText = styled.span`
    color: green;
`
export const Designbar = styled.div`
margin-top: 15px;
height: 20vh;
width: 80%;
font-family: 'Poppins', Halvetica, sans-serif;
display: flex;
flex-direction: column;
align-items: flex-end;
font-size: 0.7vw;

@media screen and (max-width: 1200px)
{
    font-size: 18px;
}
`

