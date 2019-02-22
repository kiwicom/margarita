// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import { SegmentContainer } from '../SegmentContainer';

it('renders', () => {
  expect(shallow(<SegmentContainer data={null} />)).toMatchSnapshot();
});
