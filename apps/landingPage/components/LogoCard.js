// @flow

import React from 'react';
import { Heading, Text } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { BREAKPOINTS } from '../mediaQueriesConfig';

type Props = {|
  +icon: any,
  +title: string,
  +text: string,
|};
export default function LogoCard({ icon, title, text }: Props) {
  return (
    <ContainerLogoCard>
      {icon}
      <Column>
        <Heading type="title2" spaceAfter="smallest">
          {title}
        </Heading>
        <Text weight="bold">{text}</Text>
      </Column>
    </ContainerLogoCard>
  );
}
const ContainerLogoCard = styled.div`
  display: flex;
  flex-direction: row;
  :nth-child(2) {
    margin: 40px 0;
  }
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    :nth-child(2) {
      margin: 0 40px;
    }
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${defaultTokens.spaceSmall};
`;
