// @flow strict

import { getLayout } from '../LayoutContextHelpers';
import { LAYOUT } from '../LayoutConstants';

it('returns correct layout values', () => {
  expect(getLayout(1654)).toBe(LAYOUT.largeDesktop);
  expect(getLayout(312)).toBe(LAYOUT.smallMobile);
  expect(getLayout(992)).toBe(LAYOUT.tablet);
});
