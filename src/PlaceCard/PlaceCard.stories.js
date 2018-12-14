// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';

import PlaceCard from './PlaceCard';

const noop = () => {};

storiesOf('PlaceCard', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <PlaceCard
      imageUrl="https://images.kiwi.com/photos/600x600/munich_de.jpg"
      price="$2444"
      onPress={noop}
      place="Munich"
      country="Germany"
    />
  ))
  .add('Playground', () => {
    const imageUrl = text('Image URL', null);
    const price = text('Price', '$1234');
    const place = text('Place', 'Place');
    const country = text('Country', 'Country');
    const disabled = boolean('Disabled', false);

    return (
      <PlaceCard
        imageUrl={imageUrl}
        price={price}
        onPress={noop}
        place={place}
        country={country}
        disabled={disabled}
      />
    );
  });
