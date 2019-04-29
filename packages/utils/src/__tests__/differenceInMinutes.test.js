// @flow

import differenceInMinutes from '../differenceInMinutes';

it('calculates difference correctly', () => {
  expect(
    differenceInMinutes(
      new Date(2019, 1, 1, 12, 30),
      new Date(2019, 1, 1, 12, 40),
    ),
  ).toEqual(10);
});

it('returns null if from is null or undefined', () => {
  expect(differenceInMinutes(null, new Date(2019, 1, 1, 12, 40))).toBeNull();
  expect(
    differenceInMinutes(undefined, new Date(2019, 1, 1, 12, 40)),
  ).toBeNull();
});

it('returns null if to is null or undefined', () => {
  expect(differenceInMinutes(new Date(2019, 1, 1, 12, 40), null)).toBeNull();
  expect(
    differenceInMinutes(new Date(2019, 1, 1, 12, 40), undefined),
  ).toBeNull();
});
