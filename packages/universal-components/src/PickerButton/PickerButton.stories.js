// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import iconsMap from '../Icon/icons.json';

import { PickerButton } from '.';

const noop = action('button-press');

storiesOf('PickerButton', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const value = text('Value', null);
    const placeholder = text('Placeholder', 'Select');
    const iconName = select('Icon', Object.keys(iconsMap), 'chevron-down');

    return (
      <PickerButton
        value={value}
        onPress={noop}
        placeholder={placeholder}
        iconName={iconName}
      />
    );
  });
