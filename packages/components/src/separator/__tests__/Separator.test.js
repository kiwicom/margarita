// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';

import Separator from '../Separator';

it('renders', () => {
  expect(render(<Separator />).toJSON()).toMatchSnapshot();
});
