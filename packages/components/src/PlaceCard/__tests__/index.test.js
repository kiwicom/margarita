// @flow

import * as React from 'react';
import { render, fireEvent } from 'react-native-testing-library';

import { Touchable } from '../../Touchable';
import PlaceCard from '../PlaceCard';
import MissingImage from '../Image/MissingImage';

describe('PlaceCard', () => {
  const onPress = jest.fn();

  const { getByType } = render(
    <PlaceCard
      price="$2444"
      onPress={onPress}
      place="Munich"
      country="Germany"
    />,
  );

  it('should render MissingImage once imageUrl is not passed', () => {
    expect(getByType(MissingImage)).toBeDefined();
  });

  it('should execute onPress function', () => {
    const touchable = getByType(Touchable);
    fireEvent.press(touchable);
  });
});
