// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import Duration, { separateHours } from '../Duration';

const renderer = new ShallowRenderer();

it('works as expected', () => {
  const test = (duration, expected) => {
    expect(separateHours(duration)).toEqual(expected);
  };

  test(-1, { hours: 0, minutes: 0 });
  test(0, { hours: 0, minutes: 0 });
  test(1, { hours: 0, minutes: 1 });
  test(59, { hours: 0, minutes: 59 });
  test(60, { hours: 1, minutes: 0 });
  test(121, { hours: 2, minutes: 1 });
  test(10080, { hours: 168, minutes: 0 });
});

it('works with broken input', () => {
  expect(renderer.render(<Duration duration={undefined} />)).toMatchSnapshot();

  expect(renderer.render(<Duration duration={null} />)).toMatchSnapshot();
});
