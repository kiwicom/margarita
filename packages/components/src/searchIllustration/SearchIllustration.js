// @flow

import React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

/**
 * This component could be extracted to include more illustrations.
 * However, that would require fetching and bundling all the assets for mobile.
 */

const baseImagePath = (resolution: number) =>
  `//images.kiwi.com/illustrations/0x${parseInt(
    defaultTokens.heightIllustrationMedium,
    10,
  ) * resolution}/Boarding.png`;

const RESOLUTIONS = [1, 2, 3];

export default function SearchIllustration() {
  return (
    <img
      src={baseImagePath(1)}
      srcSet={RESOLUTIONS.map(
        resolution => `${baseImagePath(resolution)} ${resolution}x`,
      ).join(',')}
      style={{ width: '80%', alignSelf: 'center', marginBottom: '20px' }}
    />
  );
}
