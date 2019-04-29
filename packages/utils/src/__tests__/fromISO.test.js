// @flow

import fromISO from '../fromISO';

it('parses ISO date correctly', () => {
  expect(fromISO('2018-01-01')).toEqual(new Date('2018-01-01'));
  expect(fromISO('2019-03-07T20:30:00.000Z')).toEqual(
    new Date('2019-03-07T20:30:00.000Z'),
  );
});

it('returns null if date is null or undefined', () => {
  expect(fromISO(null)).toBeNull();
  expect(fromISO(undefined)).toBeNull();
});

it('handles wrong format', () => {
  expect(fromISO('lol')).toBeNull();
  expect(fromISO(123)).toBeNull();
});
