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

import { MODAL_TYPE } from '../SearchConstants';
import {
  withSearchContext,
  type SearchContextState,
  type Location,
  type LocationSearchType,
} from '../SearchContext';
import type { PlacePickerContent_locations as PlacePickerContentType } from './__generated__/PlacePickerContent_locations.graphql';
import {
  mapOptionToLocation,
  mapLocationTypeToOptionType,
  filterOptions,
  type OptionType,
} from './helpers';

type Props = {|
  +locations: ?PlacePickerContentType,
  +relay: RelayRefetchProp,
  +onChangeText: string => void,
  +travelFrom: ?Array<Location>,
  +travelTo: ?Array<Location>,
  +modalType: 'DESTINATION' | 'ORIGIN' | 'HIDDEN',
  +clearLocation: (type: 'travelTo' | 'travelFrom') => void,
  +setLocation: (type: LocationSearchType, location: Location) => void,
  +addLocation: (type: LocationSearchType, location: Location) => void,
  +setModalType: ('HIDDEN') => void,
|};

type State = {|
  searchText: string,
|};

export function mapLocationToOption(location: Location) {
  return {
    id: location.id ?? '',
    label: location.name ?? '',
    locationId: location.locationId ?? '',

    type: mapLocationTypeToOptionType(location.type),
  };
}

function mapLocationsToOption(locations: ?Array<Location>) {
  if (Array.isArray(locations)) {
    return locations.map(location => mapLocationToOption(location));
  }
  return [];
}

class PlacePickerContent extends React.Component<Props, State> {
  state = {
    searchText: '',
  };

  getSelectedOptions = () => {
    const { modalType, travelFrom, travelTo } = this.props;

    if (travelFrom && modalType === MODAL_TYPE.ORIGIN) {
      return mapLocationsToOption(travelFrom);
    }
    if (travelTo && modalType === MODAL_TYPE.DESTINATION) {
      return mapLocationsToOption(travelTo);
    }
    return [];
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

  addLocationToSearch = (option: OptionType) => {
    const { addLocation, modalType } = this.props;
    const location = mapOptionToLocation(option);
    if (modalType === MODAL_TYPE.DESTINATION) {
      addLocation('travelTo', location);
    }
    if (modalType === MODAL_TYPE.ORIGIN) {
      addLocation('travelFrom', location);
    }
    this.setState({ searchText: '' });
  };

  refetchSuggestions = debounce((text: string) => {
    this.props.relay.refetch({ input: { term: text } });
  }, DEBOUNCE_TIME);

  handleChangeText = (text: string) => {
    this.setState({ searchText: text });
    this.refetchSuggestions(text);
  };

  handlePressOption = (option: OptionType) => {
    const { setModalType, modalType, setLocation } = this.props;
    const location = mapOptionToLocation(option);

    if (modalType === MODAL_TYPE.DESTINATION) {
      setLocation('travelTo', location);
    }
    if (modalType === MODAL_TYPE.ORIGIN) {
      setLocation('travelFrom', location);
    }
    setModalType(MODAL_TYPE.HIDDEN);
  };

  handleClearSearch = () => {
    const { modalType, clearLocation } = this.props;

    if (modalType === MODAL_TYPE.DESTINATION) {
      clearLocation('travelTo');
    }
    if (modalType === MODAL_TYPE.ORIGIN) {
      clearLocation('travelFrom');
    }
  };

  render() {
    const options = this.getOptions();
    const selectedOptions = this.getSelectedOptions();
    const { searchText } = this.state;

    return (
      <View style={styles.wrapper}>
        <OptionPicker
          text={searchText}
          onClearPress={this.handleClearSearch}
          label={this.getLabel()}
          onPressItem={this.handlePressOption}
          onPressAdd={this.addLocationToSearch}
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
  actions: { setModalType, clearLocation, addLocation, setLocation },
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  modalType,
  setModalType,
  clearLocation,
  addLocation,
  setLocation,
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
