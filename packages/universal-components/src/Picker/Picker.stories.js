// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import icons from '../Icon/icons.json';

import { Picker } from '.';

const optionsData = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
  { label: 'Option C', value: 'c' },
  { label: 'Option D', value: 'd' },
  { label: 'Option E', value: 'e' },
  { label: 'Option F', value: 'f' },
];
const onValueChange = action('onValueChange');

storiesOf('Picker', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const label = text('Label', 'Label');
    const selected = select(
      'selectedValue',
      optionsData.map(data => data.value),
      optionsData[3].value,
    );
    const iconName = select(
      'Icon name',
      [...Object.keys(icons)],
      Platform.OS === 'web' ? 'chevron-down' : 'chevron-right',
    );

    return (
      <Picker
        optionsData={optionsData}
        selectedValue={selected}
        onValueChange={onValueChange}
        placeholder="Select option"
        confirmLabel="OK"
        iconName={iconName}
        label={label}
      />
    );
  });
