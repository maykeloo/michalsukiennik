import React from 'react'
import { ButtonsBar, ConBar, ContentBox, HomeContent, LearnMore, Text, Title, TitleBar } from './homeElements'

import learnMore from '../images/LearnMore.svg'

const Home = () => {
    return (
        <>
            <HomeContent>
                <ContentBox>
                    <TitleBar>
                        <Title>HI, IM MICHAL</Title>
                    </TitleBar>
                    <ConBar>
                        <Text>
                            Front-end developer from Lesser Poland province. I design things.
                        </Text>
                        <ButtonsBar>
                            <LearnMore src = {learnMore}/>
                        </ButtonsBar>
                    </ConBar>
                </ContentBox>
            </HomeContent>
        </>
    )
}

export default Home
