// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import ErrorSearchIllustration from '../ErrorSearchIllustration';

it('renders', () => {
  expect(shallow(<ErrorSearchIllustration />)).toMatchSnapshot();
});
