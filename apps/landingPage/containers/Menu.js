// @flow

import * as React from 'react';
import styled from 'styled-components';
import { GITHUB_LINK } from '@kiwicom/margarita-config';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Link } from 'react-scroll';

import Content from '../components/Content';
import GithubLogo from '../components/GithubLogo';
import Config from '../config';

export default function Menu() {
  return (
    <Container>
      <Content>
        <Rows>
          <Link href="#" to="header" {...Config.sharedLinkProps}>
            <Logo
              src="/static/logo_colored.png"
              srcSet={`/static/logo_colored.png 1x,
            /static/logo_colored@2x.png 2x, /static/logo_colored@3x.png 3x`}
              alt="Kiwi.com logo"
            />
          </Link>
          <MenuGroup>
            <MenuItem
              href="#multiplatform"
              to="multiplatform"
              {...Config.sharedLinkProps}
            >
              Features
            </MenuItem>
            <MenuItem
              href="#developer-experience"
              to="developer-experience"
              {...Config.sharedLinkProps}
            >
              Technology
            </MenuItem>
            <MenuItem href="#try" to="try" {...Config.sharedLinkProps}>
              Try
            </MenuItem>
            <MenuItemButton href={GITHUB_LINK} target="_blank">
              <GithubLogoWrapper>
                <GithubLogo />
              </GithubLogoWrapper>
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

const MenuItem = styled(Link)`
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

const MenuItemButton = styled.a`
  padding: 6px 15px;
`;

const GithubLogoWrapper = styled.span`
  padding-left: ${defaultTokens.spaceXSmall};
  position: relative;
  top: 3px;
`;
