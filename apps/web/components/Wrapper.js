// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';
import { LAYOUT } from '@kiwicom/margarita-utils';

import Layout from './Layout';

type Props = {|
  +children: React.Node,
|};

const ChildrenWrapper = styled.div({
  zIndex: -1,
  overflowY: 'auto',
  paddingTop: defaultTokens.spaceXSmall,
  paddingLeft: '5%',
  paddingRight: '5%',
  [`@media (min-width: ${LAYOUT.largeMobile}px) and (max-width: ${
    LAYOUT.tablet
  }px)`]: {
    paddingLeft: '15%',
    paddingRight: '15%',
  },
  [`@media (min-width: ${LAYOUT.tablet}px)`]: {
    paddingLeft: '25%',
    paddingRight: '25%',
  },
});

export default function MMBWrapper({ children }: Props) {
  return (
    <Layout>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Layout>
  );
}
