// @flow

import React from 'react';
import { TextInput } from 'react-native';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import OptionPicker from '../OptionPicker';
import options, { Prague, Berlin } from '../mocks/places';
import Tag from '../../TagsInput/components/Tag';

jest.mock('NativeAnimatedHelper');

describe('OptionPicker', () => {
  const label = 'label';
  const placeholder = 'placeholder';
  const onChangeText = jest.fn();
  const onPressAdd = jest.fn();
  const onPressItem = jest.fn();
  const onKeyPress = jest.fn();
  const onClearPress = jest.fn();
  const selected = [Berlin];
  const value = Berlin.label;

  const {
    getByText,
    getByProps,
    getByTestId,
    getAllByType,
    getByType,
  } = render(
    <OptionPicker
      onClearPress={onClearPress}
      onKeyPress={onKeyPress}
      text={value}
      label={label}
      selected={selected}
      placeholder={placeholder}
      onChangeText={onChangeText}
      options={options}
      onPressAdd={onPressAdd}
      onPressItem={onPressItem}
    />,
  );
  test('passed the props', () => {
    expect(
      getByProps({
        selected,
        onChangeText,
        options,
        onPressAdd,
        onPressItem,
        onClearPress,
        onKeyPress,
        label,
        placeholder,
      }),
    ).toBeDefined();
    expect(getByText(label)).toBeDefined();
    expect(getAllByType(Tag)).toHaveLength(1);
  });

  test('call the onPressItem callback', () => {
    const Item = getByText(Prague.label);
    fireEvent(Item, 'press');
    expect(onPressItem).toHaveBeenCalledWith(Prague);
  });

  test('call the onClearPress callback', () => {
    const Item = getByTestId('delete-button');
    fireEvent(Item, 'press');
    expect(onClearPress).toHaveBeenCalledTimes(1);
  });

  test('call the onChangeText callback', () => {
    fireEvent.changeText(getByType(TextInput), 'CHANGE_TEXT');
    expect(onChangeText).toHaveBeenLastCalledWith('CHANGE_TEXT');
  });

  test('render', () => {
    const { output } = shallow(
      <OptionPicker
        onClearPress={onClearPress}
        onKeyPress={onKeyPress}
        text={value}
        label={label}
        selected={selected}
        placeholder={placeholder}
        onChangeText={onChangeText}
        options={options}
        onPressAdd={onPressAdd}
        onPressItem={onPressItem}
      />,
    );

    expect(output).toMatchSnapshot();
  });

  test('should display placeholder', () => {
    const { getByPlaceholder } = render(
      <OptionPicker
        text=""
        onClearPress={onClearPress}
        onKeyPress={onKeyPress}
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        options={options}
        onPressAdd={onPressAdd}
        onPressItem={onPressItem}
      />,
    );
    expect(getByPlaceholder(placeholder)).toBeDefined();
  });
});
