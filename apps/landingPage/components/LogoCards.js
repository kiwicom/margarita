// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export default function LogoCard() {
  return (
    <Container>
      {logos.map(logo => (
        <CardWrapper key={logo.title}>
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
  padding: 20px 0;
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    flex-direction: row;
  }
  @media (min-width: ${defaultTokens.widthBreakpointDesktop}px) {
    padding-right: ${phoneWidthBuffer}px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(2) {
    margin: 40px 0;
  }
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
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
`;

const LogoText = styled.div`
  font-weight: 300;
  font-size: ${defaultTokens.fontSizeTextNormal};
  color: ${defaultTokens.colorTextSecondary};
`;

const LogoImage = styled.img`
  height: 48px;
`;

const logos = [
  {
    icon: <LogoImage src="/static/react-logo.png" alt="React Native" />,
    title: 'React Native',
    text: 'for IOS, Android and web',
  },
  {
    icon: <LogoImage src="/static/graphql-logo.png" alt="Graphql" />,
    title: 'GraphQL',
    text: 'server',
  },
  {
    icon: <LogoImage src="static/tequila-logo.png" alt="Tequila" />,
    title: 'Tequila',
    text: 'API from Kiwi.com',
  },
];
