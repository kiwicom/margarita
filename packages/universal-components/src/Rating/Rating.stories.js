// @flow

import * as React from 'react';
import { View } from 'react-native';
import { storiesOf } from '@storybook/react-native';
import { number, withKnobs } from '@storybook/addon-knobs';

import { StyleSheet } from '../PlatformStyleSheet';

import { Rating } from '.';

storiesOf('Rating', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Rating rating={3} />)
  .add('Styled', () => <Rating style={styles.rating} rating={5} />)
  .add('Combined', () => {
    const rating0 = number('rating0', 3);
    const rating1 = number('rating1', 2);
    return (
      <View style={styles.combinedWrap}>
        <Rating style={styles.rating} rating={rating0} />
        <Rating rating={rating1} />
      </View>
    );
  })
  .add('Playground', () => {
    const rating = number('rating', 3);
    return <Rating rating={rating} />;
  });

const styles = StyleSheet.create({
  rating: {
    color: '#ffb100',
  },
  combinedWrap: {
    flexDirection: 'row',
  },
});
