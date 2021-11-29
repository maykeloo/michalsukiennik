/* eslint-disable react/jsx-no-target-blank */
import React, {useEffect} from "react";
import {
  ExamplesBox,
  Favoritebar,
  FavoriteContent,
  InformationsTitlebar,
  Left,
  Rigth,
  Row,
  Title,
} from "./favotriteElements";

import Aos from "aos";
import "aos/dist/aos.css";

const Favorite = () => {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <Favoritebar data-aos="fade-up" data-aos-delay="400">
        <FavoriteContent>
          <InformationsTitlebar>
            <Title>
              Current Favorites
            </Title>
          </InformationsTitlebar>
          <Table />
        </FavoriteContent>
      </Favoritebar>
    </>
  );
};

const Table = () => {
  return (
    <ExamplesBox>
      <Row>
        <Left>Design tools</Left>
        <Rigth>Figma</Rigth>
      </Row>

      <Row>
        <Left>Dev tool (tech)</Left>
        <Rigth>Styled Components, All about React</Rigth>
      </Row>

      <Row>
        <Left>VS code theme</Left>
        <Rigth>Bear theme</Rigth>
      </Row>

      <Row>
        <Left>Fonts</Left>
        <Rigth>Playfair Display, Poppins, Plus Jakarta</Rigth>
      </Row>

      <Row>
        <Left>Colors</Left>
        <Rigth>
          <a
            href={`https://www.google.com/search?q=%23FFD60A&oq=%23FFD60A&aqs=chrome..69i57.327j0j7&sourceid=chrome&ie=UTF-8 `}
            target="_blank"
          >
            #FFD60A
          </a>
          ,
          <a
            href={`https://www.google.com/search?q=%23006D77&oq=%23006D77&aqs=chrome..69i57.495j0j9&sourceid=chrome&ie=UTF-8`}
            target="_blank"
          >
            #006D77
          </a>
          ,
          <a
            href={`https://www.google.com/search?q=%23EF233C&oq=%23EF233C&aqs=chrome..69i57j0i19i30.391j0j7&sourceid=chrome&ie=UTF-8`}
            target="_blank"
          >
            #EF233C
          </a>
          , All pastel colors
        </Rigth>
      </Row>

      <Row>
        <Left>UI Inspirations</Left>
        <Rigth>
          <a href="https://www.awwwards.com/" target="_blank">Awwwards</a>,
          <a href="https://dribbble.com/" target="_blank">dribbble</a>,
          <a href="https://www.pinterest.co.uk/" target="_blank">Pinterest</a>
        </Rigth>
      </Row>
    </ExamplesBox>
  );
};

export default Favorite;
