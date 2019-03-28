// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SortTabs, { SortTabsData } from './SortTabs';

const onValueChange = action('onValueChange');

export const priceDurationParams = {
  QUALITY: {
    price: '290',
    currency: 'EUR',
    duration: '3h 40m',
  },
  PRICE: {
    price: '130',
    currency: 'EUR',
    duration: '9h 25m',
  },
  DURATION: {
    price: '386',
    currency: 'EUR',
    duration: '1h 20min',
  },
};

storiesOf('SortTabs', module)
  .addDecorator(withKnobs)
  .add('With all price duration parameters', () => {
    const selected = select(
      'selectedValue',
      SortTabsData.map(data => data.value),
      SortTabsData[0].value,
    );

    return (
      <SortTabs
        priceDurationParams={priceDurationParams}
        selectedValue={selected}
        onValueChange={onValueChange}
      />
    );
  })
  .add('With some parameters', () => {
    const selected = select(
      'selectedValue',
      SortTabsData.map(data => data.value),
      SortTabsData[0].value,
    );

    return (
      <SortTabs
        priceDurationParams={{
          ...priceDurationParams,
          QUALITY: { price: null, currency: null, duration: '3h 4m' },
          PRICE: { price: '240', currency: 'EUR', duration: null },
        }}
        selectedValue={selected}
        onValueChange={onValueChange}
      />
    );
  })
  .add('With no price duration parameters', () => {
    const selected = select(
      'selectedValue',
      SortTabsData.map(data => data.value),
      SortTabsData[0].value,
    );

    return <SortTabs selectedValue={selected} onValueChange={onValueChange} />;
  });
