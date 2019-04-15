// @flow

import { getLocaleDashed } from '@kiwicom/margarita-device';

import 'intl'; // Polyfill because of Android
import 'intl/locale-data/complete';

const DEVICE_LOCALE = getLocaleDashed();

export const formatPrice = (amount: ?number, currency: ?string): string => {
  if (amount == null || currency == null) {
    return 'Not specified';
  }
  return Intl.NumberFormat(DEVICE_LOCALE, {
    style: 'currency',
    currency,
  }).format(amount);
};
