// @flow strict

import { NativeModules, Platform } from 'react-native';
import DateUtils from './DateUtils';

import 'intl'; // Polyfill because of Android
import 'intl/locale-data/complete';

type FormatterConfig = {|
  +weekday?: 'narrow' | 'short' | 'long',
  +year?: 'numeric' | '2-digit',
  +month?: 'numeric' | '2-digit' | 'narrow' | 'short' | 'long',
  +day?: 'numeric' | '2-digit',
  +hour?: 'numeric' | '2-digit',
  +minute?: 'numeric' | '2-digit',
  +second?: 'numeric' | '2-digit',
|};

let DEVICE_LOCALE;

switch (Platform.OS) {
  case 'ios':
    DEVICE_LOCALE = NativeModules.SettingsManager.settings.AppleLocale.replace(
      '_',
      '-'
    );
    break;

  case 'android':
    DEVICE_LOCALE = NativeModules.I18nManager.localeIdentifier.replace(
      '_',
      '-'
    );
    break;
  default:
    DEVICE_LOCALE;
}

const pad = number => {
  if (number < 10) {
    return `0${number}`;
  }
  return number;
};

const createDateFormatter = (config: FormatterConfig) =>
  function dateFromtater(date: Date = DateUtils.getUTCNow()) {
    return Intl.DateTimeFormat(DEVICE_LOCALE, {
      ...config,
      timeZone: 'UTC', // this is very important!
    }).format(date);
  };

const birthday = createDateFormatter({
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
});

const time = createDateFormatter({
  hour: 'numeric',
  minute: 'numeric',
});

const shortDate = createDateFormatter({
  month: 'numeric',
  day: 'numeric',
});

const regularDate = createDateFormatter({
  weekday: 'short',
  month: 'numeric',
  day: 'numeric',
});

const machineDate = (date: Date = DateUtils.getUTCNow()) =>
  `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(
    date.getUTCDate()
  )}`;

const custom = (date: Date = DateUtils.getUTCNow(), config: FormatterConfig) =>
  createDateFormatter(config)(date);

export {
  createDateFormatter,
  time,
  birthday,
  custom,
  shortDate,
  regularDate,
  machineDate,
};
