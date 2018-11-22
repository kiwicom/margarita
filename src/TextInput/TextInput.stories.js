// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs';

import TextInput from './index';
import Icon from '../native/Icon';
import ServiceLogo from '../ServiceLogo/component';

import iconsMap from '../native/Icon/icons.json';

storiesOf('TextInput', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const size = select('Size', ['small', 'normal'], 'normal');
    const label = text('Label', 'Label');
    const inlineLabel = boolean('Inline label', false);
    const value = text('Value', '');
    const placeholder = text('Placeholder', 'Placeholder');
    const disabled = boolean('Disabled', false);
    const required = boolean('Required', false);
    const serviceLogoName = select(
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
      'Visa'
    );
    const iconName = select(
      'Prefix icon name',
      Object.keys(iconsMap),
      'search'
    );

    return (
      <TextInput
        size={size}
        label={label}
        inlineLabel={inlineLabel}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        suffix={<ServiceLogo name={serviceLogoName} />}
        prefix={<Icon name={iconName} />}
      />
    );
  })
  .add('Default input', () => (
    <TextInput label="Label" placeholder="Type something" />
  ))
  .add('Disabled input', () => (
    <TextInput label="Label" placeholder="Type something" disabled />
  ))
  .add('Small input', () => (
    <TextInput size="small" label="Label" placeholder="Type something" />
  ))
  .add('Number input', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      type="number"
    />
  ))
  .add('Password input', () => (
    <TextInput
      size="small"
      label="Label"
      placeholder="Type something"
      type="password"
    />
  ))
  .add('Required field', () => (
    <TextInput label="Label" placeholder="Type something" required />
  ))
  .add('With text prefix', () => (
    <TextInput label="Label" placeholder="Type something" prefix="$" />
  ))
  .add('With icon prefix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      prefix={<Icon name="search" />}
    />
  ))
  .add('Compact input', () => (
    <TextInput label="Label" inlineLabel placeholder="Type something" />
  ))
  .add('With service logo suffix', () => (
    <TextInput
      label="Label"
      placeholder="Type something"
      suffix={<ServiceLogo name="VisaHQ" />}
    />
  ));
