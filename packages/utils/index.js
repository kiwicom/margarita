// @flow

export { capitalize } from './src/Capitalize/Capitalize';

export { formatPrice } from './src/CurrencyFormatter/CurrencyFormatter';
export type { Price } from './src/CurrencyFormatter/CurrencyFormatter';
export { default as Device } from './src/Device/Device';

export { LAYOUT } from './src/Layout/LayoutConstants';
export type { LayoutContextState } from './src/Layout/LayoutContext';
export { withLayoutContext } from './src/Layout/LayoutContext';
export { default as LayoutContextProvider } from './src/Layout/LayoutContext';

export { default as withContext } from './src/withContext/withContext';
export { default as formatDate } from './src/FormatDate/FormatDate';

export const noop = () => {};
export { default as debounce } from 'lodash/debounce';
