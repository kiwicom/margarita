// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { PickerButton } from '..';

import { Touchable } from '../../Touchable';

const noop = jest.fn();

describe('PickerButton', () => {
  it('should contain placeholder text', () => {
    const placeholder = 'Placeholder';
    const { getByText } = render(<PickerButton placeholder={placeholder} />);
    expect(getByText(placeholder)).toBeDefined();
  });

  it('should contain value text', () => {
    const value = 'Value';
    const { getByText } = render(<PickerButton value={value} />);
    expect(getByText(value)).toBeDefined();
  });

  it('should execute onPress function', () => {
    const onPress = jest.fn();
    const { getByType } = render(<PickerButton onPress={onPress} />);
    fireEvent.press(getByType(Touchable));
    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot diff', () => {
    const base = <PickerButton />;
    const extend = (
      <PickerButton
        value="Value"
        onPress={noop}
        placeholder="Select"
        iconName="chevron-down"
      />
    );
    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});
