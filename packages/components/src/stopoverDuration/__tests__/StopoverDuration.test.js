// @flow

import * as React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';

import StopoverDuration from '../StopoverDuration';

const renderer = new ShallowRenderer();

it('works without location', () => {
  expect(
    renderer.render(
      <StopoverDuration stopoverDuration={100} locationName={undefined} />,
    ),
  ).toMatchSnapshot();
  expect(
    renderer.render(
      <StopoverDuration stopoverDuration={100} locationName={null} />,
    ),
  ).toMatchSnapshot();
});
