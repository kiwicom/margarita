// @flow

import React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import {
  text,
  withKnobs,
  object,
  number,
  boolean,
} from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { TagsInput } from '.';

const selectedMock = ['Prague', 'Bratislava', 'London'];

storiesOf('TagsInput', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View style={{ margin: 20 }}>
      <TagsInput
        onChangeText={action('onChangeText')}
        label="From:"
        placeholder="Departure point"
        autoFocus
      />
    </View>
  ))
  .add('with Tags', () => (
    <View style={{ margin: 20 }}>
      <TagsInput
        tags={selectedMock}
        onChangeText={action('onChangeText')}
        label="From:"
        placeholder="Departure point"
        autoFocus
      />
    </View>
  ))
  .add('Playground', () => {
    const tags = object('Tags', ['Prague']);
    const fontSize = number('fontSize', 16, {
      range: true,
      min: 14,
      max: 25,
      step: 1,
    });
    const label = text('Label', 'From:');
    const autoCorrect = boolean('Auto correct', false);

    const placeholder = text('Placeholder', 'Departure point');
    return (
      <View style={{ margin: 20 }}>
        <TagsInput
          autoCorrect={autoCorrect}
          autoFocus
          fontSize={fontSize}
          tags={tags}
          onChangeText={action('onChangeText')}
          onClearPress={action('onClearPress')}
          label={label}
          placeholder={placeholder}
        />
      </View>
    );
  });
