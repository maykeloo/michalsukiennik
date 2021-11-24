import React, { useState, useEffect } from "react";
import Header from '../Header/Header'
import Servieces from '../Services/Servieces'
import Sidebar from '../Sidebar/Sidebar'
import { Cursor } from "./applicationElements";

const Application = () => {

    const [visibility, setVisible] = useState(false);
    const setVisibleHandler = () => setVisible(!visibility);

    const [xValue, setXValue] = useState('50%');
    const [yValue, setYValue] = useState('50%');
    


    document.addEventListener('mousemove', e => {
       setXValue(e.pageX);
       setYValue(e.pageY);
    })

    return (
        <>
            <Cursor top={yValue} left={xValue}/>
            <Sidebar visibility={visibility} setVisibleHandler = {setVisibleHandler}/>
            <Header visibility={visibility} setVisibleHandler = {setVisibleHandler}/>
            <Servieces/>
        </>
    )
}

export default Application
