// @flow strict

import DateFormatter from '../DateFormatter';

jest.mock('../GetDeviceLocale');

it('formats date correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatToDate()).toBe(
    'Mon, 12/24',
  );
  expect(DateFormatter(new Date('2018-12-24T00:00:00Z')).formatToDate()).toBe(
    'Mon, 12/24',
  );
});

it('formats time correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatToTime()).toBe(
    '12:00 AM', // midnight
  );
  expect(DateFormatter(new Date('2018-12-24T01:00:00Z')).formatToTime()).toBe(
    '1:00 AM',
  );
});

it('formats birthday correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatToBirthday()).toBe(
    '12/24/2018',
  );
  expect(
    DateFormatter(new Date('2018-12-24T00:00:00Z')).formatToBirthday(),
  ).toBe('12/24/2018');
});

it('formats for machine correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatForMachine()).toBe(
    '2018-12-24',
  );
  expect(
    DateFormatter(new Date('2018-01-01T01:00:00Z')).formatForMachine(),
  ).toBe('2018-01-01');
});

it('always returns UTC', () => {
  expect(
    DateFormatter(new Date('2018-12-24T00:00:00+02:00')).formatToDate(),
  ).toBe('Sun, 12/23');
  expect(
    DateFormatter(new Date('2018-12-24T00:00:00+02:00')).formatToTime(),
  ).toBe('10:00 PM');
});

it('formats shortDate correctly', () => {
  expect(DateFormatter(new Date('2018-12-24')).formatToShortDate()).toBe(
    '12/24',
  );
  expect(
    DateFormatter(new Date('2018-12-24T00:00:00Z')).formatToShortDate(),
  ).toBe('12/24');
});
