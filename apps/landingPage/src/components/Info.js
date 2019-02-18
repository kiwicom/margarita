// @flow

import React from 'react';
import { Heading, Text, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import booking from '../images/bookings.png';
import results from '../images/results.png';
import search from '../images/search.png';
import { documentation } from '../../../../linksConfig';
import { BREAKPOINTS } from '../mediaQueriesConfig';

export default function Info() {
  return (
    <Container id="features">
      <Header>
        <Heading>It's cross-platform</Heading>
        <WrapperText>
          <Text size="large" align="center">
            PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered
            yourTequila Tequila mixed with something else. Just grab
            Margarita.You've had a look at Tequila, but you've always preffered
            your Tequila mixed with something else.u've had a look at Tequ
          </Text>
        </WrapperText>
        <Button type="secondary" width={125}>
          <LinkNoStyle href={documentation}>Link to Docs</LinkNoStyle>
        </Button>
      </Header>
      <ImagesAndGradientWrapper>
        <BackgroundGradientAccent />
        <PhoneImage src={search} alt="search" />
        <PhoneImage src={results} alt="results" />
        <PhoneImage src={booking} alt="booking" />
      </ImagesAndGradientWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-top: 20px;
  }
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 250px;
  padding-bottom: 60px;

  @media (max-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    height: 400px;
  }
`;

const WrapperText = styled.div`
  display: flex;
  justify-content: center;
  width: 40vw;
  margin: 3vh 0 2vh 0;
`;

const LinkNoStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;

const PhoneImage = styled.img`
  height: 600px;
  margin: 0 2vw 0 2vw;
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
  margin-top: 300px;
  background-image: linear-gradient(
    #e9eef1,
    10%,
    ${defaultTokens.paletteWhite}
  );
`;
