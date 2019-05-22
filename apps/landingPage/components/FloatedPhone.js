// @flow

import React from 'react';
import styled from 'styled-components';

import Phone from './Phone';
import Config from '../config';

type Props = {|
  +scroll: number,
  +featuresHeight: number,
  +featuresTopPosition: number,
  +featuresRef: ?Element,
|};

const defaultScreenShot = {
  src: '/static/screens/search.jpg',
  srcSet:
    '/static/screens/search.jpg 1x,/static/screens/search@2x.jpg 2x, /static/screens/search@3x.jpg 3x',
};
const images = [
  {
    src: '/static/screens/payments.jpg',
    srcSet:
      '/static/screens/payments.jpg 1x,/static/screens/payments@2x.jpg 2x, /static/screens/payments@3x.jpg 3x',
  },
  {
    src: '/static/screens/mmb.jpg',
    srcSet:
      '/static/screens/mmb.jpg 1x,/static/screens/mmb@2x.jpg 2x, /static/screens/mmb@3x.jpg 3x',
  },
  {
    src: '/static/screens/booking.jpg',
    srcSet:
      '/static/screens/booking.jpg 1x,/static/screens/booking@2x.jpg 2x, /static/screens/booking@3x.jpg 3x',
  },
  {
    src: '/static/screens/results.jpg',
    srcSet:
      '/static/screens/results.jpg 1x,/static/screens/results@2x.jpg 2x, /static/screens/results@3x.jpg 3x',
  },
];

const buffer = 150;

const getProperScreenShot = imageIndex => {
  if (imageIndex >= 0 || !imageIndex) {
    if (imageIndex < images.length) {
      return images[imageIndex];
    }
    return defaultScreenShot;
  }
  return images[0];
};

export default function FloatedPhone({
  scroll,
  featuresHeight,
  featuresTopPosition,
  featuresRef,
}: Props) {
  const isDimensionsDataKnown =
    featuresHeight !== 0 && featuresTopPosition !== 0;
  const imageIndex = isDimensionsDataKnown
    ? Math.floor(
        (featuresTopPosition +
          featuresHeight -
          scroll -
          Config.phoneHeight -
          Config.featuresMarginBottom +
          buffer) /
          Config.featureHeight,
      )
    : images.length;
  const isFixed =
    featuresTopPosition === 0 ||
    featuresHeight === 0 ||
    scroll <
      featuresTopPosition +
        featuresHeight -
        Config.phoneHeight -
        Config.phoneTopMargin;
  const properScreenShot = getProperScreenShot(imageIndex);
  return (
    <PhoneImageWrapper isFixed={isFixed}>
      {featuresRef !== null && <Phone {...properScreenShot} />}
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
