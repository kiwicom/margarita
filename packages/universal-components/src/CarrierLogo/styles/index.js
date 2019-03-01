// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { SIZE_OPTIONS } from '../consts';

export const logoSizes = {
  'small-padded': {
    height: parseInt(defaultTokens.heightIconSmall, 10) - 1,
    width: parseInt(defaultTokens.widthIconSmall, 10) - 1,
  },
  [SIZE_OPTIONS.SMALL]: {
    height: parseInt(defaultTokens.heightIconSmall, 10),
    width: parseInt(defaultTokens.widthIconSmall, 10),
  },
  [SIZE_OPTIONS.MEDIUM]: {
    height: parseInt(defaultTokens.heightIconMedium, 10),
    width: parseInt(defaultTokens.widthIconMedium, 10),
  },
  [SIZE_OPTIONS.LARGE]: {
    height: parseInt(defaultTokens.heightIconLarge, 10),
    width: parseInt(defaultTokens.widthIconLarge, 10),
  },
};
