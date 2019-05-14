// @flow

import React from 'react';
import { Heading, Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';
import {
  GITHUB_LINK,
  TEQUILA_LINK,
  DOCUMENTATION_LINK,
  CODE_KIWI_LINK,
} from '@kiwicom/margarita-config';

import { BREAKPOINTS } from '../mediaQueriesConfig';

const links = [
  { title: 'GitHub', link: GITHUB_LINK },
  { title: 'Tequila', link: TEQUILA_LINK },
  { title: 'Documentation', link: DOCUMENTATION_LINK },
  { title: 'Code.kiwi.com', link: CODE_KIWI_LINK },
];

export default function Demo() {
  return (
    <Container>
      <HeadingWrapper>
        <Heading type="title1">More links to explore</Heading>
      </HeadingWrapper>
      <LinksWrapper>
        {links.map(el => {
          return (
            <Button type="white" key={el.title}>
              <LinkWithoutStyle href={el.link}>{el.title}</LinkWithoutStyle>
            </Button>
          );
        })}
      </LinksWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
`;

const HeadingWrapper = styled.div`
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    padding-top: 40px;
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  width: 85vw;
  justify-content: space-around;
  padding: 30px 0 40px 0;
  flex-wrap: wrap;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 34vw;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;
