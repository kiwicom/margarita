// @flow

import * as React from 'react';
import { Heading } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { GITHUB_LINK, CODE_KIWI_LINK } from '@kiwicom/margarita-config';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { BREAKPOINTS } from '../mediaQueriesConfig';

const linksHeader = [
  { title: 'About Margarita', link: '/' },
  { title: 'Playground', link: '#playground' },
  {
    title: 'GitHub',
    link: GITHUB_LINK,
  },
];

type Link = {|
  +title: string,
  +link: string,
|};

function renderLinks(links: Array<Link>): Array<React.Node> {
  return links.map<React.Node>(el => (
    <LinkWithoutStyle key={el.title} href={el.link}>
      <Heading type="title4">{el.title}</Heading>
    </LinkWithoutStyle>
  ));
}

export default function Header() {
  return (
    <Container>
      <LinkWithHeight href={CODE_KIWI_LINK}>
        <Logo src="/static/logo.png" alt="Logo" />
      </LinkWithHeight>
      <HeaderRight>{renderLinks(linksHeader)}</HeaderRight>
      <GithubLink>
        <LinkWithoutStyle href={GITHUB_LINK}>
          <Heading type="title3">GitHub</Heading>
        </LinkWithoutStyle>
      </GithubLink>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.4);
  border-bottom: solid 2px rgb(188, 201, 214);
  padding: ${defaultTokens.spaceSmall} 0;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    box-shadow: none;
    border: none;
  }
`;

const GithubLink = styled.div`
  padding-right: 10px;
  cursor: pointer;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    display: none;
  }
`;

const LinkWithHeight = styled.a`
  height: 42px;
`;

const Logo = styled.img`
  height: 42px;
  padding-left: 2vw;
`;

const HeaderRight = styled.div`
  display: flex;
  padding-right: 3vw;
  align-items: center;
  justify-content: space-evenly;
  display: none;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    display: flex;
    width: 300px;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
`;
