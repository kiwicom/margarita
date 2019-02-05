// @flow

import * as React from 'react';
import { Platform, View } from 'react-native';
import { render, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import CheckboxWeb from '../Checkbox.web';
import CheckboxNative from '../Checkbox.native';
import CheckboxShared from '../CheckboxShared';
import CheckboxText from '../CheckboxText';

const originalPlatform = Platform.OS;
const label = 'Label';
const value = 'value';
const hasError = false;
const disabled = false;
const checked = true;
const name = 'name';
const info = 'info';
const onChange = jest.fn();

afterEach(() => {
  Platform.OS = originalPlatform;
});

describe('CheckBox - web', () => {
  Platform.OS = 'web';
  const { getByType, getByText, getAllByProps } = render(
    <CheckboxWeb
      label={label}
      value={value}
      hasError={hasError}
      disabled={disabled}
      checked={checked}
      name={name}
      info={info}
      onChange={onChange}
    />,
  );

  it('should contain a label', () => {
    expect(getByText(label)).toBeDefined();
  });

  it('should contain a info', () => {
    expect(getByText(info)).toBeDefined();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        label,
        value,
        hasError,
        disabled,
        checked,
        name,
        info,
        onChange,
      }),
    ).toBeDefined();
  });

  it('should execute onChange method', () => {
    fireEvent(getByType(CheckboxWeb), 'change');
  });

  it('should match snapshot diff', () => {
    const base = render(<CheckboxWeb />);
    const extend = render(
      <CheckboxWeb
        label={label}
        value={value}
        hasError={hasError}
        disabled={disabled}
        checked={checked}
        name={name}
        info={info}
        onChange={onChange}
      />,
    );

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});

describe('CheckBox - native', () => {
  Platform.OS = 'ios';
  const { getByType, getByText, getAllByProps } = render(
    <CheckboxNative
      label={label}
      hasError={hasError}
      disabled={disabled}
      checked={checked}
      info={info}
      onChange={onChange}
    />,
  );

  it('should contain a label', () => {
    expect(getByText(label)).toBeDefined();
  });

  it('should contain a info', () => {
    expect(getByText(info)).toBeDefined();
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        label,
        hasError,
        disabled,
        checked,
        info,
        onChange,
      }),
    ).toBeDefined();
  });

  it('should execute onChange method', () => {
    fireEvent(getByType(CheckboxNative), 'change');
  });

  it('should match snapshot diff', () => {
    const base = render(<CheckboxNative />);
    const extend = render(
      <CheckboxNative
        label={label}
        hasError={hasError}
        disabled={disabled}
        checked={checked}
        info={info}
        onChange={onChange}
      />,
    );

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});

describe('CheckboxShared', () => {
  it('should render CheckboxText with label', () => {
    const wrapper = render(<CheckboxShared label="label" />);
    expect(wrapper.getByType(CheckboxText)).toBeDefined();
  });

  it('should render children instead of label', () => {
    const wrapper = render(
      <CheckboxShared label="label">
        <View testID="test-view" />
      </CheckboxShared>,
    );
    expect(wrapper.getByTestId('test-view')).toBeDefined();
    expect(() => {
      wrapper.getByType(CheckboxText);
    }).toThrow();
  });
});
