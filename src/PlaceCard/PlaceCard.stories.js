// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';

import PlaceCard from './PlaceCard';

const noop = () => {};

storiesOf('PlaceCard', module)
  .addDecorator(getStory => getStory())
  .add('Default', () => (
    <PlaceCard
      imageUrl="https://images.kiwi.com/photos/600x600/munich_de.jpg"
      price="$2444"
      onPress={noop}
      place="Munich"
      country="Germany"
    />
  ));
