// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import Illustration from '../Illustration';

it('renders', () => {
  expect(shallow(<Illustration name="Boarding" />)).toMatchSnapshot();
});
