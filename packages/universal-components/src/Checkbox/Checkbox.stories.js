// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Text } from '../Text';

import { Checkbox } from '.';

const changeAction = action('checkbox-onChange');

storiesOf('Checkbox', module)
  .addDecorator(withKnobs)
  .add('Default', () => {
    const label = text('Label', 'Label');
    const checked = boolean('Checked', false);
    return <Checkbox label={label} checked={checked} onChange={changeAction} />;
  })
  .add('With help', () => {
    const label = text('Label', 'Label');
    const value = text('Value', 'value');
    const info = text('Info', 'Additional information to this choice');
    return (
      <Checkbox
        label={label}
        value={value}
        info={info}
        onChange={changeAction}
      />
    );
  })
  .add('With children', () => {
    const value = text('Value', 'value');
    const info = text('Info', 'Additional information to this choice');
    const label = text('label', 'This should not render');
    return (
      <Checkbox value={value} info={info} onChange={changeAction} label={label}>
        <View>
          <Text>Child instead of label</Text>
        </View>
      </Checkbox>
    );
  })
  .add('Playground', () => {
    const label = text('Label', 'Label');
    const value = text('Value', 'value');
    const hasError = boolean('hasError', false);
    const checked = boolean('Checked', true);
    const disabled = boolean('Disabled', true);
    const info = text('Info', 'Additional information for this choice');
    const name = text('name', 'name');
    return (
      <Checkbox
        label={label}
        value={value}
        hasError={hasError}
        checked={checked}
        disabled={disabled}
        name={name}
        info={info}
        onChange={changeAction}
      />
    );
  });
