// @flow

import React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';

import { type IllustrationProps } from './IllustrationTypes';

const baseImagePath = (name, resolution: number) =>
  `//images.kiwi.com/illustrations/0x${parseInt(
    defaultTokens.heightIllustrationMedium,
    10,
  ) * resolution}/${name}.png`;

const RESOLUTIONS = [1, 2, 3];

export default function Illustration({ name, style }: IllustrationProps) {
  return (
    <img
      src={baseImagePath(name, 1)}
      srcSet={RESOLUTIONS.map(
        resolution => `${baseImagePath(name, resolution)} ${resolution}x`,
      ).join(',')}
      style={{
        alignSelf: 'center',
        ...StyleSheet.flatten(style),
      }}
      alt={`${name}-image`}
    />
  );
}
