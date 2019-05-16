// @flow

import React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

type Props = {|
  +type?: 'dark' | 'light',
|};
export default function GithubLogo({ type = 'dark' }: Props) {
  return (
    <Logo
      src={`/static/github-${type}.png`}
      alt="Github logo"
      srcSet={`/static/github-${type}.png 1x,
  /static/github-${type}@2x.png 2x, /static/github-${type}@3x.png 3x`}
    />
  );
}

const Logo = styled.img`
  height: ${defaultTokens.heightIconMedium};
`;
