// @flow

import formatDate from '../formatDate';

it('formats date correctly', () => {
  const date = new Date('2018-11-28T16:20:00.000Z');
  expect(formatDate(date, 'MM/DD HH:mm')).toEqual('11/28 16:20');
});
