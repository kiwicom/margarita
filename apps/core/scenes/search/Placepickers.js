// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  TripInput,
  TouchableWithoutFeedback,
} from '@kiwicom/margarita-components';
import { Icon, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import {
  withSearchContext,
  type SearchContextState,
  type ModalTypes,
} from './SearchContext';
import { MODAL_TYPE } from './SearchConstants';

type Props = {|
  +travelFrom: string,
  +travelTo: string,
  +handlePlaceSwitchPress: () => void,
  +setModalType: ModalTypes => void,
|};

class Placepickers extends React.Component<Props> {
  handleFromPress = () => {
    this.props.setModalType(MODAL_TYPE.ORIGIN);
  };

  handleToPress = () => {
    this.props.setModalType(MODAL_TYPE.DESTINATION);
  };

  render() {
    const { travelFrom, travelTo, handlePlaceSwitchPress } = this.props;
    return (
      <View>
        <TripInput
          onPress={this.handleFromPress}
          label="From"
          icon={<Icon name="airplane-takeoff" />}
          value={travelFrom}
        />
        <TouchableWithoutFeedback onPress={handlePlaceSwitchPress}>
          <View style={styles.placeSwitch}>
            <Icon name="replace" color="#7F91A8" />
          </View>
        </TouchableWithoutFeedback>
        <TripInput
          onPress={this.handleToPress}
          label="To"
          icon={<Icon name="airplane-landing" />}
          value={travelTo}
        />
      </View>
    );
  }
}

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
  actions: { switchFromTo, setModalType },
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  handlePlaceSwitchPress: switchFromTo,
  setModalType,
});

export default withSearchContext(select)(Placepickers);
