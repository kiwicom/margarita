// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import { RadioButton } from '..';

import { Text } from '../../Text';

describe('RadioButton', () => {
  const type = 'bullet';
  const bulletPosition = 'left';
  const checked = true;
  const disabled = false;
  const label = 'Label';
  const children = <Text>child-label</Text>;
  const onPress = jest.fn();
  const style = { padding: 10 };

  const { getByType, getByText, getAllByProps } = render(
    <RadioButton
      type={type}
      bulletPosition={bulletPosition}
      checked={checked}
      disabled={disabled}
      onPress={onPress}
      style={style}
      label={label}
    >
      {children}
    </RadioButton>,
  );

  it('should contain child', () => {
    expect(getByText('child-label')).toBeDefined();
  });

  it('should render children rather than label', () => {
    expect(() => {
      getByText(label);
    }).toThrow();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        type,
        bulletPosition,
        checked,
        disabled,
        children,
        onPress,
        style,
        label,
      }),
    ).toBeDefined();
  });

  it('should execute onPress method', () => {
    fireEvent(getByType(RadioButton), 'press');
  });

  it('should match snapshot diff', () => {
    const base = <RadioButton onPress={onPress}>{children}</RadioButton>;
    const extend = (
      <RadioButton
        type={type}
        bulletPosition={bulletPosition}
        checked={checked}
        disabled={disabled}
        onPress={onPress}
        style={style}
      >
        {children}
      </RadioButton>
    );

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });

  it('should render label', () => {
    const wrapper = render(<RadioButton onPress={onPress} label="label" />);
    expect(wrapper.getByTestId('label-wrapper')).toBeDefined();
  });
});
