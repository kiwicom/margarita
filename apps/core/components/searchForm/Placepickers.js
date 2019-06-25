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
  type SearchContextState,
  withSearchContext,
  type Location,
} from '../../contexts/searchContext';
import PickersWrapper from './PickersWrapper';
import PlacePicker from './PlacePicker/PlacePickerRenderer';
import {
  PLACE_TYPE,
  type PlaceType,
} from '../../scenes/search/SearchConstants';

type Props = {|
  +travelFrom: ?Array<Location>,
  +travelTo: ?Array<Location>,
  +switchFromTo: () => void,
  +layout: number,
  +onPlaceSelect: () => void,
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

  onClose = () => {
    this.setState({ isModalOpen: false });
    this.props.onPlaceSelect();
  };

  handleFromPress = () =>
    this.setState({ placeType: PLACE_TYPE.ORIGIN, isModalOpen: true });

  handleToPress = () =>
    this.setState({ placeType: PLACE_TYPE.DESTINATION, isModalOpen: true });

  handlePlaceSwitchPress = async () => {
    await this.props.switchFromTo();
    this.props.onPlaceSelect();
  };

  render() {
    const { layout, travelFrom, travelTo, onPlaceSelect } = this.props;
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
        <TouchableWithoutFeedback onPress={this.handlePlaceSwitchPress}>
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
            onPlaceSelect={onPlaceSelect}
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
  switchFromTo,
});

export default withLayoutContext(layoutSelect)(
  withSearchContext(select)(Placepickers),
);
