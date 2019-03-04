// @flow

import React from 'react';
import styled from 'styled-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { BREAKPOINTS } from '../../mediaQueriesConfig';

const phoneImageHeight = {
  MOBILE: 500,
  DESKTOP: 600,
};

export default function Screenshots() {
  return (
    <ImagesAndGradientWrapper>
      <BackgroundGradientAccent />
      <Phones>
        <PhoneImage src="/static/bookings.png" alt="Search" />
        <PhoneImage src="/static/results.png" alt="Results" />
        <PhoneImage src="/static/search.png" alt="Booking" />
      </Phones>
    </ImagesAndGradientWrapper>
  );
}

const Phones = styled.div`
  display: flex;
  overflow-x: auto;
  width: 100vw;
  @media (min-width: 1025px) {
    flex-wrap: nowrap;
    width: unset;
  }
`;

const PhoneImage = styled.img`
  height: ${phoneImageHeight.MOBILE}px;
  flex: 0 0 auto;
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    height: ${phoneImageHeight.DESKTOP}px;
  }
`;

const ImagesAndGradientWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BackgroundGradientAccent = styled.div`
  position: absolute;
  z-index: -1;
  height: 50vh;
  width: 100vw;
  margin-top: ${phoneImageHeight.MOBILE / 2}px;
  background-image: linear-gradient(
    #e9eef1,
    10%,
    ${defaultTokens.paletteWhite}
  );
  @media (min-width: ${BREAKPOINTS.TABLET}px) {
    margin-top: ${phoneImageHeight.DESKTOP / 2}px;
  }
`;
