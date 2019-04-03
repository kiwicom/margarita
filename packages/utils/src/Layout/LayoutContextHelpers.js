// @flow

import { LAYOUT } from './LayoutConstants';

// $FlowFixMe Object.values() returns mixed[] when it should return number[] https://github.com/facebook/flow/issues/2221
const layoutValues: Array<number> = Object.values(LAYOUT).sort((a, b) => a - b);

export const getLayout = (windowWidth: number): number =>
  layoutValues.reduce((result, value) => {
    if (windowWidth >= value) {
      return value;
    }
    return result;
  }, LAYOUT.largeDesktop);
