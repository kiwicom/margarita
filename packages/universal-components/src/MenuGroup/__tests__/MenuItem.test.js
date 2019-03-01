// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import MenuItem from '../MenuItem';
import { Icon } from '../../Icon';

describe('MenuGroup', () => {
  it('renders with subTitle', () => {
    const { output } = shallow(
      <MenuItem onPress={jest.fn()} title="test" subTitle="sub" />,
    );
    expect(output).toMatchSnapshot();
  });

  it('renders with label', () => {
    const { output } = shallow(
      <MenuItem onPress={jest.fn()} title="test" label="label" />,
    );
    expect(output).toMatchSnapshot();
  });

  it('renders with icon', () => {
    const { output } = shallow(
      <MenuItem
        onPress={jest.fn()}
        title="test"
        icon={<Icon name="clock" />}
      />,
    );
    expect(output).toMatchSnapshot();
  });
});
