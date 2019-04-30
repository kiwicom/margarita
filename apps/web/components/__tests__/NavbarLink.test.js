// @flow

import * as React from 'react';
import renderer from 'react-test-renderer';

import NavbarLink from '../NavbarLink';

jest.mock('next/router', () => ({
  route: '/active',
}));

it('sets isActive to true when link is active', () => {
  const wrapper = renderer.create(<NavbarLink route="/active" label="lol" />);
  // $FlowExpectedError: We get the children instance (as it is wrapped by a HOC)
  const instance = wrapper.root.children[0].instance;
  // $FlowExpectedError: a test instance does have state
  expect(instance.state.isActive).toBe(true);
});

it('sets isActive to false when link is not active', () => {
  const wrapper = renderer.create(<NavbarLink route="/inactive" label="lol" />);
  // $FlowExpectedError: We get the children instance (as it is wrapped by a HOC)
  const instance = wrapper.root.children[0].instance;
  // $FlowExpectedError: a test instance does have state
  expect(instance.state.isActive).toBe(false);
});
