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

export const wrapperStyle = {
  border: 0,
  padding: 0,
  textDecoration: 'none',
  backgroundColor: 'transparent',
};

export function disabledStyle(disabled: boolean) {
  return disabled
    ? { pointerEvents: 'none', cursor: 'initial' }
    : { pointerEvents: 'auto', cursor: 'pointer' };
}

export function displayBlock(block: ?boolean, width: ?number) {
  return block
    ? { display: 'block', width: '100%' }
    : { display: 'inline-block', width: width || 'inherit' };
}
