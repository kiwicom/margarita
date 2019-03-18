// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { margaritaTokens } from '@kiwicom/margarita-design-tokens';

export const wrapperColor = {
  primary: defaultTokens.paletteProductNormal,
  critical: defaultTokens.backgroundBadgeCritical,
  dark: defaultTokens.backgroundBadgeDark,
  info: defaultTokens.backgroundBadgeInfo,
  neutral: defaultTokens.backgroundBadgeNeutral,
  success: defaultTokens.backgroundBadgeSuccess,
  warning: margaritaTokens.backgroundBadgeWarning,
  white: margaritaTokens.backgroundBadgeWhite,
};

export const textColor = {
  primary: defaultTokens.colorTextWhite,
  critical: defaultTokens.colorTextBadgeCritical,
  dark: defaultTokens.colorTextBadgeDark,
  info: defaultTokens.colorTextBadgeInfo,
  neutral: defaultTokens.colorTextBadgeNeutral,
  success: defaultTokens.colorTextBadgeSuccess,
  warning: margaritaTokens.colorTextBadgeWarning,
  white: margaritaTokens.colorTextBadgeWhite,
};
