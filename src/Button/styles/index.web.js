// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import {
  textColor as sharedTextColor,
  wrapperColor as sharedWrapperColor,
} from './shared';

export const textColor = {
  ...sharedTextColor,
  info: defaultTokens.colorTextButtonInfo,
  success: defaultTokens.colorTextButtonSuccess,
};

export const wrapperColor = {
  ...sharedWrapperColor,
  info: defaultTokens.backgroundButtonInfo,
  success: defaultTokens.backgroundButtonSuccess,
};
