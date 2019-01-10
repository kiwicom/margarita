// @flow

import React from 'react';
import { ScrollView } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { action } from '@storybook/addon-actions';
import {
  number,
  text,
  select,
  boolean,
  withKnobs,
} from '@storybook/addon-knobs';

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
        snapped
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
  ))
  .add('Playground', () => {
    const minValue = number('Min value', 0);
    const maxValue = number('Max value', 10000);
    const startValue = number('Start value', 2000);
    const endValue = number('End value', 8000);
    const label = text('Label', 'Price');
    const type = select('Type', ['multi', 'single'], 'single');
    const snapped = boolean('Snapped', false);
    const numOfParts = number('Number of parts', 5);
    const sliderLength = number('Slider length', 315);
    const step = number('Step', 1000);

    return (
      <Slider
        minValue={minValue}
        maxValue={maxValue}
        startValue={startValue}
        endValue={endValue}
        label={label}
        type={type}
        snapped={snapped}
        numOfParts={numOfParts}
        sliderLength={sliderLength}
        onValuesChange={action('change')}
        onValuesChangeFinish={action('finish')}
        onValuesChangeStart={action('start')}
        step={step}
      />
    );
  });
