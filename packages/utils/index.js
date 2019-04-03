// @flow

// Helpers
export { capitalize } from './helpers/capitalize';

// Localization
export { formatPrice } from './localization/CurrencyFormatter';
export type { Price } from './localization/CurrencyFormatter';
export { default as DateFormatter } from './localization/DateFormatter';
export { default as DateUtils } from './localization/DateUtils';
export { default as Device } from './device/Device';

// LayoutContext
export { LAYOUT } from './layoutContext/LayoutConstants';
export type { LayoutContextState } from './layoutContext/LayoutContext';
export { withLayoutContext } from './layoutContext/LayoutContext';
export {
  default as LayoutContextProvider,
} from './layoutContext/LayoutContext';

// src
export { default as withContext } from './src/withContext/withContext';
export { default as formatDate } from './src/formatDate';

// other
export const noop = () => {};
export { default as debounce } from 'lodash/debounce';
