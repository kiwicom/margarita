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
  marginTop: defaultTokens.spaceXSmall,
  marginLeft: '5%',
  marginRight: '5%',
  [`@media (min-width: ${LAYOUT.largeMobile}px) and (max-width: ${
    LAYOUT.tablet
  }px)`]: {
    marginLeft: '15%',
    marginRight: '15%',
  },
  [`@media (min-width: ${LAYOUT.tablet}px)`]: {
    marginLeft: '25%',
    marginRight: '25%',
  },
});

export default function MMBWrapper({ children }: Props) {
  return (
    <Layout>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </Layout>
  );
}
