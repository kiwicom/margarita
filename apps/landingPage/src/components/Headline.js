// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
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
    const alignment = this.props.width > BREAKPOINTS.TABLET ? 'left' : 'center';
    const isTablet = this.props.width <= BREAKPOINTS.TABLET;
    return (
      <HeadlineContainer>
        <HeadlineTextContainer>
          <Text align={alignment}>
            <Heading type="display">
              Ever dreamt of building the next Kiwi.com?
            </Heading>
          </Text>
        </HeadlineTextContainer>
        <Container>
          <ContainerTop>
            <HeaderAndDesignWrapper>
              <BackgroundGradientAccent>
                <GreenRectangle />
              </BackgroundGradientAccent>
              <Text align={alignment}>
                <Heading type="title2">
                  You've had a look at Tequila, but you've always preffered your
                  Tequila mixed with something else. Just grab a Margarita.
                </Heading>
              </Text>
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

const HeadlineTextContainer = styled.div`
  align-self: flex-start;
  padding: 11vh 0 8vh 10vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    padding: 30px 0;
    align-self: center;
    width: 85vw;
  }
`;

const Container = styled.div`
  padding-top: 6vh;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 10px;
  }
`;

const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6vh;
  width: 100vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: column;
    justify-content: space-around;
    width: 94vw;
    height: 230px;
    padding-left: 0;
  }
`;

const PlaneImageMobile = styled.div`
  width: 94vw;
  height: 280px;
  background-image: url(${airport});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
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

const HeaderAndDesignWrapper = styled.div`
  width: 50vw;
  padding-left: 10vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    padding-left: 0;
    width: 90vw;
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

  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }
`;

const GreenRectangle = styled.div`
  height: 167px;
  width: 3vh;
  background-color: ${defaultTokens.paletteProductNormal};

  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }
`;

const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-around;
  width: 28vw;
  margin-right: 3vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80%;
    margin: 40px 0 40px 0;
    justify-content: space-evenly:
  }
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 100%;
  }

`;

const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 9.5vh 0 0 2vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    flex-direction: column;
    padding: 0;
    align-items: center;
  }
`;

const PlaneImage = styled.div`
  width: 57vw;
  height: 50vh;
  background-image: url(${airport});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  margin-right: 3vw;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }
`;

export default withWindowSize<Props>(Headline);
