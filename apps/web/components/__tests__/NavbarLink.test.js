// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import NavbarLink from '../NavbarLink';

jest.mock('next/router', () => ({
  route: '/active',
}));

it('sets isActive to true when link is active', () => {
  const wrapper = renderer.create(<NavbarLink route="/active" label="lol" />);
  const instance = wrapper.getInstance();

  // $FlowExpectedError: a test instance does have state
  expect(instance.state.isActive).toBe(true);
});

it('sets isActive to false when link is not active', () => {
  const wrapper = renderer.create(<NavbarLink route="/inactive" label="lol" />);
  const instance = wrapper.getInstance();

  // $FlowExpectedError: a test instance does have state
  expect(instance.state.isActive).toBe(false);
});
