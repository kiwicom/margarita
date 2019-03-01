// @flow

import * as React from 'react';
import { shallow } from 'react-native-testing-library';

import MenuItem from '../MenuItem';

jest.mock('Platform', () => ({
  OS: 'ios',
}));

describe('MenuGroup', () => {
  it('renders correctly', () => {
    const { output } = shallow(<MenuItem onPress={jest.fn()} title="test" />);
    expect(output).toMatchSnapshot();
  });

  it('hides actionIcon', () => {
    const { output } = shallow(
      <MenuItem onPress={jest.fn()} title="test" hideActionIcon />,
    );
    expect(output).toMatchSnapshot();
  });
});
