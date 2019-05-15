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
import Highlight from '../components/Highlight';
import GithubLogo from '../components/GithubLogo';
import { CardItems, CardItem, CardDescription } from '../components/Card';

export default function Try() {
  return (
    <>
      <Container>
        <Content id="try">
          <Title light>Try</Title>
          <CardItems>
            <CardItem>
              <AccentedText>Code</AccentedText>
              <FixedCardDescription>
                Explore the most important part of Margarita – the code. Read
                the docs or fork repository for your own project.
              </FixedCardDescription>
              <Button circled type="white" href={GITHUB_LINK} external>
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
                App is mobile friendly so you can try it also from your phone.
              </FixedCardDescription>
              <Link href={MARGARITA_LINK} target="_blank">
                Try live demo
              </Link>
            </CardItem>
            <CardItem>
              <AccentedText>GraphQL</AccentedText>
              <FixedCardDescription>
                We created GraphQL proxy for our REST API which is called
                Tequila. So you can choose GraphQL or REST according to your
                preferences.
              </FixedCardDescription>
              <Link href={GRAPHQL_PLAYGROUND_LINK} target="_blank">
                See GraphQL playground
              </Link>
              <Link href={TEQUILA_LINK} target="_blank">
                Check Tequila REST API
              </Link>
            </CardItem>
          </CardItems>
        </Content>
      </Container>
      <Content>
        <Title>Do you like Margarita?</Title>
        <AccentedText>
          <Highlight>Give us a star on Github</Highlight>
          <StarContainer>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=kiwicom&repo=margarita&type=star&count=true&size=large"
              frameBorder="0"
              scrolling="0"
              width="160px"
              height="30px"
            />
          </StarContainer>
        </AccentedText>
      </Content>
    </>
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

const Feedback = styled(CardDescription)`
  font-size: ${defaultTokens.fontSizeHeadingDisplay};
  color: ${defaultTokens.paletteInkDark};
  display: inline-block;
  font-weight: bold;
`;

const StarContainer = styled(Feedback)`
  position: relative;
  top: 7px;
  margin-left: 30px;
  display: inline-block;
  width: 100px;
`;

const GithubLogoWrapper = styled.div`
  padding-left: ${defaultTokens.spaceXSmall};
  position: relative;
  top: ${defaultTokens.spaceXXXSmall};
`;

const FixedCardDescription = styled(CardDescription)`
  min-height: 100px;
`;
