import styled from 'styled-components'

export const WelcomeComponent = styled.section`
    position: fixed;
    display: ${props => props.display ? 'block' : 'none'};
    top: 0;
    left: 0;
    background-color: black;
    width: 100vw;
    height: 100vh;
    z-index:${props => props.display ? '999' : '-999'};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 1s;
    opacity: ${props => props.visible ? '100%' : '0'}
`

export const Textbar = styled.div`
    height: 40%;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Text = styled.span`
    color: white;
    font-size: 12vw;
`