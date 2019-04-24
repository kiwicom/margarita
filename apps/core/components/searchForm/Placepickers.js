// @flow

import * as React from 'react';
import { View } from 'react-native';
import { TripInput, Modal } from '@kiwicom/margarita-components';
import {
  Icon,
  StyleSheet,
  TouchableWithoutFeedback,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';

import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from '../../scenes/search/SearchContext';
import PickersWrapper from './PickersWrapper';
import PlacePicker from './PlacePicker/PlacePickerRenderer';
import {
  PLACE_TYPE,
  type PlaceType,
} from '../../scenes/search/SearchConstants';

type Props = {|
  +travelFrom: ?Array<Location>,
  +travelTo: ?Array<Location>,
  +handlePlaceSwitchPress: () => void,
  +layout: number,
|};

type State = {|
  +isModalOpen: boolean,
  +placeType: PlaceType,
|};

class Placepickers extends React.Component<Props, State> {
  state = {
    isModalOpen: false,
    placeType: PLACE_TYPE.ORIGIN,
  };

  getLocationsNames = (locations: ?Array<Location>) => {
    if (Array.isArray(locations)) {
      return locations.reduce((acc, location, index) => {
        if (location.name) {
          const prefix = index > 0 ? ',' : '';
          return `${acc}${prefix} ${location.name}`;
        }
        return acc;
      }, '');
    }
    return '';
  };

  onClose = () => this.setState({ isModalOpen: false });

  handleFromPress = () =>
    this.setState({ placeType: PLACE_TYPE.ORIGIN, isModalOpen: true });

  handleToPress = () =>
    this.setState({ placeType: PLACE_TYPE.DESTINATION, isModalOpen: true });

  render() {
    const { layout, travelFrom, travelTo, handlePlaceSwitchPress } = this.props;
    const rowLayout = layout >= LAYOUT.largeMobile;
    return (
      <PickersWrapper layout={layout}>
        <TripInput
          style={rowLayout && styles.rowInput}
          onPress={this.handleFromPress}
          label="From"
          icon={<Icon name="airplane-takeoff" />}
          value={this.getLocationsNames(travelFrom)}
        />
        <TouchableWithoutFeedback onPress={handlePlaceSwitchPress}>
          <View
            style={[styles.placeSwitch, rowLayout && styles.rowPlaceSwitch]}
          >
            <Icon name="replace" color="#7F91A8" />
          </View>
        </TouchableWithoutFeedback>
        <TripInput
          onPress={this.handleToPress}
          label="To"
          icon={<Icon name="airplane-landing" />}
          value={this.getLocationsNames(travelTo)}
        />
        <Modal isVisible={this.state.isModalOpen} onClose={this.onClose}>
          <PlacePicker
            onClose={this.onClose}
            placeType={this.state.placeType}
          />
        </Modal>
      </PickersWrapper>
    );
  }
}

const styles = StyleSheet.create({
  placeSwitch: {
    position: 'absolute',
    zIndex: 1,
    end: 18,
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
  rowInput: {
    web: {
      marginEnd: parseInt(defaultTokens.spaceXSmall, 10),
    },
  },
  rowPlaceSwitch: {
    web: {
      alignSelf: 'center',
      end: '50%',
      marginEnd: -parseInt(defaultTokens.widthIconLarge, 10) * 0.5,
    },
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
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

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(Placepickers),
);
