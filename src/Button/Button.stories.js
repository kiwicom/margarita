// @flow

import React from 'react';
import { View, Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  boolean,
  select,
  text,
  number,
  withKnobs,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Icon } from '../Icon';
import { Button } from '.';
import icons from '../Icon/icons.json';

const Separator = () => <View style={{ height: 10 }} />;
const noop = action('button-press');

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const type = select(
      'Type',
      [
        'primary',
        'secondary',
        'info',
        'success',
        'warning',
        'critical',
        'facebook',
        'google',
        'disabled',
      ],
      'primary'
    );
    const disabled = boolean('Disabled', false);
    let sublabel;
    if (Platform.OS !== 'web') {
      sublabel = text('Sublabel', 'Sublabel');
    }
    const leftIcon = select(
      'Left Icon',
      ['undefined', ...Object.keys(icons)],
      'calendar'
    );
    const rightIcon = select(
      'Right Icon',
      ['undefined', ...Object.keys(icons)],
      'calendar'
    );
    const width = number('Width', 300);
    let href;
    let block;
    if (Platform.OS === 'web') {
      href = text('href', '');
      block = boolean('block', false);
    }
    return (
      <Button
        type={type}
        width={width}
        onPress={noop}
        disabled={disabled}
        leftIcon={leftIcon !== 'undefined' ? <Icon name={leftIcon} /> : null}
        rightIcon={rightIcon !== 'undefined' ? <Icon name={rightIcon} /> : null}
        sublabel={sublabel}
        href={href}
        block={block}
      >
        Playground button
      </Button>
    );
  })
  .add('default', () => (
    <>
      <Button onPress={noop}>Default button</Button>
      <Separator />
      <Button
        onPress={noop}
        type="primary"
        leftIcon={<Icon name="attachment" />}
        rightIcon={<Icon name="attachment" />}
      >
        Primary button
      </Button>
      <Separator />
      <Button onPress={noop} type="secondary" sublabel="Sublabel">
        Secondary button
      </Button>
      <Separator />
      <Button
        onPress={noop}
        type="info"
        sublabel="Sublabel"
        rightIcon={<Icon name="chevron-right" />}
      >
        Info button
      </Button>
      <Separator />
      <Button onPress={noop} type="success">
        Success button
      </Button>
      <Separator />
      <Button onPress={noop} type="warning">
        Warning button
      </Button>
      <Separator />
      <Button onPress={noop} type="critical">
        Critical button
      </Button>
      <Separator />
      <Button onPress={noop} type="facebook">
        Facebook button
      </Button>
      <Separator />
      <Button onPress={noop} type="google">
        Google button
      </Button>
      <Separator />
      <Button onPress={noop} type="disabled">
        Disabled button
      </Button>
      <Button onPress={noop} type="primary" leftIcon={<Icon name="calendar" />}>
        Primary button with icon
      </Button>
    </>
  ))
  .add('primary', () => (
    <Button onPress={noop} type="primary">
      Some random text
    </Button>
  ))
  .add('secondary', () => (
    <Button onPress={noop} type="secondary">
      Some random text
    </Button>
  ))
  .add('info', () => (
    <Button onPress={noop} type="info">
      Some random text
    </Button>
  ))
  .add('success', () => (
    <Button onPress={noop} type="success">
      Some random text
    </Button>
  ))
  .add('warning', () => (
    <Button onPress={noop} type="warning">
      Some random text
    </Button>
  ))
  .add('critical', () => (
    <Button onPress={noop} type="critical">
      Some random text
    </Button>
  ))
  .add('facebook', () => (
    <Button onPress={noop} type="facebook">
      Some random text
    </Button>
  ))
  .add('google', () => (
    <Button onPress={noop} type="google">
      Some random text
    </Button>
  ))
  .add('disabled', () => (
    <Button onPress={noop} type="disabled">
      Some random text
    </Button>
  ));
