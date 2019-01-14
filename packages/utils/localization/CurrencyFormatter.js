// @flow

import { getLocaleDashed } from './GetDeviceLocale';

import 'intl'; // Polyfill because of Android
import 'intl/locale-data/complete';

const DEVICE_LOCALE = getLocaleDashed();

export type Price = {|
  +currency: string,
  +amount: number,
|};

export const formatPrice = ({ currency, amount }: Price) => {
  return Intl.NumberFormat(DEVICE_LOCALE, {
    style: 'currency',
    currency,
  }).format(amount);
};
