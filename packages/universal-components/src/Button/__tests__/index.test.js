// @flow

import * as React from 'react';
import { Platform, View } from 'react-native';
import { render, shallow, fireEvent } from 'react-native-testing-library';
import snapshotDiff from 'snapshot-diff';

import ButtonWeb from '../Button.web';
import ButtonNative from '../Button.native';
import ButtonInner from '../ButtonInner';
import { Icon } from '../../Icon';

const originalPlatform = Platform.OS;
const noop = jest.fn();
const buttonText = 'Button text';
const buttonSublabel = 'Button sublabel';
const leftIcon = <Icon name="calendar" />;
const rightIcon = <Icon name="chevron-right" />;
const width = 200;
const disabled = false;
const href = 'https://lolilol.com';
const block = false;
const type = 'info';
const testID = 'testID';
const circled = false;
const size = 'normal';
const style = {};
afterEach(() => {
  Platform.OS = originalPlatform;
});

describe('Button - web', () => {
  Platform.OS = 'web';
  const { getByText, getAllByProps } = render(
    <ButtonWeb
      onPress={noop}
      type={type}
      sublabel={buttonSublabel}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      width={width}
      disabled={disabled}
      href={href}
      block={block}
      testID={testID}
      label={buttonText}
      circled={circled}
      size={size}
      style={style}
    />,
  );

  it('should have the right text', () => {
    expect(getByText(buttonText)).toBeDefined();
  });

  it('should not have any sublabel', () => {
    expect(() => getByText(buttonSublabel)).toThrow('No instances found');
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        onPress: noop,
        type,
        sublabel: buttonSublabel,
        leftIcon,
        rightIcon,
        width,
        disabled,
        href,
        block,
        testID,
        circled,
        size,
        style,
      }),
    ).toBeDefined();
  });

  it('should render a button by default', () => {
    const defaultButton = render(
      <ButtonWeb onPress={noop}>{buttonText}</ButtonWeb>,
    );
    // $FlowFixMe react-native-testing-library does not allow HTML elements
    expect(defaultButton.getByType('button')).toBeDefined();
    // $FlowFixMe react-native-testing-library does not allow HTML elements
    fireEvent(defaultButton.getByType('button'), 'click');
  });

  it('should render an <a> tag if href is provided', () => {
    const withHref = render(
      <ButtonWeb onPress={noop} href={href}>
        {buttonText}
      </ButtonWeb>,
    );
    // $FlowFixMe react-native-testing-library does not allow HTML elements
    expect(withHref.getByType('a')).toBeDefined();
    // $FlowFixMe react-native-testing-library does not allow HTML elements
    expect(() => fireEvent(withHref.getByType('a'), 'click')).toThrow(
      'No handler function found for event: click',
    );
  });

  it('should match the snapshot', () => {
    const { output } = shallow(
      <ButtonWeb
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        style={style}
      >
        {buttonText}
      </ButtonWeb>,
    );
    expect(output).toMatchSnapshot();
  });

  it('should match snapshot diff', () => {
    const extend = render(
      <ButtonWeb
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        style={style}
      >
        {buttonText}
      </ButtonWeb>,
    );
    const base = render(<ButtonWeb onPress={noop}>{buttonText}</ButtonWeb>);

    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });

  it('should match snapshot difference with loading state', () => {
    const base = render(
      <ButtonWeb
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        isLoading={false}
      >
        {buttonText}
      </ButtonWeb>,
    );
    const loading = render(
      <ButtonWeb
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        isLoading
      >
        {buttonText}
      </ButtonWeb>,
    );
    expect(snapshotDiff(base, loading)).toMatchSnapshot();
  });
});

describe('Button - native', () => {
  Platform.OS = 'ios';
  const { getByText, getByType, getAllByProps } = render(
    <ButtonNative
      onPress={noop}
      type={type}
      sublabel={buttonSublabel}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      width={width}
      disabled={disabled}
      href={href}
      block={block}
      testID={testID}
      label={buttonText}
      circled={circled}
      size={size}
      style={style}
    />,
  );

  it('should have the right text', () => {
    expect(getByText(buttonText)).toBeDefined();
  });

  it('should have the right sublabel', () => {
    expect(getByText(buttonSublabel)).toBeDefined();
  });

  it('should execute onPress method', () => {
    fireEvent(getByType(ButtonNative), 'press');
  });

  it('should have passed props', () => {
    expect(
      getAllByProps({
        onPress: noop,
        type,
        sublabel: buttonSublabel,
        leftIcon,
        rightIcon,
        width,
        disabled,
        href,
        block,
        testID,
        circled,
        size,
        style,
      }),
    ).toBeDefined();
  });

  it('should match the snapshot', () => {
    const { output } = shallow(
      <ButtonNative
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        style={style}
      >
        {buttonText}
      </ButtonNative>,
    );
    expect(output).toMatchSnapshot();
  });

  it('should match snapshot difference with loading state', () => {
    const base = render(
      <ButtonNative
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        isLoading={false}
      >
        {buttonText}
      </ButtonNative>,
    );
    const loading = render(
      <ButtonNative
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        isLoading
      >
        {buttonText}
      </ButtonNative>,
    );
    expect(snapshotDiff(base, loading)).toMatchSnapshot();
  });

  it('should match snapshot diff', () => {
    const extend = render(
      <ButtonNative
        onPress={noop}
        type={type}
        sublabel={buttonSublabel}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        width={width}
        disabled={disabled}
        href={href}
        block={block}
        circled={circled}
        size={size}
        style={style}
      >
        {buttonText}
      </ButtonNative>,
    );
    const base = render(
      <ButtonNative onPress={noop}>{buttonText}</ButtonNative>,
    );
    expect(snapshotDiff(base, extend)).toMatchSnapshot();
  });
});

describe('ButtonInner', () => {
  it('should render children instead of label if passed', () => {
    const label = 'should not render';
    const wrapper = render(
      <ButtonInner label={label}>
        <View testID="child-view" />
      </ButtonInner>,
    );
    expect(wrapper.getByTestId('child-view')).toBeDefined();
    expect(() => {
      wrapper.getByText(label);
    }).toThrow();
  });

  it('should render label if no children are passed', () => {
    const wrapper = render(<ButtonInner label="test" />);
    expect(wrapper.getByText('test')).toBeDefined();
  });
});
