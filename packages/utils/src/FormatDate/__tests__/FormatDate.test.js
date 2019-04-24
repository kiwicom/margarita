// @flow

import { DATE_TIME_FORMAT } from '@kiwicom/margarita-config';

import formatDate from '../FormatDate';

it('formats iso date correctly', () => {
  expect(formatDate('2018-11-28T16:20:00.000Z', DATE_TIME_FORMAT)).toEqual(
    '11/28 16:20',
  );
});
