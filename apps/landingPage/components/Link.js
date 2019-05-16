// @flow

import React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import ChevronRight from '@kiwicom/orbit-components/lib/icons/ChevronRight';

type Props = {|
  +children: string,
  +href: string,
  +target?: string,
|};
export default function Link({ children, href, target }: Props) {
  return (
    <Text href={href} target={target ?? undefined}>
      <Icon>
        <ChevronRight size="small" />
      </Icon>
      {children}
    </Text>
  );
}

const Icon = styled.span`
  margin-right: ${defaultTokens.spaceXXSmall};
`;
const Text = styled.a`
  color: white;
  text-decoration: underline;
  font-size: ${defaultTokens.fontSizeButtonNormal};
  line-height: 44px;
  position: relative;
  left: -${defaultTokens.spaceXXSmall};
  &:hover {
    color: ${defaultTokens.paletteProductLight};
  }
`;
