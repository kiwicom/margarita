// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import Navbar from '../Navbar';

jest.mock('next/router', () => ({
  route: '/active',
}));

it('renders', () => {
  const wrapper = renderer.create(<Navbar />).toJSON();
  expect(wrapper).toMatchSnapshot();
});
