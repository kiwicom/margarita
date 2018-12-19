// @flow

import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs, number, select } from '@storybook/addon-knobs';
import { Price } from './index';

storiesOf('Price', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const value = number('Value', 123455.3455);
    const currency = select('Currency', ['CZK', 'EUR', 'USD', 'GBP'], 'CZK');
    const locale = select(
      'Locale',
      ['cs-CZ', 'de-DE', 'fr-FR', 'en-GB', 'en-US'],
      'cs-CZ'
    );
    return <Price value={value} currency={currency} locale={locale} />;
  });
