// @flow

import * as React from 'react';
import styled from 'styled-components';
import Scrollspy from 'react-scrollspy';
import { GITHUB_LINK } from '@kiwicom/margarita-config';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Content from '../components/Content';

export default function Menu() {
  return (
    <Container>
      <Content>
        <Rows>
          <a href="#">
            <Logo src="/static/logo_colored.png" alt="Kiwi.com logo" />
          </a>
          <MenuGroup>
            <Scrollspy
              items={['features', 'developer-experience', 'playground']}
              currentClassName="active"
            >
              <MenuItem href="#features">Features</MenuItem>
              <MenuItem href="#developer-experience">Tech</MenuItem>
              <MenuItem href="#playground">Try Margarita</MenuItem>
            </Scrollspy>
            <MenuItemButton href={GITHUB_LINK}>
              Github
              <GithubLogo src="/static/github-black.png" alt="Github" />
            </MenuItemButton>
          </MenuGroup>
        </Rows>
      </Content>
    </Container>
  );
}

const Rows = styled.div`
  flex-direction: row;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: block;
  height: 36px;
  padding-top: 2px;
`;
const GithubLogo = styled.img`
  height: 18px;

  padding-left: ${defaultTokens.spaceXSmall};
  position: relative;
  top: 3px;
`;
const Container = styled.div`
  width: 100vw;
  position: fixed;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.92);
  border-bottom: solid 1px #d8d8d8;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: none;
  -webkit-backdrop-filter: blur(10px);
  @media (min-width: ${defaultTokens.widthBreakpointLargeMobile}px) {
    display: flex;
  }
`;

const MenuGroup = styled.div`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  display: flex;
`;

const MenuItem = styled.a`
  color: #000;
  text-decoration: none;
  padding: 6px 15px;
  font-weight: 500;
  &.active {
    color: ${defaultTokens.paletteProductNormal};
  }
  &:hover {
    color: ${defaultTokens.paletteBlueNormal};
  }
`;

const MenuItemButton = styled(MenuItem)`
  margin-left: 30px;
`;
