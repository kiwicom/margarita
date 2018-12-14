// @flow strict

import {
  regularDate,
  time,
  birthday,
  machineDate,
  shortDate,
} from '../DateFormatter';

jest.mock('NativeModules', () => ({
  SettingsManager: {
    settings: {
      AppleLocale: 'en-US',
    },
  },
  I18nManager: {
    localeIdentifier: 'en-US',
  },
}));

it('formats date correctly', () => {
  expect(regularDate(new Date('2018-12-24'))).toBe('Mon, 12/24');
  expect(regularDate(new Date('2018-12-24T00:00:00Z'))).toBe('Mon, 12/24');
});

it('formats time correctly', () => {
  expect(time(new Date('2018-12-24'))).toBe(
    '12:00 AM' // midnight
  );
  expect(time(new Date('2018-12-24T01:00:00Z'))).toBe('1:00 AM');
});

it('formats birthday correctly', () => {
  expect(birthday(new Date('2018-12-24'))).toBe('12/24/2018');
  expect(birthday(new Date('2018-12-24T00:00:00Z'))).toBe('12/24/2018');
});

it('formats for machine correctly', () => {
  expect(machineDate(new Date('2018-12-24'))).toBe('2018-12-24');
  expect(machineDate(new Date('2018-01-01T01:00:00Z'))).toBe('2018-01-01');
});

it('always returns UTC', () => {
  expect(regularDate(new Date('2018-12-24T00:00:00+02:00'))).toBe('Sun, 12/23');
  expect(time(new Date('2018-12-24T00:00:00+02:00'))).toBe('10:00 PM');
});

it('formats shortDate correctly', () => {
  expect(shortDate(new Date('2018-12-24'))).toBe('12/24');
  expect(shortDate(new Date('2018-12-24T00:00:00Z'))).toBe('12/24');
});
