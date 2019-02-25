// @flow

import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import booking from '../images/bookings.png';
import results from '../images/results.png';
import search from '../images/search.png';
import { documentation, github } from '../../../../linksConfig';
import { BREAKPOINTS } from '../mediaQueriesConfig';
import { withWindowSize } from './withWindowSize';

const text =
  "PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered yourTequila Tequila mixed with something else. Just grabMargarita.You've had a look at Tequila, but you've always prefferedyour Tequila mixed with something else.u've had a look at Tequ";
const phoneImageHeight = {
  MOBILE: 500,
  DESKTOP: 600,
};
const features = ['Search', 'Booking', 'MMB', 'Payments'];

const renderCards = (features: Array<string>) => {
  return features.map(feature => (
    <CardWrapper key={feature}>
      <Heading type="title2">{feature}</Heading>
    </CardWrapper>
  ));
};

type Props = {|
  +width: number,
|};

class Info extends React.Component<Props> {
  render() {
    const alignment = this.props.width > BREAKPOINTS.TABLET ? 'left' : 'center';
    return (
      <Container id="features">
        <Header>
          <Title>
            <Heading>It's cross-platform</Heading>
          </Title>
          <WrapperText>
            <Text size="large" align={alignment}>
              {text}
            </Text>
          </WrapperText>
          <WrapperButton allignment="flex-start">
            <Button type="secondary" width={125}>
              <LinkWithoutStyle href={documentation}>
                Link to Docs
              </LinkWithoutStyle>
            </Button>
          </WrapperButton>
        </Header>
        <ImagesAndGradientWrapper>
          <BackgroundGradientAccent />
          <Phones>
            <PhoneImage src={search} alt="Search" />
            <PhoneImage src={results} alt="Results" />
            <PhoneImage src={booking} alt="Booking" />
          </Phones>
        </ImagesAndGradientWrapper>
        <Features>
          <Title>
            <Heading>Features</Heading>
          </Title>
          <CardListWrapper>{renderCards(features)}</CardListWrapper>
        </Features>
        {this.props.width < BREAKPOINTS.TABLET && (
          <GithubButtonWrapper>
            <Heading> Learn more, visit Github</Heading>
            <WrapperButton allignment="center">
              <Button type="secondary" size="large" width={165}>
                <LinkWithoutStyle href={github}>
                  Link to Github
                </LinkWithoutStyle>
              </Button>
            </WrapperButton>
          </GithubButtonWrapper>
        )}
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  padding-bottom: 60px;

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    height: 240px;
    padding-bottom: 40px;
  }
`;

const Title = styled.div`
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    align-self: flex-start;
  }
`;
const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  width: 600px;
  margin: 3vh 0 2vh 0;
  @media (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80vw;
    margin: 0;
  }
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 90vw;
  }
`;

const WrapperButton = styled.div`
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    align-self: ${props => props.allignment};
    margin-top: 20px;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;

const Phones = styled.div`
  flex-wrap: nowrap;
  @media (max-width: 1025px) {
    display: flex;
    overflow-x: auto;
    width: 100vw;
  }
`;

const PhoneImage = styled.img`
  height: ${phoneImageHeight.DESKTOP}px;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    height: ${phoneImageHeight.MOBILE}px;
    flex: 0 0 auto;
  }
`;

const ImagesAndGradientWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BackgroundGradientAccent = styled.div`
  position: absolute;
  z-index: -1;
  height: 50vh;
  width: 100vw;
  margin-top: ${phoneImageHeight.DESKTOP / 2}px;
  background-image: linear-gradient(
    #e9eef1,
    10%,
    ${defaultTokens.paletteWhite}
  );
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    margin-top: ${phoneImageHeight.MOBILE / 2}px;
  }
`;

const Features = styled.div`
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const CardListWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 80vw;
  padding-top: 40px;
  flex-wrap: wrap;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    flex-direction: column;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 270px;
  box-shadow: ${defaultTokens.boxShadowActionable};
  border-radius: ${defaultTokens.borderRadiusNormal};
  border: ${defaultTokens.borderStyleCard} ${defaultTokens.borderWidthCard}
    ${defaultTokens.borderColorCard};
  margin-bottom: 20px;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    width: 80vw;
    height: 125px;
    margin-bottom: 20px;
  }
`;

const GithubButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 140px;
  justify-content: space-evenly;
`;

export default withWindowSize<Props>(Info);
