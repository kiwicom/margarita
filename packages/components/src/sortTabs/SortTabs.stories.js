// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SortTabs from './SortTabs';

const SortTabsData = [
  { label: 'Best', value: 'QUALITY' },
  { label: 'Cheapest', value: 'PRICE' },
  { label: 'Fastest', value: 'DURATION' },
];

const onValueChange = action('onValueChange');

storiesOf('SortTabs', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const selected = select(
      'selectedValue',
      SortTabsData.map(data => data.value),
      SortTabsData[0].value,
    );

    return <SortTabs selectedValue={selected} onValueChange={onValueChange} />;
  });
