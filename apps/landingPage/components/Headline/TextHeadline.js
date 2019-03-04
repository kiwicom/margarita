// @flow

import React from 'react';
import styled from 'styled-components';
import { Heading } from '@kiwicom/orbit-components/lib/';

type Props = {|
  +align: boolean,
  +type: 'display' | 'title1' | 'title2' | 'title3' | 'title4' | 'title5',
  +children: string,
|};

export default function TextHeadline(props: Props) {
  return (
    <Alignment align={props.align}>
      <Heading type={props.type}>{props.children}</Heading>
    </Alignment>
  );
}

const Alignment = styled.div`
  text-align: ${props => props.align && 'center'};
`;
