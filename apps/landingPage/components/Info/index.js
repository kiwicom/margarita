// @flow

import React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { DOCUMENTATION_LINK, GITHUB_LINK } from '@kiwicom/margarita-config';

import { BREAKPOINTS } from '../../mediaQueriesConfig';
import Screenshots from './Screenshots';
import ButtonLink from './ButtonLink';
import Features, { Title } from './Features';
import ResponsiveText from './ResponsiveText';

export default function Info() {
  return (
    <Container id="features">
      <Header>
        <Title>
          <Heading>It's cross-platform</Heading>
        </Title>
        <ResponsiveText />
        <ButtonLink
          link={DOCUMENTATION_LINK}
          text="Link to Docs"
          mobileAlign="flex-start"
        />
      </Header>
      <Screenshots />
      <Features />
      <GithubButtonWrapper>
        <Heading> Learn more, visit Github</Heading>
        <ButtonLink
          link={GITHUB_LINK}
          text="Link to Github"
          mobileAlign="center"
        />
      </GithubButtonWrapper>
    </Container>
  );
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
  height: 240px;
  padding-bottom: 40px;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    height: 250px;
    padding-bottom: 60px;
  }
`;

const GithubButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
  height: 140px;
  justify-content: space-evenly;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }
`;
