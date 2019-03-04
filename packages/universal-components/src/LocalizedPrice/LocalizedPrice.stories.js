// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, text } from '@storybook/addon-knobs';

import { LocalizedPrice } from '.';

storiesOf('LocalizedPrice', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const localizedPrice = text('Localized Price', '$34.45');
    return <LocalizedPrice localizedPrice={localizedPrice} />;
  });
