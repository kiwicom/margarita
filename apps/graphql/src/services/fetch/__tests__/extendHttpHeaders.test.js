// @flow

import extendHttpHeaders from '../helpers/extendHttpHeaders';

const data = {
  message: 'lorem ipsum',
};

const options = {
  body: JSON.stringify(data),
};

test('extendHttpHeaders', () => {
  expect(
    extendHttpHeaders(options, { 'Content-Type': 'application/json' }),
  ).toEqual({
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  });
});
