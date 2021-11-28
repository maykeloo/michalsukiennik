import React from 'react'
import { City, ContactComponent, ContactDate, Content, FormSide, Leftside, OpenTextbar, SmallContactbar } from './contactElements'
import Form from './Form'

const Contact = () => {
    return (
        <>
            <ContactComponent name='Contact'>
              <Content>
                  <Leftside>
                  <OpenTextbar>
                      Let's work together.
                  </OpenTextbar>
                  <SmallContactbar>
                      <City>Tarnow</City>
                      <ContactDate>+48 514 010 099</ContactDate>
                      <ContactDate>michalsukiennik.ms@gmail.com</ContactDate>
                  </SmallContactbar>
                  </Leftside>
                  <FormSide>
                      <Form/>
                  </FormSide>
              </Content>
            </ContactComponent>  
        </>
    )
}

export default Contact
