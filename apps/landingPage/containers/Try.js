// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from '@kiwicom/orbit-components/lib/';
import {
  GITHUB_LINK,
  GRAPHQL_PLAYGROUND_LINK,
  TEQUILA_LINK,
  MARGARITA_LINK,
} from '@kiwicom/margarita-config';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Title from '../components/Title';
import Content from '../components/Content';
import Link from '../components/Link';
import AccentedText from '../components/AccentedText';
import GithubLogo from '../components/GithubLogo';
import { CardItems, CardItem, CardDescription } from '../components/Card';
import {
  EventGithubCode,
  EventMargaritaDemo,
  EventMargaritaPlayground,
  EventTequilaApi,
} from '../config/GA';

export default function Try() {
  return (
    <Container>
      <Content id="try">
        <Title light>Try</Title>
        <CardItems>
          <CardItem>
            <AccentedText>Code</AccentedText>
            <FixedCardDescription>
              Explore the most important part of Margarita – the code. Read the
              docs or fork repository for your own project.
            </FixedCardDescription>
            <Button
              circled
              type="white"
              href={GITHUB_LINK}
              external
              onClick={EventGithubCode}
            >
              See code on Github
              <GithubLogoWrapper>
                <GithubLogo />
              </GithubLogoWrapper>
            </Button>
            <Link
              href="https://kiwicom.github.io/margarita/docs/"
              target="_blank"
            >
              Read the docs
            </Link>
          </CardItem>
          <CardItem>
            <AccentedText>Live demo</AccentedText>
            <FixedCardDescription>
              You can try web version of Margarita directly from your browser.
              App is mobile friendly (but there are some issues:{' '}
              <Anchor
                href="https://github.com/kiwicom/margarita/issues/810"
                target="_blank"
              >
                #810
              </Anchor>
              ,{' '}
              <Anchor
                href="https://github.com/kiwicom/margarita/issues/808"
                target="_blank"
              >
                #808
              </Anchor>
              ) so you can try it also from your phone.
            </FixedCardDescription>
            <Link
              href={MARGARITA_LINK}
              target="_blank"
              onClick={EventMargaritaDemo}
            >
              Try live demo
            </Link>
          </CardItem>
          <CardItem>
            <AccentedText>GraphQL</AccentedText>
            <FixedCardDescription>
              We created GraphQL proxy for our REST API which is called Tequila.
              So you can choose GraphQL or REST according to your preferences.
            </FixedCardDescription>
            <Link
              href={GRAPHQL_PLAYGROUND_LINK}
              target="_blank"
              onClick={EventMargaritaPlayground}
            >
              See GraphQL playground
            </Link>
            <Link href={TEQUILA_LINK} target="_blank" onClick={EventTequilaApi}>
              Check Tequila REST API
            </Link>
          </CardItem>
        </CardItems>
      </Content>
    </Container>
  );
}

const Container = styled(CardDescription)`
  background: ${defaultTokens.paletteProductNormal}
    linear-gradient(transparent, rgba(0, 0, 0, 0.1));
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-bottom: 50px;
  margin-top: 30px;
  color: ${defaultTokens.paletteWhite};
`;

const GithubLogoWrapper = styled.div`
  padding-left: ${defaultTokens.spaceXSmall};
  position: relative;
  top: ${defaultTokens.spaceXXXSmall};
`;

const FixedCardDescription = styled(CardDescription)`
  min-height: 100px;
  margin-top: 20px;
`;
const Anchor = styled.a`
  color: ${defaultTokens.paletteWhite};
`;
