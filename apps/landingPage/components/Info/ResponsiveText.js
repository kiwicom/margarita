// @flow

import React from 'react';
import { Text } from '@kiwicom/orbit-components/lib/';
import styled from 'styled-components';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

const text =
  "PLACEHOLDER!!!!!You've had a look at Tequila, but you've preffered yourTequila Tequila mixed with something else. Just grabMargarita.You've had a look at Tequila, but you've always prefferedyour Tequila mixed with something else.u've had a look at Tequ";

export default function ResponsiveText() {
  return (
    <Wrapper>
      <Text size="large" align="left">
        {text}
      </Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 90vw;
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) {
    > p {
      text-align: center;
    }
  }
  @media (min-width: ${BREAKPOINTS.BIG_MOBILE}px) and (max-width: ${BREAKPOINTS.TABLET}px) {
    width: 80vw;
    margin: 0;
  }
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 600px;
    margin: 3vh 0 2vh 0;
  }
`;
