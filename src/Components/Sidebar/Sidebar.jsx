import React from 'react'
import { CloseIcon, SidebarContent, Content, SocialBar, IconFB, IconBH, IconLI, Link,Logobar,Logo } from './sidebarElements'
import {  MenuOption } from '../Header/headerElements';

import logo from '../../images/biale.png'


const Sidebar = ({visibility, setVisibleHandler}) => {

    const menuOptions = ["About me", "Works", "Contact", "Services"];
    const menuOption = menuOptions.map((option) => (
      <MenuOption style = {{color: 'white'}} onClick = {setVisibleHandler}>{option}</MenuOption>
    ));

    return (
        <>
            <SidebarContent visibility={visibility}>
                <Content>
                    <Logobar><Logo src={logo}/></Logobar>
                    {menuOption}
                    <CloseIcon onClick = {setVisibleHandler}/>
                    <SocialBar>
                        <Link href="https://www.facebook.com/Michalsukiennikk" target='_blank'><IconFB></IconFB></Link>
                        <Link href="https://www.linkedin.com/in/micha%C5%82-sukiennik-108a2b225/" target='_blank'><IconLI/></Link>
                        <Link href="https://www.behance.net/michasukiennik1" target='_blank'><IconBH/></Link>
                    </SocialBar>
                </Content>
            </SidebarContent> 
        </>
    )
}

export default Sidebar
