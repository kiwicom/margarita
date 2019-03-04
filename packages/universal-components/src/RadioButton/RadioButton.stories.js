// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { Text } from '../Text';
import { StyleSheet } from '../PlatformStyleSheet';

import { RadioButton } from '.';

const pressAction = action('radio-button-press');
const bulletTypes = ['bullet', 'check'];
const bulletPositionTypes = ['left', 'right'];

const getSampleLabel = labelText => (
  <Text style={styles.sampleLabel}>{labelText}</Text>
);

storiesOf('RadioButton', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Label');
    return (
      <RadioButton checked={checked} disabled={disabled} onPress={pressAction}>
        {getSampleLabel(label)}
      </RadioButton>
    );
  })
  .add('Styled', () => {
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Label');
    return (
      <RadioButton
        checked={checked}
        disabled={disabled}
        onPress={pressAction}
        style={styles.borderedButton}
      >
        {getSampleLabel(label)}
      </RadioButton>
    );
  })
  .add('Bullet on right', () => {
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Label');
    return (
      <RadioButton
        bulletPosition={bulletPositionTypes[1]}
        checked={checked}
        disabled={disabled}
        onPress={pressAction}
      >
        {getSampleLabel(label)}
      </RadioButton>
    );
  })
  .add('With label', () => {
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Label');
    return (
      <RadioButton
        checked={checked}
        disabled={disabled}
        onPress={pressAction}
        label={label}
      />
    );
  })
  .add('With label and children', () => {
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Label');
    const children = text('children', 'Children take presedence over label');
    return (
      <RadioButton
        checked={checked}
        disabled={disabled}
        onPress={pressAction}
        label={label}
      >
        {getSampleLabel(children)}
      </RadioButton>
    );
  })
  .add('Playground', () => {
    const type = select('Type', bulletTypes, bulletTypes[0]);
    const bulletPosition = select(
      'bulletPosition',
      bulletPositionTypes,
      bulletPositionTypes[0],
    );
    const checked = boolean('Checked', false);
    const disabled = boolean('Disabled', false);
    const label = text('Label', 'Label');
    return (
      <RadioButton
        type={type}
        bulletPosition={bulletPosition}
        checked={checked}
        disabled={disabled}
        onPress={pressAction}
      >
        {getSampleLabel(label)}
      </RadioButton>
    );
  });

const styles = StyleSheet.create({
  sampleLabel: {
    marginHorizontal: 5,
    lineHeight: 24,
  },
  borderedButton: {
    padding: 10,
    backgroundColor: '#ccf1e5',
    borderRadius: 4,
    borderWidth: 3,
    borderColor: '#76ecc6',
  },
});
