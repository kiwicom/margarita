// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import OptionPicker from './OptionPicker';
import mockedPlaces from './mocks/places';

storiesOf('OptionPicker', module)
  .addDecorator(getStory => getStory())
  .addDecorator(withKnobs)
  .add('Playground', () => (
    <OptionPicker
      label={text('label', 'From:') || ''}
      placeholder={text('placeholder', 'Departure point')}
      onChangeText={action('onChangeText')}
      onPressAdd={action('onPressAdd')}
      onPressItem={action('onPressItem')}
      options={mockedPlaces}
      onSelectedChange={action('change')}
    />
  ));
