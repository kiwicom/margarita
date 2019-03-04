// @flow

import React from 'react';
import { Button } from '@kiwicom/orbit-components/lib/';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import styled from 'styled-components';

type Props = {|
  +alignment: string,
  +link: string,
  +text: string,
|};

export default function ButtonLink(props: Props) {
  return (
    <WrapperButton alignment={props.alignment}>
      <Button type="secondary" width={125}>
        <LinkWithoutStyle href={props.link}>{props.text}</LinkWithoutStyle>
      </Button>
    </WrapperButton>
  );
}

const WrapperButton = styled.div`
  align-self: ${props => props.alignment};
  margin-top: 20px;
`;

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${defaultTokens.colorTextButtonSecondary};
`;
