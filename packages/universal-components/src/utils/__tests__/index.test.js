// @flow

import { createStylesGenerator } from '../index';

// TODO add age case
test('createStylesGenerator', () => {
  const fontSizes = {
    small: 12,
    medium: 14,
    large: 16,
  };
  const styleGenerator = createStylesGenerator('fontSize', fontSizes);
  expect(styleGenerator()).toMatchSnapshot();
});
