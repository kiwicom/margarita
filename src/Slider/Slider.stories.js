// @flow

import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';

import { Slider } from '.';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <ScrollView style={{ flex: 1 }}>
      <Slider
        minValue={0}
        maxValue={5}
        startValue={0}
        endValue={1}
        label="Max stops"
        type="multi"
        snapped={false}
        numOfParts={5}
      />
      <Slider
        minValue={0}
        maxValue={10}
        startValue={0}
        endValue={10}
        label="Max stops"
        type="multi"
        snapped={false}
        numOfParts={10}
      />
      <Slider
        minValue={0}
        maxValue={100}
        startValue={0}
        endValue={10}
        label="Max stops"
        type="multi"
        snapped
        step={10}
        numOfParts={4}
      />
      <Slider
        minValue={10000}
        maxValue={30000}
        startValue={15000}
        endValue={25000}
        label="Price"
        type="multi"
        snapped={false}
        numOfParts={4}
      />
      <Slider
        minValue={10000}
        maxValue={30000}
        startValue={15000}
        endValue={25000}
        label="Price"
        type="multi"
        snapped
        numOfParts={4}
      />
      <Slider
        minValue={0}
        maxValue={10}
        startValue={5}
        label="Nights of stay"
        type="single"
        snapped={false}
        numOfParts={5}
      />
      <Slider
        minValue={0}
        maxValue={10}
        startValue={5}
        label="Nights of stay"
        type="single"
        snapped
        numOfParts={5}
      />
    </ScrollView>
  ));
