// @flow

import * as React from 'react';
import {
  Button,
  ButtonLink,
  ButtonGroup,
  Separator,
} from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import LogoCards from '../components/LogoCards';
import Content from '../components/Content';
import GithubLogo from '../components/GithubLogo';

export default function Header() {
  return (
    <>
      <Container id="header">
        <Content>
          <UpperHeader>
            <a href="#">
              <Logo src="/static/logo_white.png" alt="Kiwi.com logo" />
            </a>
          </UpperHeader>
          <Columns>
            <Headline>
              <Motto>
                Use <ProductName>Margarita</ProductName> and create your own
                Kiwi.com for free
              </Motto>
              <Text>
                <HeadlineTextWrapper>
                  We prepared everything you will need — data, web and mobile
                  apps. All is based on modern technologies and it's open
                  source.
                </HeadlineTextWrapper>
              </Text>
              <ButtonWrapper>
                <ButtonGroup>
                  <Button circled width={120} href="#features">
                    Read more
                  </Button>
                  <ButtonLink
                    circled
                    transparent
                    type="secondary"
                    href="https://github.com/kiwicom/margarita"
                    external
                  >
                    <WhiteText>View on GitHub</WhiteText>
                    <GithubLogoWrapper>
                      <GithubLogo type="light" />
                    </GithubLogoWrapper>
                  </ButtonLink>
                </ButtonGroup>
              </ButtonWrapper>
            </Headline>
            <PhoneImage src="/static/search.png" alt="Booking" />
          </Columns>
        </Content>
      </Container>
      <Content>
        <LogoCards />
      </Content>
      <Separator />
    </>
  );
}

const planeImageHeightMobile = 400;
const phoneWidthBuffer = 280;

const Container = styled.div`
  width: 100vw;
  align-items: center;
  height: ${planeImageHeightMobile}px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.75)),
    url('/static/airport.jpg') no-repeat 40% 70%;
  background-size: cover;
  display: flex;
  z-index: 1;
  flex-direction: column;
  padding: 10px 0 120px 0;
`;

const UpperHeader = styled.div`
  z-index: 1;
  padding-bottom: ${defaultTokens.spaceXXLarge};
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    padding-bottom: 70px;
  }
`;

const WhiteText = styled.div`
  color: ${defaultTokens.paletteWhite};
`;

const Text = styled.div`
  font-size: 20px;
  margin-bottom: 35px;
`;

const Motto = styled.div`
  font-weight: 700;
  white-space: pre-wrap;
  color: white;
  margin-bottom: ${defaultTokens.spaceXLarge};
  font-size: ${defaultTokens.fontSizeHeadingTitle1};
  @media (min-width: ${defaultTokens.widthBreakpointMediumMobile}px) {
    font-size: 35px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    font-size: 45px;
    margin-bottom: 60px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeDesktop}px) and (max-width: ${defaultTokens.widthBreakpointLargeDesktop +
      100}px) {
    margin-bottom: ${defaultTokens.spaceXLarge};
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeDesktop}px) {
    font-size: 60px;
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeDesktop + 100}px) {
    margin-bottom: 60px;
  }
`;

const Columns = styled.div`
  z-index: 2;
  flex-direction: row;
  display: flex;
`;

const Logo = styled.img`
  display: block;
  position: abslolute;
  height: 36px;
  padding-top: ${defaultTokens.spaceSmall};
`;

const Headline = styled.div`
  margin: 0;
  padding-right: 0px;
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    padding-right: ${phoneWidthBuffer}px;
  }
`;

const ProductName = styled.span`
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${defaultTokens.spaceXXSmall} ${defaultTokens.spaceXSmall};
  color: ${defaultTokens.paletteProductNormal};
`;

const GithubLogoWrapper = styled.div`
  padding-left: ${defaultTokens.spaceSmall};
  position: relative;
  top: ${defaultTokens.spaceXXXSmall};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const PhoneImage = styled.img`
  position: absolute;
  right: 0;
  margin-top: -30px;
  display: none;
  height: 500px;
  filter: drop-shadow(0px 0px 35px rgba(0, 0, 0, 0.5));
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    display: block;
  }
`;

const HeadlineTextWrapper = styled.p`
  text-shadow: 0 0 30px rgba(0, 0, 0, 1), 0 0 30px rgba(0, 0, 0, 1);
  color: white;
`;
