// @flow

import React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Icons from './Icons';
import TextHeadline from './TextHeadline';
import { BREAKPOINTS } from '../../mediaQueriesConfig';

const bodyText =
  "You've had a look at Tequila, but you've always preffered your Tequila mixed with something else. Just grab a Margarita.";

export default function Subtitle() {
  return (
    <Container>
      <HeaderAndDesignWrapper>
        <BackgroundGradientAccent>
          <GreenRectangle />
        </BackgroundGradientAccent>
        <TextHeadline type="title2">{bodyText}</TextHeadline>
      </HeaderAndDesignWrapper>
      <Icons />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  height: 230px;
  width: 94vw;
  justify-content: space-around;
  flex-direction: column;
  padding-left: 0;
  align-items: center;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    height: 6vh;
    width: 100vw;
    justify-content: space-between;
    flex-direction: row;
  }
`;

const HeaderAndDesignWrapper = styled.div`
  padding-left: 0;
  width: 90vw;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    width: 50vw;
    padding-left: 10vw;
  }
`;

export const MobileGradientAccent = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 300px;
  width: 100vw;
  background-image: linear-gradient(
    #e9eef1,
    50%,
    ${defaultTokens.paletteWhite}
  );
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: none;
  }
`;

const BackgroundGradientAccent = styled(MobileGradientAccent)`
  align-items: center;
  justify-content: flex-start;
  height: 70vh;
  width: 40vw;
  position: absolute;
  z-index: -1;
  margin: -8vh 0 0 -11vw;
  display: none;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: flex;
  }
`;

const GreenRectangle = styled.div`
  display: none;
  height: 167px;
  width: 30px;
  background-color: ${defaultTokens.paletteProductNormal};
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    display: block;
  }
`;
