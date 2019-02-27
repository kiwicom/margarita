// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import {
  textColor as sharedTextColor,
  wrapperColor as sharedWrapperColor,
} from './shared';

export const textColor = {
  ...sharedTextColor,
  info: defaultTokens.paletteBlueNormal,
  success: defaultTokens.paletteProductNormal,
};

export const wrapperColor = {
  ...sharedWrapperColor,
  info: defaultTokens.paletteBlueLight,
  success: defaultTokens.paletteProductLight,
};
