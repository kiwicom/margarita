// @flow

import * as React from 'react';
import { View } from 'react-native';
import { OptionPicker, StyleSheet } from '@kiwicom/universal-components';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';
import { debounce } from '@kiwicom/margarita-utils';
import { DEBOUNCE_TIME } from '@kiwicom/margarita-config';

import { MODAL_TYPE } from '../../scenes/search/SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from '../../scenes/search/SearchContext';
import type { PlacePickerContent_locations as PlacePickerContentType } from './__generated__/PlacePickerContent_locations.graphql';
import {
  mapOptionToLocation,
  mapLocationTypeToOptionType,
  filterOptions,
} from './helpers';

type Props = {|
  +locations: ?PlacePickerContentType,
  +relay: RelayRefetchProp,
  +onChangeText: string => void,
  +travelFrom: ?Location,
  +travelTo: ?Location,
  +modalType: 'DESTINATION' | 'ORIGIN' | 'HIDDEN',
  +setTravelFrom: (?Location) => void,
  +setTravelTo: (?Location) => void,
  +setModalType: ('HIDDEN') => void,
|};

export function mapLocationToOption(location: Location) {
  return {
    id: location.id ?? '',
    label: location.name ?? '',
    locationId: location.locationId ?? '',

    type: mapLocationTypeToOptionType(location.type),
  };
}

class PlacePickerContent extends React.Component<Props> {
  getSelectedOptions = () => {
    const { modalType, travelFrom, travelTo } = this.props;
    const selected = [];

    if (travelFrom && modalType === MODAL_TYPE.ORIGIN) {
      const option = mapLocationToOption(travelFrom);
      selected.push(option);
    }
    if (travelTo && modalType === MODAL_TYPE.DESTINATION) {
      const option = mapLocationToOption(travelTo);
      selected.push(option);
    }
    return selected;
  };

  getLabel = () => {
    const { modalType } = this.props;
    if (modalType === MODAL_TYPE.DESTINATION) {
      return 'To:';
    } else if (modalType === MODAL_TYPE.ORIGIN) {
      return 'From:';
    }
    return '';
  };

  getOptions = () => {
    const locations = this.props.locations?.locationsByTerm?.edges || [];
    return locations.reduce((acc, location) => {
      if (location && location.node) {
        return [...acc, mapLocationToOption(location.node)];
      }
      return acc;
    }, []);
  };

  setChosenLocation = (location: ?Location) => {
    const { setTravelTo, setTravelFrom, modalType } = this.props;
    if (modalType === MODAL_TYPE.DESTINATION) {
      setTravelTo(location);
    }
    if (modalType === MODAL_TYPE.ORIGIN) {
      setTravelFrom(location);
    }
  };

  handleChangeText = debounce((text: string) => {
    this.props.relay.refetch({ input: { term: text } });
  }, DEBOUNCE_TIME);

  handlePressOption = option => {
    const { setModalType } = this.props;
    const location = mapOptionToLocation(option);

    this.setChosenLocation(location);
    setModalType(MODAL_TYPE.HIDDEN);
  };

  handleClear = () => {
    this.setChosenLocation(null);
  };

  render() {
    const options = this.getOptions();
    const selectedOptions = this.getSelectedOptions();

    return (
      <View style={styles.wrapper}>
        <OptionPicker
          onClearPress={this.handleClear}
          label={this.getLabel()}
          onPressItem={this.handlePressOption}
          onPressAdd={this.handlePressOption}
          onChangeText={this.handleChangeText}
          options={filterOptions(options, selectedOptions)}
          selected={selectedOptions}
        />
      </View>
    );
  }
}

const select = ({
  travelFrom,
  travelTo,
  modalType,
  actions: { setTravelTo, setTravelFrom, setModalType },
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  modalType,
  setTravelTo,
  setTravelFrom,
  setModalType,
});

const styles = StyleSheet.create({
  wrapper: {
    height: '65%',
    margin: 15,
  },
});

export default createRefetchContainer(
  withSearchContext(select)(PlacePickerContent),
  {
    locations: graphql`
      fragment PlacePickerContent_locations on RootQuery
        @argumentDefinitions(
          input: { type: "LocationsByTermInput!", defaultValue: { term: "" } }
        ) {
        locationsByTerm(input: $input) {
          edges {
            node {
              id
              name
              locationId
              type
            }
          }
        }
      }
    `,
  },
  graphql`
    query PlacePickerContentRefetchQuery($input: LocationsByTermInput!) {
      ...PlacePickerContent_locations @arguments(input: $input)
    }
  `,
);
