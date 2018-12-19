// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import RowOption from './RowOption';

const noop = () => {};

storiesOf('RowOption', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <RowOption
      type="destination"
      header="Prague"
      subheader="Czech Republic"
      onItemPress={noop}
      onAddPress={noop}
    />
  ));
