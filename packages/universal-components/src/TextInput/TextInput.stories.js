// @flow

import React from 'react';
import { Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
  number,
} from '@storybook/addon-knobs';

import { Icon } from '../Icon';
import { ServiceLogo } from '../ServiceLogo';
import iconsMap from '../Icon/icons.json';

import { TextInput } from '.';

const stories = storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const size = select('Size', ['small', 'normal'], 'normal');
    const label = text('Label', 'Label');
    let inlineLabel;
    let serviceLogoName = 'Visa';
    let minLength = 0;
    if (Platform.OS === 'web') {
      inlineLabel = boolean('Inline label', false);
      minLength = number('Min length', 0);
      serviceLogoName = select(
        'Suffix service logo',
        [
          'AirHelp',
          'Amex',
          'AxaAssistance',
          'DinersClub',
          'JCB',
          'Maestro',
          'MasterCard',
          'MIR',
          'NewYorkTimes',
          'NortonSecured',
          'TravelPulse',
          'Visa',
          'VisaHQ',
          'Zooz',
        ],
        'Visa',
      );
    }
    const value = text('Value', '');
    const placeholder = text('Placeholder', 'Placeholder');
    const disabled = boolean('Disabled', false);
    const required = boolean('Required', false);
    const maxLength = number('Max length', 100);
    const type = select(
      'Type',
      ['text', 'password', 'email', 'number'],
      'text',
    );
    const iconName = select(
      'Prefix icon name',
      Object.keys(iconsMap),
      'search',
    );
    const error = text('Error', '');
    const help = text('Help', '');
    const status = select(
      'Status',
      ['default', 'success', 'warning'],
      'default',
    );
    const autoCorrect = boolean('autoCorrect', true);
    return (
      <TextInput
        autoCorrect={autoCorrect}
        autoFocus
        size={size}
        label={label}
        inlineLabel={inlineLabel}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        type={type}
        suffix={<ServiceLogo name={serviceLogoName} />}
        prefix={<Icon name={iconName} />}
        onChangeText={action('change')}
        onFocus={action('focus')}
        onBlur={action('blur')}
        error={error}
        help={help}
        maxLength={maxLength}
        minLength={minLength}
        status={status}
      />
    );
  })
  .add('Default input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
    />
  ))
  .add('Disabled input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      disabled
      onChangeText={action('change')}
    />
  ))
  .add('Small input', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
    />
  ))
  .add('Number input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      type="number"
      onChangeText={action('change')}
    />
  ))
  .add('Password input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      type="password"
      onChangeText={action('change')}
    />
  ))
  .add('Error input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
      error="I'm Error"
    />
  ))
  .add('Help input', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
      help="I'm Helper"
    />
  ))
  .add('Input with max length', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      onChangeText={action('change')}
      maxLength={5}
    />
  ))
  .add('Required field', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      required
      onChangeText={action('change')}
    />
  ))
  .add('With text prefix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      prefix="$"
      onChangeText={action('change')}
    />
  ))
  .add('With icon prefix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      prefix={<Icon name="search" />}
      onChangeText={action('change')}
    />
  ));

if (Platform.OS === 'web') {
  stories
    .add('Input with min length', () => (
      <TextInput
        size="small"
        label="Label"
        placeholder="Type something"
        onChangeText={action('change')}
        minLength={3}
      />
    ))
    .add('Compact input', () => (
      <TextInput
        label="Label"
        inlineLabel
        placeholder="Type something"
        onChangeText={action('change')}
      />
    ))
    .add('With service logo suffix', () => (
      <TextInput
        label="Label"
        placeholder="Type something"
        suffix={<ServiceLogo name="VisaHQ" />}
        onChangeText={action('change')}
      />
    ))
    .add('With custom label and custom input background', () => (
      <TextInput
        label="Label"
        placeholder="Type something"
        onChangeText={action('change')}
        style={{ backgroundColor: '#DCDCDC' }}
        formLabelContainerStyle={{ backgroundColor: '#DCDCDC' }}
        formLabelTextStyle={{ color: '#383838', fontWeight: 'bold' }}
      />
    ));
}
