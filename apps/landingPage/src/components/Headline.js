// @flow

import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import kiwiLogo from '../images/logo.png';
import reactLogo from '../images/react-logo.png';
import tequilaLogo from '../images/tequila-logo.png';
import graphqlLogo from '../images/graphql-logo.png';
import airport from '../images/airport.jpg';
import { github, margarita } from '../../../../linksConfig';
import { BREAKPOINTS } from '../mediaQueriesConfig';

export default () => (
  <Headline>
    <HeadlineTextContainer>
      <Heading type="display">
        Ever dreamt of building the next Kiwi.com?
      </Heading>
    </HeadlineTextContainer>
    <Container>
      <ContainerTop>
        <HeaderAndDesignWrapper>
          <BackgroundGradientAccent>
            <GreenRectangle />
          </BackgroundGradientAccent>
          <Heading type="title2">
            You've had a look at Tequila, but you've always preffered your
            Tequila mixed with something else. Just grab a Margarita.
          </Heading>
        </HeaderAndDesignWrapper>
        <ContainerIcons>
          <img src={kiwiLogo} height={43} alt="kiwi_logo" />
          <img src={reactLogo} height={45} alt="react_logo" />
          <img src={tequilaLogo} height={43} alt="tequila_logo" />
          <img src={graphqlLogo} height={43} alt="graphql_logo" />
        </ContainerIcons>
      </ContainerTop>
      <ContainerBottom>
        <ContainerLeftText>
          <Heading>Get started</Heading>
          <WrapperText>
            <Text size="large">
              PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered
              yourTequila Tequila mixed with something else. Just grab
              Margarita.You've had a look at Tequila, but you've always
              preffered your Tequila mixed with something else.
            </Text>
          </WrapperText>
          <WrapperButtons>
            <Button>
              <LinkNoStyle href={margarita} color={defaultTokens.paletteWhite}>
                Get started
              </LinkNoStyle>
            </Button>
            <WrapperRightButton>
              <Button type="white">
                <LinkNoStyle
                  href={github}
                  color={defaultTokens.colorTextButtonSecondary}
                >
                  Link to Github
                </LinkNoStyle>
              </Button>
            </WrapperRightButton>
          </WrapperButtons>
        </ContainerLeftText>
        <PlaneImage />
      </ContainerBottom>
    </Container>
  </Headline>
);

const Headline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadlineTextContainer = styled.div`
  align-self: flex-start;
  padding: 11vh 0 8vh 10vw;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-left: 4vw;
    padding-top: 4vh;
  }
`;

const Container = styled.div`
  padding-top: 6vh;
`;

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  width: 100vw;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    justify-content: space-around;
    width: 94vw;
    padding-left: 0;
  }
`;

const HeaderAndDesignWrapper = styled.div`
  width: 50vw;
  padding-left: 10vw;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-left: 0;
  }
`;

const BackgroundGradientAccent = styled.div`
  position: absolute;
  z-index: -1;
  display: flex;
  align-items: center;
  height: 70vh;
  width: 40vw;
  margin: -8vh 0 0 -11vw;
  background-image: linear-gradient(
    #e9eef1,
    50%,
    ${defaultTokens.paletteWhite}
  );

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    display: none;
  }
`;

const GreenRectangle = styled.div`
  height: 167px;
  width: 3vh;
  background-color: ${defaultTokens.paletteProductNormal};

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    display: none;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 28vw;
  margin-right: 3vw;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    flex-wrap: wrap;
    height: 17vh;
  }
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 38vw;
  }
`;

const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9.5vh 0 0 2vw;
`;

const ContainerLeftText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 26vw;
  height: 300px;
  padding-left: 8vw;

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 80vw;
    align-items: center;
    padding-left: 8vw;
    padding-top: 4vh;
  }
`;

const WrapperText = styled.div`
  width: 25vw;

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 80vw;
  }
`;

const WrapperButtons = styled.div`
  display: flex;
`;

const WrapperRightButton = styled.div`
  margin-left: 1vw;
`;

const PlaneImage = styled.div`
  width: 57vw;
  height: 50vh;
  background-image: url(${airport});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: 3vw;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    display: none;
  }
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`;
