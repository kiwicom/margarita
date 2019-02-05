// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { select, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import { SegmentedButton } from '.';

const segmentsData = [
  { label: 'Left', value: 'L' },
  { label: 'Center', value: 'C' },
  { label: 'Right', value: 'R' },
];
const onValueChange = action('onValueChange');

storiesOf('SegmentedButton', module)
  .addDecorator(withKnobs)
  .add('Playground', () => {
    const selected = select(
      'selectedValue',
      segmentsData.map(data => data.value),
      segmentsData[0].value,
    );

    return (
      <SegmentedButton
        segmentsData={segmentsData}
        selectedValue={selected}
        onValueChange={onValueChange}
      />
    );
  });
