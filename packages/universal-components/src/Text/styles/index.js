// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export const textColor = {
  attention: defaultTokens.colorTextAttention,
  critical: defaultTokens.colorTextCritical,
  info: defaultTokens.colorTextInfo,
  primary: defaultTokens.colorTextPrimary,
  secondary: defaultTokens.colorTextSecondary,
  success: defaultTokens.colorTextSuccess,
  warning: defaultTokens.colorTextWarning,
  white: defaultTokens.colorTextWhite,
};

export const fontSize = {
  large: parseFloat(defaultTokens.fontSizeTextLarge),
  normal: parseFloat(defaultTokens.fontSizeTextNormal),
  small: parseFloat(defaultTokens.fontSizeTextSmall),
};

export const fontWeight = {
  normal: defaultTokens.fontWeightNormal,
  bold: defaultTokens.fontWeightBold,
};

export const align = {
  center: 'center',
  justify: 'justify',
  left: 'left',
  right: 'right',
};
