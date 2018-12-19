// @flow

import * as React from 'react';
import { render } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { Icon } from '..';

describe('Icon', () => {
  const { getByProps, getByText } = render(
    <Icon name="check" size="large" color="red" />
  );

  it('should have correct icon character for icon name', () => {
    expect(getByText('V')).toBeDefined();
  });

  it('should have correct props', () => {
    expect(getByProps({ size: 'large' })).toBeDefined();
    expect(getByProps({ name: 'check' })).toBeDefined();
    expect(getByProps({ color: 'red' })).toBeDefined();
  });

  it('should match snapshot diff between regular and custom icon', () => {
    const regular = render(<Icon name="check" />);
    const custom = render(<Icon name="check" size="large" color="red" />);

    expect(
      snapshotDiff(regular, custom, { contextLines: 2 })
    ).toMatchSnapshot();
  });

  it('throws an error if icon name is invalid', () => {
    // $FlowExpectedError we are able to mock it in Jest
    console.error = jest.fn(); // eslint-disable-line
    // $FlowExpectedError we expect this will be a flow error
    expect(() => render(<Icon name="__invalid-name__" />)).toThrowError(
      'Icon with name "__invalid-name__" does not exist.'
    );
  });
});
