// @flow

import React from 'react';
import { View, Platform, Text } from 'react-native';
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
import icons from '../Icon/icons.json';

import { Button } from '.';

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
      ],
      'primary',
    );
    const size = select('Size', ['small', 'normal', 'large'], 'normal');
    const disabled = boolean('Disabled', false);
    let sublabel;
    if (Platform.OS !== 'web') {
      sublabel = text('Sublabel', 'Sublabel');
    }
    const leftIcon = select(
      'Left Icon',
      ['undefined', ...Object.keys(icons)],
      'camera',
    );
    const rightIcon = select(
      'Right Icon',
      ['undefined', ...Object.keys(icons)],
      'chevron-right',
    );
    const width = number('Width', 300);
    let href;
    let block;
    if (Platform.OS === 'web') {
      href = text('href', '');
      block = boolean('block', false);
    }
    const circled = boolean('circled', false);
    const label = text('label', 'Playground button');
    const isLoading = boolean('Is loading', false);
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
        circled={circled}
        label={label}
        size={size}
        isLoading={isLoading}
      />
    );
  })
  .add('default', () => {
    const defaultLabel = text('label', 'Default button');
    const primaryLabel = text('label', 'Primary button');
    const secondaryLabel = text('label', 'Secondary button');
    const infoLabel = text('label', 'Info button');
    const successLabel = text('label', 'Success button');
    const warningLabel = text('label', 'Warning button');
    const criticalLabel = text('label', 'Critical button');
    const facebookLabel = text('label', 'Facebook button');
    const googleLabel = text('label', 'Google Button');
    const disabledLabel = text('label', 'Disabled button');
    const primaryWithIconLabel = text('label', 'Primary button with icon');
    return (
      <>
        <Button onPress={noop} label={defaultLabel} />
        <Separator />
        <Button
          onPress={noop}
          type="primary"
          leftIcon={<Icon name="attachment" />}
          rightIcon={<Icon name="attachment" />}
          label={primaryLabel}
        />
        <Separator />
        <Button
          onPress={noop}
          type="secondary"
          sublabel="Sublabel"
          label={secondaryLabel}
        />
        <Separator />
        <Button
          onPress={noop}
          type="info"
          sublabel="Sublabel"
          rightIcon={<Icon name="chevron-right" />}
          label={infoLabel}
        />
        <Separator />
        <Button onPress={noop} type="success" label={successLabel} />
        <Separator />
        <Button onPress={noop} type="warning" label={warningLabel} />
        <Separator />
        <Button onPress={noop} type="critical" label={criticalLabel} />
        <Separator />
        <Button onPress={noop} type="facebook" label={facebookLabel} />
        <Separator />
        <Button onPress={noop} type="google" label={googleLabel} />
        <Separator />
        <Button
          onPress={noop}
          type="primary"
          label={disabledLabel}
          disabled={true}
        />
        <Separator />
        <Button
          onPress={noop}
          type="primary"
          leftIcon={<Icon name="calendar" />}
          label={primaryWithIconLabel}
        />
      </>
    );
  })
  .add('primary', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="primary" label={label} />;
  })
  .add('secondary', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="secondary" label={label} />;
  })
  .add('info', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="info" label={label} />;
  })
  .add('success', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="success" label={label} />;
  })
  .add('warning', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="warning" label={label} />;
  })
  .add('critical', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="critical" label={label} />;
  })
  .add('facebook', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="facebook" label={label} />;
  })
  .add('google', () => {
    const label = text('label', 'Some random text');
    return <Button onPress={noop} type="google" label={label} />;
  })
  .add('disabled', () => {
    const label = text('label', 'Some random text');
    return (
      <Button onPress={noop} type="primary" label={label} disabled={true} />
    );
  })
  .add('with children', () => (
    <Button onPress={noop} type="info">
      <Text style={{ color: 'salmon', padding: 20 }}>Custom child</Text>
    </Button>
  ));
