// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';
import TextInput from '..';
import ServiceLogo from '../../ServiceLogo/component';

describe('TextInput', () => {
  const size = 'normal';
  const type = 'number';
  const label = 'Label';
  const value = 'value';
  const placeholder = 'placeholder';
  const onFocus = jest.fn();
  const onChangeText = jest.fn();

  const { getByType, getByText, getAllByProps } = render(
    <TextInput
      size={size}
      type={type}
      value={value}
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onFocus={onFocus}
      suffix={<ServiceLogo name="MIR" />}
    />
  );

  it('should contain an input', () => {
    expect(getByType('TextInput')).toBeDefined();
  });

  it('should contain a label', () => {
    expect(getByText(label)).toBeDefined();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        size,
        type,
        value,
        placeholder,
      })
    ).toBeDefined();
  });

  it('should execute onChangeText method', () => {
    fireEvent.changeText(getByType('TextInput'), 'content');
  });

  it('should execute onFocus method', () => {
    fireEvent(getByType('TextInput'), 'focus');
  });

  it('should match snapshot diff between small and normal input', () => {
    const normal = <TextInput label="Label" />;
    const small = <TextInput label="Label" size="small" />;

    expect(snapshotDiff(normal, small, { contextLines: 1 })).toMatchSnapshot();
  });
});
