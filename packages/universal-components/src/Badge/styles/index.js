// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export const wrapperColor = {
  primary: defaultTokens.paletteProductNormal,
  critical: defaultTokens.backgroundBadgeCritical,
  dark: defaultTokens.backgroundBadgeDark,
  info: defaultTokens.backgroundBadgeInfo,
  neutral: defaultTokens.backgroundBadgeNeutral,
  success: defaultTokens.backgroundBadgeSuccess,
  warning: '#F9971E', // @TODO defaultTokens.backgroundBadgeWarning - after design tokens update
  white: '#F5F7F9', // @TODO defaultTokens.backgroundBadgeWhite - after design tokens update
};

export const textColor = {
  primary: defaultTokens.colorTextWhite,
  critical: defaultTokens.colorTextBadgeCritical,
  dark: defaultTokens.colorTextBadgeDark,
  info: defaultTokens.colorTextBadgeInfo,
  neutral: defaultTokens.colorTextBadgeNeutral,
  success: defaultTokens.colorTextBadgeSuccess,
  warning: '#FFFFFF', // @TODO defaultTokens.colorTextBadgeWarning - after design tokens update
  white: '#7F91A8', // @TODO defaultTokens.colorTextBadgeWhite - after design tokens update
};
