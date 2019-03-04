// @flow

import React from 'react';
import styled from 'styled-components';
import { Button } from '@kiwicom/orbit-components/lib/';
import type { Type } from '@kiwicom/orbit-components/lib/Button';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

type Props = {|
  +type: Type,
  +color: string,
  +link: string,
  +text: string,
|};

export default function ButtonInfo({ type, color, link, text }: Props) {
  return (
    <>
      <Tablet>
        <Button type={type} size="large" block>
          <LinkWithoutStyle href={link} color={color}>
            {text}
          </LinkWithoutStyle>
        </Button>
      </Tablet>
      <Desktop>
        <Button type={type} size="normal" block={false}>
          <LinkWithoutStyle href={link} color={color}>
            {text}
          </LinkWithoutStyle>
        </Button>
      </Desktop>
    </>
  );
}

const LinkWithoutStyle = styled.a`
  text-decoration: none;
  color: ${props => props.color};
`;

const Tablet = styled.div`
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }
`;

const Desktop = styled.div`
  display: none;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: flex;
  }
`;
