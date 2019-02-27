// @flow

import React from 'react';
import { TextInput } from 'react-native';
import { shallow, render, fireEvent } from 'react-native-testing-library';

import OptionPicker from '../OptionPicker';
import options, { Prague, Berlin } from '../__mocks__/places';
import { Badge } from '../../Badge';

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
    getByPlaceholder,
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
    expect(getAllByType(Badge)).toHaveLength(1);
  });

  it('should not display placeholder', () => {
    expect(() => getByPlaceholder(placeholder)).toThrow('No instances found');
  });

  it('calls the onPressItem callback', () => {
    const Item = getByText(Prague.label);
    fireEvent(Item, 'press');
    expect(onPressItem).toHaveBeenCalledWith(Prague);
  });

  it('calls the onClearPress callback', () => {
    const Item = getByTestId('delete-button');
    fireEvent(Item, 'press');
    expect(onClearPress).toHaveBeenCalledTimes(1);
  });

  it('calls the onChangeText callback', () => {
    fireEvent.changeText(getByType(TextInput), 'CHANGE_TEXT');
    expect(onChangeText).toHaveBeenLastCalledWith('CHANGE_TEXT');
  });

  it('renders', () => {
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

  it('should display placeholder', () => {
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
