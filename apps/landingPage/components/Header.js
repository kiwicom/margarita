// @flow

import * as React from 'react';
import {
  Heading,
  Text,
  Button,
  ButtonLink,
  ButtonGroup,
} from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import LogoCard from './LogoCard';

const logos = [
  {
    icon: (
      <img
        src="/static/react-logo.png"
        alt="React Native"
        style={{ height: '48px' }}
      />
    ),
    title: 'React Native',
    text: 'for IOS, Android and web',
  },
  {
    icon: (
      <img
        src="/static/graphql-logo.png"
        alt="Graphql"
        style={{ height: '48px' }}
      />
    ),
    title: 'GraphQL',
    text: 'server',
  },
  {
    icon: (
      <img
        src="static/tequila-logo.png"
        alt="Tequila"
        style={{ height: '48px' }}
      />
    ),
    title: 'Tequila',
    text: 'API from Kiwi.com',
  },
];
export default function Header() {
  return (
    <Container>
      <PlaneImageMobile />
      <UpperHeader>
        <Logo src="/static/logo_white.png" alt="kiwi.com logo" />
      </UpperHeader>
      <Columns>
        <Headline>
          <Heading inverted={true} element="div">
            <WrappedText>
              Use <ProductName>Margarita</ProductName> and create your own
              Kiwi.com for free
            </WrappedText>
          </Heading>
          <Text size="large" element="div" weight="bold" spaceAfter="medium">
            <HeadlineTextWrapper>
              We prepared everything you will need — data, web and mobile apps.
              All is based on modern technologies and it's open source.
            </HeadlineTextWrapper>
          </Text>
          <ButtonWrapper>
            <ButtonGroup>
              <Button
                circled
                width={140}
                href="https://kiwicom.github.io/margarita/docs/"
              >
                Read more
              </Button>
              <ButtonLink
                type="secondary"
                href="https://github.com/kiwicom/margarita"
              >
                <GithubLogo src="/static/github.png" alt="Github" />
                <Text type="white" weight="bold">
                  View on GitHub
                </Text>
              </ButtonLink>
            </ButtonGroup>
          </ButtonWrapper>
        </Headline>
        <PhoneImage src="/static/search.png" alt="Booking" />
      </Columns>
      <Logos>
        {logos.map(logo => (
          <LogoCard
            key={logo.title}
            icon={logo.icon}
            title={logo.title}
            text={logo.text}
          />
        ))}
      </Logos>
    </Container>
  );
}

const marginHorizontal = 120;
const headerMarginTop = parseInt(defaultTokens.spaceSmall, 10);
const upperHeaderMobile = 84;
const upperHeaderDesktop = 144;
const planeImageHeightMobile = 400;
const planeImageHeightDesktop = 600;
const contentHeight = (upperHeader, headerMarginTop, planeImageHeight) =>
  planeImageHeight - headerMarginTop - upperHeader;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${defaultTokens.spaceSmall} ${defaultTokens.spaceSmall} 0
    ${defaultTokens.spaceSmall};
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    margin: ${defaultTokens.spaceSmall} ${marginHorizontal}px 0
      ${marginHorizontal}px;
  }
`;

const PlaneImageMobile = styled.div`
  display: block;
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  width: 100vw;
  height: ${planeImageHeightMobile}px;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/static/airport.jpg') no-repeat 40% 90%;
  background-size: cover;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    height: ${planeImageHeightDesktop}px;
  }
`;

const UpperHeader = styled.div`
  z-index: 1;
  padding-bottom: ${defaultTokens.spaceXXLarge};
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    padding-bottom: 100px;
  }
`;

const Columns = styled.div`
  z-index: 1;
  flex-direction: row;
  display: flex;
  height: ${contentHeight(upperHeaderMobile, headerMarginTop, 400)}px;
  margin-bottom: ${defaultTokens.spaceXXLarge};
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    height: ${contentHeight(upperHeaderDesktop, headerMarginTop, 600)}px;
  }
`;

const Logo = styled.img`
  display: block;
  position: abslolute;
  height: 36px;
  padding-top: ${defaultTokens.spaceSmall};
`;

const Headline = styled.div`
  margin: 0;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    margin-right: 70px;
  }
`;

const WrappedText = styled.div`
  white-space: pre-wrap;
  font-size: 1.3em;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    font-size: 2em;
    color: white;
  }
`;

const ProductName = styled.span`
  font-weight: 700;
  background-color: rgba(255, 255, 255, 0.9);
  padding: ${defaultTokens.spaceXXSmall}px ${defaultTokens.spaceXSmall}px;
  color: ${defaultTokens.paletteProductNormal};
`;

const Logos = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2em;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    flex-direction: row;
  }
`;

const GithubLogo = styled.img`
  height: 24px;
  padding-right: ${defaultTokens.spaceXSmall};
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

const PhoneImage = styled.img`
  margin-top: -100px;
  height: 700px;
  display: none;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    display: block;
  }
`;

const HeadlineTextWrapper = styled.p`
  text-shadow: 0 0 30px rgba(0, 0, 0, 1), 0 0 30px rgba(0, 0, 0, 1);
  color: white;
`;
