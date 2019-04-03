// @flow

import { DATE_TIME_FORMAT } from '@kiwicom/margarita-config';

import formatDate from '../FormatDate';

it('formats date correctly', () => {
  const date = new Date('2018-11-28T16:20:00.000Z');
  expect(formatDate(date, DATE_TIME_FORMAT)).toEqual('11/28 16:20');
});
