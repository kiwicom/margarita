// @flow

import * as React from 'react';
import { storiesOf } from '@storybook/react-native';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import PlaceCard from './PlaceCard';
import Placeholder from './Placeholder';

const noop = action('placeCard-press');

type State = {
  isReady: boolean,
};

class CardWithPlaceholder extends React.Component<{}, State> {
  state = {
    isReady: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isReady: true,
      });
    }, 3000);
  }

  render() {
    const { isReady } = this.state;

    return (
      <Placeholder onReady={isReady}>
        <PlaceCard
          imageUrl="https://images.kiwi.com/photos/600x600/munich_de.jpg"
          price="$2444"
          onPress={noop}
          place="Munich"
          country="Germany"
        />
      </Placeholder>
    );
  }
}

storiesOf('PlaceCard', module)
  .addDecorator(withKnobs)
  .add('With loader placeholder', () => <CardWithPlaceholder />)
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
