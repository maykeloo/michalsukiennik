import React, {useEffect} from 'react'
import { City, ContactComponent, ContactDate, Content, Designbar, FormSide, Leftside, OpenTextbar, SmallContactbar } from './contactElements'
import Form from './Form'

import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);

    return (
        <>
            <ContactComponent name='Contact'>
              <Content>
                  <Leftside>
                  <OpenTextbar data-aos="fade-right" data-aos-delay="200">
                      Let's work together.
                  </OpenTextbar>
                  <SmallContactbar>
                      <City data-aos="fade-right" data-aos-delay="300">Tarnow</City>
                      <ContactDate data-aos="fade-right" data-aos-delay="400">+48 514 010 099</ContactDate>
                      <ContactDate data-aos="fade-right" data-aos-delay="500">michalsukiennik.ms@gmail.com</ContactDate>
                  </SmallContactbar>
                  </Leftside>
                  <FormSide>
                      <Form/>
                  </FormSide>
              </Content>
              <Designbar>
                  <span>Portfolio 2021</span>
                  <span>Designed and developed by me.</span>
              </Designbar>
            </ContactComponent>  
        </>
    )
}

export default Contact
