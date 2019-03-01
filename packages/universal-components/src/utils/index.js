// @flow

import type { PlatformStyleObjectType } from '../PlatformStyleSheet/StyleTypes';

export const createStylesGenerator = <K: string, T: { [K]: string | number }>(
  styleName: K,
  styles: T,
) => (): PlatformStyleObjectType =>
  Object.keys(styles).reduce((acc, style) => {
    acc[style] = {
      [styleName]: styles[style],
    };
    return acc;
  }, {});
