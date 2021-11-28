import styled from "styled-components";

export const ContactComponent = styled.section`
    margin-top: 20vh;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Content = styled.div`
    width: 80%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid grey;
`

export const Leftside = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    font-size: 0.8em;
`

export const ContactDate = styled.span`
    font-family: 'Poppins', Halvetica, sans-serif;
    font-size: 0.8em;
`

export const FormSide = styled.div`
    height: 100%;
    width: 40%;
`


export const FormContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;


    @media screen and (max-width: 1200px){
        flex-direction: column;
        align-items: center;
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
    padding: 5px 10px;
    border: 0;
    width: 100%;
    border-bottom: 1px solid black;
    color: black;
    background-color: #f4f1de;
    outline: none;
    font-size: 16px;
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
`

export const Text = styled.textarea`
    width: 100%;
    padding: 25px;
    background-color: transparent;
    border: 1px solid black;
    color: black;
    outline: none;
    font-size: 14px;
    margin-top: 20px;

    &::placeholder {
        color: black;
        font-size: 18px;
    }
`

export const Submit = styled.input`
    width: 100%;
    padding: 5px;
    background-color: #ffc300;
    border: 3px solid #ffc300;
    color: black;
    outline: none;
    font-size: 24px;
    font-weight: bold;
    transition: 0.3s;
    cursor: pointer;  
    margin-top: 20px;  

    &:hover {
        background-color: #F1FAEE;
        color: #ffc300;
        border: 3px solid #ffc300;
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
