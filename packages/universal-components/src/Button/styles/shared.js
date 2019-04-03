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
    paddingStart: {
      paddingButton: parseInt(defaultTokens.spaceSmall, 10),
      paddingButtonWithIcons: parseInt(defaultTokens.spaceXSmall, 10),
      paddingButtonWithRightIcon: parseInt(defaultTokens.spaceSmall, 10),
      paddingButtonWithLeftIcon: parseInt(defaultTokens.spaceXSmall, 10),
    },
    paddingEnd: {
      paddingButton: parseInt(defaultTokens.spaceSmall, 10),
      paddingButtonWithIcons: parseInt(defaultTokens.spaceXSmall, 10),
      paddingButtonWithRightIcon: parseInt(defaultTokens.spaceXSmall, 10),
      paddingButtonWithLeftIcon: parseInt(defaultTokens.spaceSmall, 10),
    },
  },
  normal: {
    height: parseInt(defaultTokens.heightButtonNormal, 10),
    fontSize: parseInt(defaultTokens.fontSizeButtonNormal, 10),
    paddingStart: {
      paddingButton: parseInt(defaultTokens.spaceMedium, 10),
      paddingButtonWithIcons: parseInt(defaultTokens.spaceSmall, 10),
      paddingButtonWithRightIcon: parseInt(defaultTokens.spaceMedium, 10),
      paddingButtonWithLeftIcon: parseInt(defaultTokens.spaceSmall, 10),
    },
    paddingEnd: {
      paddingButton: parseInt(defaultTokens.spaceMedium, 10),
      paddingButtonWithIcons: parseInt(defaultTokens.spaceSmall, 10),
      paddingButtonWithRightIcon: parseInt(defaultTokens.spaceSmall, 10),
      paddingButtonWithLeftIcon: parseInt(defaultTokens.spaceMedium, 10),
    },
  },
  large: {
    height: parseInt(defaultTokens.heightButtonLarge, 10),
    fontSize: parseInt(defaultTokens.fontSizeButtonLarge, 10),
    paddingStart: {
      paddingButton: 28,
      paddingButtonWithIcons: parseInt(defaultTokens.spaceMedium, 10),
      paddingButtonWithRightIcon: 28,
      paddingButtonWithLeftIcon: parseInt(defaultTokens.spaceMedium, 10),
    },
    paddingEnd: {
      paddingButton: 28,
      paddingButtonWithIcons: parseInt(defaultTokens.spaceMedium, 10),
      paddingButtonWithRightIcon: parseInt(defaultTokens.spaceMedium, 10),
      paddingButtonWithLeftIcon: 28,
    },
  },
};
