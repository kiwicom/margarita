// @flow

import * as React from 'react';

import type { Props } from './ServiceLogoTypes';

const getImageSize = size => {
  const tokens = {
    height: {
      small: '12px',
      medium: '24px',
      large: '48px',
    },
  };

  if (typeof size === 'number') {
    return tokens.height.medium;
  }
  return tokens.height[size];
};

const baseURL = '//images.kiwi.com';

const getColor = greyScale => (greyScale ? 'logos-grayscale' : 'logos');

const style = {
  width: 'auto',
  backgroundColor: 'transparent',
};

export default function ServiceLogo({
  name,
  size = 'medium',
  grayScale = false,
}: Props) {
  return (
    <img
      style={{ ...style, height: size }}
      src={`${baseURL}/${getColor(grayScale)}/0x${parseInt(
        getImageSize(size),
        10,
      )}/${name}.png`}
      srcSet={`${baseURL}/${getColor(grayScale)}/0x${parseInt(
        getImageSize(size),
        10,
      ) * 2}/${name}.png 2x`}
      alt={name}
    />
  );
}
