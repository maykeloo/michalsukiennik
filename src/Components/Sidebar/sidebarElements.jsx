import styled from "styled-components";
import {AiOutlineBehanceSquare, AiFillFacebook, AiFillLinkedin, AiOutlineClose} from 'react-icons/ai'


export const SidebarContent = styled.div`
    position: fixed;    
    top: 0;
    right: ${props => props.visibility ? "0" : "-100vw"};
    transition: 1.5s;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;  
    flex-direction: column;  
`

export const CloseIcon = styled(AiOutlineClose)`
    color: white;
    font-size: 25px;
`

export const Content = styled.div`
    width: 60%;
    height: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;  
    flex-direction: column;  
`


export const SocialBar = styled.div`
    width: 40%;
    margin-top: 30px;
    display: flex;
    justify-content: space-around;
`

export const Link = styled.a``

export const IconFB = styled(AiFillFacebook)`
    color: white;
    font-size: 24px;
`

export const IconLI = styled(AiFillLinkedin)`
    color: white;
    font-size: 24px;
`

export const IconBH = styled(AiOutlineBehanceSquare)`
    color: white;
    font-size: 24px;
`
export const Logobar = styled.div`
    width: 40%;
    margin-bottom: 30px;
    display: flex;
    justify-content: center;
`

export const Logo = styled.img`
    width: 60px;
`
