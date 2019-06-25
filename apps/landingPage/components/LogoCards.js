// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default function LogoCard() {
  return (
    <Container>
      {logos.map(logo => (
        <CardWrapper key={logo.title} href={logo.url} target="_blank">
          {logo.icon}
          <Column>
            <Heading element="div" spaceAfter="smallest">
              <Title>{logo.title}</Title>
            </Heading>
            <Text element="div" weight="bold">
              <LogoText>{logo.text}</LogoText>
            </Text>
          </Column>
        </CardWrapper>
      ))}
    </Container>
  );
}

const phoneWidthBuffer = 280;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2em;
  padding: 30px 0;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    flex-direction: row;
    padding: 20px 0;
  }
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    padding-right: ${phoneWidthBuffer}px;
  }
`;

const CardWrapper = styled.a`
  display: flex;
  flex-direction: row;
  text-decoration: none;
  :nth-child(2) {
    margin: 40px 0;
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
    :nth-child(2) {
      margin: 0 40px;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${defaultTokens.spaceSmall};
`;

const Title = styled.div`
  font-weight: 700;
  font-size: ${defaultTokens.fontSizeHeadingTitle2};
  color: ${defaultTokens.colorIconAttention};
`;

const LogoText = styled.div`
  font-weight: 300;
  font-size: ${defaultTokens.fontSizeTextNormal};
  color: ${defaultTokens.colorIconAttention};
`;

const LogoImage = styled.img`
  height: 48px;
`;

const logos = [
  {
    icon: <LogoImage src="/static/react-logo.png" alt="React Native" />,
    title: 'React Native',
    text: 'for iOS, Android and web',
    url: 'https://facebook.github.io/react-native/',
  },
  {
    icon: <LogoImage src="/static/graphql-logo.png" alt="Graphql" />,
    title: 'GraphQL',
    text: 'server',
    url: 'https://graphql.org/',
  },
  {
    icon: <LogoImage src="static/tequila-logo.png" alt="Tequila" />,
    title: 'Tequila',
    text: 'travel API from Kiwi.com',
    url:
      'https://partners.kiwi.com/presenting-tequila-revolution-travel-industry/',
  },
];
