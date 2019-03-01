// @flow

import { defaultTokens } from '@kiwicom/orbit-design-tokens';

export const parsePxValue = (pxString: string) => parseFloat(pxString);
export const parseStringToFloat = (stringValue: string) =>
  parseFloat(stringValue);

export default {
  orbit: defaultTokens,
  rtl: false,
};
