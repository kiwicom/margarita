// @flow

import React from 'react';
import styled from 'styled-components';

import Phone from './Phone';
import Config from '../config';

type Props = {|
  +isFixed: boolean,
  +scrolledOnFeature: ?number,
|};

const {
  bookingScreen,
  mmbScreen,
  paymentsScreen,
  searchScreen,
} = Config.featuresOrderIndexes;

const defaultScreenShot = {
  src: '/static/screens/search.jpg',
  srcSet:
    '/static/screens/search.jpg 1x,/static/screens/search@2x.jpg 2x, /static/screens/search@3x.jpg 3x',
};

const images = {
  [paymentsScreen]: {
    src: '/static/screens/payments.jpg',
    srcSet:
      '/static/screens/payments.jpg 1x,/static/screens/payments@2x.jpg 2x, /static/screens/payments@3x.jpg 3x',
  },
  [mmbScreen]: {
    src: '/static/screens/mmb.jpg',
    srcSet:
      '/static/screens/mmb.jpg 1x,/static/screens/mmb@2x.jpg 2x, /static/screens/mmb@3x.jpg 3x',
  },
  [bookingScreen]: {
    src: '/static/screens/booking.jpg',
    srcSet:
      '/static/screens/booking.jpg 1x,/static/screens/booking@2x.jpg 2x, /static/screens/booking@3x.jpg 3x',
  },
  [searchScreen]: {
    src: '/static/screens/results.jpg',
    srcSet:
      '/static/screens/results.jpg 1x,/static/screens/results@2x.jpg 2x, /static/screens/results@3x.jpg 3x',
  },
};

const getProperScreenShot = imageIndex => {
  if (!imageIndex || imageIndex >= 0) {
    if (imageIndex != null && imageIndex < Object.keys(images).length) {
      return images[imageIndex];
    }
    return defaultScreenShot;
  }
  return images[0];
};

export default function FloatedPhone({ isFixed, scrolledOnFeature }: Props) {
  const properScreenShot = getProperScreenShot(scrolledOnFeature);
  return (
    <PhoneImageWrapper isFixed={isFixed}>
      <Phone {...properScreenShot} />
    </PhoneImageWrapper>
  );
}

const PhoneImageWrapper = styled.div`
  ${({ isFixed }) =>
    isFixed
      ? `
      position: fixed;
        top: ${Config.phoneTopMargin}px;
        z-index: 1000;
        `
      : `position: absolute;
        bottom: 0;
        right: 0;
        z-index: -1;
        `}
  pointer-events: none;
  width: 80%;
  display: block;
  height: 500px;
`;
