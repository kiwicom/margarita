// @flow

import React from 'react';
import styled from 'styled-components';
import { Heading } from '@kiwicom/orbit-components/lib/';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

type Props = {|
  +type: 'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5',
  +children: string,
|};

export default function TextHeadline(props: Props) {
  return (
    <Alignment>
      <Heading type={props.type}>{props.children}</Heading>
    </Alignment>
  );
}

const Alignment = styled.div`
  text-align: center;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    text-align: left;
  }
`;
