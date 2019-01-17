// @flow

import React from 'react';
import { shallow, render, fireEvent } from 'react-native-testing-library';
import OptionPicker, { filterOptions } from '../OptionPicker';
import options, { Prague, Berlin } from '../mocks/places';
import { Badge } from '../../Badge';

jest.mock('NativeAnimatedHelper');

test('filterOptions', () => {
  expect(filterOptions([Prague, Berlin], [Berlin])).toEqual([Prague]);
});

describe('OptionPicker', () => {
  const label = 'label';
  const placeholder = 'placeholder';
  const onChangeText = jest.fn();
  const onPressAdd = jest.fn();
  const onPressItem = jest.fn();
  const onSelectedChange = jest.fn();

  const {
    getByText,
    getByProps,
    getByTestId,
    getAllByType,
    getByPlaceholder,
  } = render(
    <OptionPicker
      label={label}
      placeholder={placeholder}
      onChangeText={onChangeText}
      options={options}
      onPressAdd={onPressAdd}
      onPressItem={onPressItem}
      onSelectedChange={onSelectedChange}
    />
  );
  test('passed the props', () => {
    expect(
      getByProps({
        onChangeText,
        options,
        onPressAdd,
        onPressItem,
        onSelectedChange,
        label,
        placeholder,
      })
    ).toBeDefined();
    expect(getByText(label)).toBeDefined();
    expect(getByPlaceholder(placeholder)).toBeDefined();
  });

  test('select place', () => {
    const Item = getByText(Prague.label);
    expect(() => getByTestId('input-tag')).toThrow('No instances found');
    fireEvent(Item, 'press');
    expect(getByTestId('input-tag')).toBeDefined();

    expect(getAllByType(Badge)).toHaveLength(1);
    expect(onPressItem).toHaveBeenCalledTimes(1);

    expect(onSelectedChange).toHaveBeenCalledTimes(1);
    expect(onSelectedChange).toHaveBeenCalledWith([Prague]);
  });

  test('select another place', () => {
    const Item = getByText(Berlin.label);
    fireEvent(Item, 'press');

    expect(onPressItem).toHaveBeenCalledTimes(2);
    expect(onSelectedChange).toHaveBeenCalledTimes(2);
    expect(onSelectedChange).toHaveBeenCalledWith([Berlin]);
    expect(getAllByType(Badge)).toHaveLength(1);
  });

  test('render', () => {
    const { output } = shallow(
      <OptionPicker
        options={options}
        onChangeText={onChangeText}
        label={label}
        placeholder={placeholder}
      />
    );

    expect(output).toMatchSnapshot();
  });
});
