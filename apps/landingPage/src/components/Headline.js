// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import kiwiLogo from '../images/logo.png';
import reactLogo from '../images/react-logo.png';
import tequilaLogo from '../images/tequila-logo.png';
import graphqlLogo from '../images/graphql-logo.png';
import airport from '../images/airport.jpg';
import { BREAKPOINTS } from '../mediaQueriesConfig';
import GetStartedInfo from './GetStartedInfo';
import { withWindowSize } from './withWindowSize';

type Props = {|
  +width: number,
|};

class Headline extends React.Component<Props> {
  render() {
    const isTablet = this.props.width <= BREAKPOINTS.TABLET;
    return (
      <HeadlineContainer>
        <HeadlineTextContainer>
          <Alignment center={isTablet}>
            <Heading type="display">
              Ever dreamt of building the next Kiwi.com?
            </Heading>
          </Alignment>
        </HeadlineTextContainer>
        <Container>
          <ContainerTop>
            <HeaderAndDesignWrapper>
              <BackgroundGradientAccent>
                <GreenRectangle />
              </BackgroundGradientAccent>
              <Alignment center={isTablet}>
                <Heading type="title2">
                  You've had a look at Tequila, but you've always preffered your
                  Tequila mixed with something else. Just grab a Margarita.
                </Heading>
              </Alignment>
            </HeaderAndDesignWrapper>
            <ContainerIcons>
              <img src={kiwiLogo} height={43} alt="Kiwi logo" />
              <img src={reactLogo} height={45} alt="React logo" />
              <img src={tequilaLogo} height={43} alt="Tequila logo" />
              <img src={graphqlLogo} height={43} alt="Graphql logo" />
            </ContainerIcons>
          </ContainerTop>
          {isTablet && (
            <>
              <MobileGradientAccent>
                <PlaneImageMobile />
              </MobileGradientAccent>
            </>
          )}
          <ContainerBottom>
            <GetStartedInfo />
            <PlaneImage displayMobile="none" />
          </ContainerBottom>
        </Container>
      </HeadlineContainer>
    );
  }
}
const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 30px;
`;

const Alignment = styled.div`
  text-align: ${props => props.center && 'center'};
`;

const HeadlineTextContainer = styled.div`
  padding: 30px 0;
  align-self: center;
  width: 85vw;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    align-self: flex-start;
    padding: 11vh 0 8vh 10vw;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: block;
    padding-top: 6vh;
  }
`;

const ContainerTop = styled.div`
  display: flex;
  height: 230px;
  width: 94vw;
  justify-content: space-around;
  flex-direction: column;
  padding-left: 0;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    height: 6vh;
    width: 100vw;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const HeaderAndDesignWrapper = styled.div`
  padding-left: 0;
  width: 90vw;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 50vw;
    padding-left: 10vw;
  }
`;

const GreenRectangle = styled.div`
  display: none;
  height: 167px;
  width: 30px;
  background-color: ${defaultTokens.paletteProductNormal};
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: block;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-right: 3vw;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (
    max-width: ${BREAKPOINTS.TABLET}px) {
    width: 60%;
    margin: 40px 0 40px 0;
    justify-content: space-evenly:
  }
  @media  (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 28vw;
  }
`;

const ContainerBottom = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 9.5vh 0 0 2vw;
    align-items: flex-start;
  }
`;

const MobileGradientAccent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
  width: 100vw;
  background-image: linear-gradient(
    #e9eef1,
    50%,
    ${defaultTokens.paletteWhite}
  );
`;

const BackgroundGradientAccent = styled(MobileGradientAccent)`
  align-items: center;
  justify-content: flex-start;
  height: 70vh;
  width: 40vw;
  position: absolute;
  z-index: -1;
  margin: -8vh 0 0 -11vw;
  display: none;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: flex;
  }
`;

const PlaneImageMobile = styled.div`
  width: 94vw;
  height: 280px;
  background-image: url(${airport});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 90%;
`;

const PlaneImage = styled(PlaneImageMobile)`
  width: 57vw;
  height: 50vh;
  background-size: cover;
  margin-right: 3vw;
  display: none;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: block;
    height: 40vh;
  }
  @media (min-width: ${BREAKPOINTS.DESKTOP}px) {
    display: block;
    height: 50vh;
  }
`;

export default withWindowSize<Props>(Headline);
