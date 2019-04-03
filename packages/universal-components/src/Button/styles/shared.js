// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export const textColor = {
  primary: defaultTokens.colorTextButtonPrimary,
  secondary: defaultTokens.colorTextButtonSecondary,
  warning: defaultTokens.colorTextButtonWarning,
  critical: defaultTokens.colorTextButtonCritical,
  facebook: defaultTokens.colorTextButtonFacebook,
  google: defaultTokens.colorTextButtonGoogle,
};

export const wrapperColor = {
  primary: defaultTokens.backgroundButtonPrimary,
  secondary: defaultTokens.backgroundButtonSecondary,
  warning: defaultTokens.backgroundButtonWarning,
  critical: defaultTokens.backgroundButtonCritical,
  facebook: defaultTokens.backgroundButtonFacebook,
  google: defaultTokens.backgroundButtonGoogle,
};

export const size = {
  small: {
    height: parseInt(defaultTokens.heightButtonSmall, 10),
    fontSize: parseInt(defaultTokens.fontSizeButtonSmall, 10),
    padding: parseInt(defaultTokens.spaceSmall, 10),
    paddingWithIcon: parseInt(defaultTokens.spaceXSmall, 10),
  },
  normal: {
    height: parseInt(defaultTokens.heightButtonNormal, 10),
    fontSize: parseInt(defaultTokens.fontSizeButtonNormal, 10),
    padding: parseInt(defaultTokens.spaceMedium, 10),
    paddingWithIcon: parseInt(defaultTokens.spaceSmall, 10),
  },
  large: {
    height: parseInt(defaultTokens.heightButtonLarge, 10),
    fontSize: parseInt(defaultTokens.fontSizeButtonLarge, 10),
    padding: 28,
    paddingWithIcon: parseInt(defaultTokens.spaceMedium, 10),
  },
};
