import React from 'react'
import { CloseIcon, SidebarContent, Content, SocialBar, IconFB, IconBH, IconLI, LinkA,Logobar,Logo } from './sidebarElements'
import {  MenuOption } from '../Header/headerElements';

import logo from '../../images/biale.png'


const Sidebar = ({visibility, setVisibleHandler}) => {

    const menuOptions = ["About me", "Works", "Contact", "Services"];
    const menuOption = menuOptions.map((option) => (
      <MenuOption style = {{color: 'white'}} onClick = {setVisibleHandler} to={option} smooth={true} duration={3000} key={option}>{option}</MenuOption>
    ));

    return (
        <>
            <SidebarContent visibility={visibility}>
                <Content>
                    <Logobar onClick = {setVisibleHandler} to='top' smooth={true} duration={3000}><Logo src={logo}/></Logobar>
                    {menuOption}
                    <CloseIcon onClick = {setVisibleHandler}/>
                    <SocialBar>
                        <LinkA href="https://www.facebook.com/Michalsukiennikk" target='_blank'><IconFB></IconFB></LinkA>
                        <LinkA href="https://www.linkedin.com/in/micha%C5%82-sukiennik-108a2b225/" target='_blank'><IconLI/></LinkA>
                        <LinkA href="https://www.behance.net/michasukiennik1" target='_blank'><IconBH/></LinkA>
                    </SocialBar>
                </Content>
            </SidebarContent> 
        </>
    )
}

export default Sidebar
