// @flow

import React from 'react';
import { Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

type Props = {|
  +link: string,
  +text: string,
  +mobileAlign: string,
|};

export default function ButtonLink(props: Props) {
  return (
    <WrapperButton>
      <Button type="secondary" width={125}>
        <LinkWithoutStyle href={props.link}>{props.text}</LinkWithoutStyle>
      </Button>
    </WrapperButton>
  );
}

const WrapperButton = styled.div`
  margin-top: 20px;
  align-self: ${props => props.mobileAlign};
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    align-self: center;
  }
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;
