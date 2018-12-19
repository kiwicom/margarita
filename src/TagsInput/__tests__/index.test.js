// @flow

import * as React from 'react';
import { TextInput } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import { TagsInput } from '../index';

jest.mock('NativeAnimatedHelper');

describe('TagsInput', () => {
  const fontSize = 15;
  const label = 'label';
  const onChangeText = jest.fn();
  const onClearPress = jest.fn();
  const placeholder = 'placeholder';
  const tags = ['Prague', 'London'];
  const value = 'value';

  const { getByType, getByText, getAllByProps, getByTestId } = render(
    <TagsInput
      selected={tags}
      onChangeText={onChangeText}
      onClearPress={onClearPress}
      label={label}
      placeholder={placeholder}
      fontSize={fontSize}
      value={value}
    />
  );

  it('should contain an input', () => {
    expect(getByType(TextInput)).toBeDefined();
  });

  it('should contain a label', () => {
    expect(getByText(label)).toBeDefined();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        selected: tags,
        label,
        placeholder,
        fontSize,
        onChangeText,
        value,
      })
    ).toBeDefined();
  });

  it('should execute onChangeText method', () => {
    const input = 'content';
    fireEvent.changeText(getByType(TextInput), input);
    expect(onChangeText).toHaveBeenCalledWith(input);
    expect(onChangeText).toHaveBeenCalledTimes(1);
    expect(getByText(input)).toBeDefined();
  });

  it('should execute onClearPress method', () => {
    fireEvent.press(getByTestId('delete-button'));
    expect(onClearPress).toHaveBeenCalledTimes(1);
  });

  it('should render Tags', () => {
    tags.map(tag => expect(getByText(tag)).toBeDefined());
  });
});
