// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import RowOption from './RowOption';

const noop = () => {};

storiesOf('RowOption', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <View>
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={noop}
        onAddPress={noop}
        border="shaped"
      />
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={noop}
        onAddPress={noop}
        border="short"
      />
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={noop}
        onAddPress={noop}
        border="long"
      />
      <RowOption
        type="destination"
        header="Prague"
        subheader="Czech Republic"
        onItemPress={noop}
        onAddPress={noop}
      />
      <RowOption
        type="localization"
        header="PRG Airport"
        subheader="10 km from Prague"
        onItemPress={noop}
        onAddPress={noop}
        info="Czech Republic"
        border="short"
      />
      <RowOption
        type="train"
        header="Very very long long long long long long long long"
        subheader="10 km from Prague"
        onItemPress={noop}
        onAddPress={noop}
        info="Czech Republic"
        border="short"
      />
    </View>
  ));
