// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { designTokens } from '../../DesignTokens';

export const wrapperColor = {
  primary: defaultTokens.paletteProductNormal,
  critical: defaultTokens.backgroundBadgeCritical,
  dark: defaultTokens.backgroundBadgeDark,
  info: defaultTokens.backgroundBadgeInfo,
  neutral: defaultTokens.backgroundBadgeNeutral,
  success: defaultTokens.backgroundBadgeSuccess,
  warning: designTokens.backgroundBadgeWarning,
  white: designTokens.backgroundBadgeWhite,
};

export const textColor = {
  primary: defaultTokens.colorTextWhite,
  critical: defaultTokens.colorTextBadgeCritical,
  dark: defaultTokens.colorTextBadgeDark,
  info: defaultTokens.colorTextBadgeInfo,
  neutral: defaultTokens.colorTextBadgeNeutral,
  success: defaultTokens.colorTextBadgeSuccess,
  warning: designTokens.colorTextBadgeWarning,
  white: designTokens.colorTextBadgeWhite,
};
