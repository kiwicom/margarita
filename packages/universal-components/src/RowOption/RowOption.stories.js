// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { RowOption } from '.';

const onItemPress = action('item-press');
const onAddPress = action('add-press');

storiesOf('RowOption', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const border = select('Border', ['long', 'short', 'shaped'], 'shaped');
    const type = select(
      'Type',
      ['localization', 'destination', 'airplane', 'bus', 'train'],
      'airplane',
    );

    const header = text('Header', 'Prague');
    const subheader = text('Subheader', '10 km from the Airport');
    const info = text('Info', 'Czech Republic');

    return (
      <RowOption
        onItemPress={onItemPress}
        onAddPress={onAddPress}
        type={type}
        header={header}
        border={border}
        subheader={subheader}
        info={info}
      />
    );
  })
  .add('Default', () => (
    <View>
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={onItemPress}
        onAddPress={onAddPress}
        border="shaped"
      />
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={onItemPress}
        onAddPress={onAddPress}
        border="short"
      />
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={onItemPress}
        onAddPress={onAddPress}
        border="long"
      />
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={onItemPress}
        onAddPress={onAddPress}
      />
      <RowOption
        type="localization"
        header="PRG Airport"
        subheader="10 km from Prague"
        onItemPress={onItemPress}
        onAddPress={onAddPress}
        info="Czech Republic"
        border="short"
      />
      <RowOption
        type="train"
        header="Very very long long long long long long long long"
        subheader="10 km from Prague"
        onItemPress={onItemPress}
        onAddPress={onAddPress}
        info="Czech Republic"
        border="short"
      />
    </View>
  ));
