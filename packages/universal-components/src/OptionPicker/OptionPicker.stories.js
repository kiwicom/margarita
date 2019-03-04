// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import mockedPlaces, { Prague } from './mocks/places';

import { OptionPicker } from '.';

storiesOf('OptionPicker', module)
  .addDecorator(getStory => getStory())
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const onChangeText = action('onChangeText');
    const onClearPress = action('onClearPress');
    const onPressAdd = action('onPressAdd');
    const onPressItem = action('onPressItem');
    const selected = select(
      'selected',
      {
        None: null,
        Prague: [Prague],
      },
      null,
    );
    const options = object('Options', mockedPlaces);
    const label = text('label', 'From:');
    const placeholder = text('placeholder', 'Departure point');

    return (
      <OptionPicker
        selected={selected}
        onClearPress={onClearPress}
        label={label}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onPressAdd={onPressAdd}
        onPressItem={onPressItem}
        options={options}
      />
    );
  });
