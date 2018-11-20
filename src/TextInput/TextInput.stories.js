// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import TextInput from './index';
import Icon from '../native/Icon';

storiesOf('TextInput', module)
  .add('Default input', () => (
    <TextInput label="Label" placeholder="Type something" />
  ))
  .add('Disabled input', () => (
    <TextInput label="Label" placeholder="Type something" disabled />
  ))
  .add('Small input', () => (
    <TextInput size="small" label="Label" placeholder="Type something" />
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
  ));
