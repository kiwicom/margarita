// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  TripInput,
  TouchableWithoutFeedback,
} from '@kiwicom/margarita-components';
import { Icon, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { withSearchContext, type SearchContextState } from './SearchContext';

type Props = {|
  +travelFrom: string,
  +travelTo: string,
  +handlePlaceSwitchPress: () => void,
|};

const handlePlacePress = () => {
  console.log('TODO'); // eslint-disable-line no-console
};

const Placepickers = (props: Props) => (
  <View>
    <TripInput
      onPress={handlePlacePress}
      label="From"
      icon={<Icon name="airplane-takeoff" />}
      value={props.travelFrom}
    />
    <TouchableWithoutFeedback onPress={props.handlePlaceSwitchPress}>
      <View style={styles.placeSwitch}>
        <Icon name="replace" color="#7F91A8" />
      </View>
    </TouchableWithoutFeedback>
    <TripInput
      onPress={handlePlacePress}
      label="To"
      icon={<Icon name="airplane-landing" />}
      value={props.travelTo}
    />
  </View>
);

const styles = StyleSheet.create({
  placeSwitch: {
    position: 'absolute',
    zIndex: 1,
    right: 18,
    top: '50%',
    marginTop: -20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: defaultTokens.paletteWhite,
    width: parseInt(defaultTokens.widthIconLarge, 10),
    height: parseInt(defaultTokens.heightIconLarge, 10),
    borderRadius: parseInt(defaultTokens.widthIconLarge, 10) * 0.5,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: 3,
    android: {
      elevation: 3,
    },
  },
});

const select = ({
  travelFrom,
  travelTo,
  actions: { switchFromTo },
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  handlePlaceSwitchPress: switchFromTo,
});

export default withSearchContext(select)(Placepickers);
