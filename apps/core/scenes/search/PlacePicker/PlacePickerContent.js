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
  convertLocationTypeToOptionType,
  filterOptions,
  type OptionType,
} from './helpers';

type Props = {|
  +pickerType: 'travelFrom' | 'travelTo',
  +locations: ?PlacePickerContentType,
  +relay: RelayRefetchProp,
  +onChangeText: string => void,
  +travelFrom: ?Array<Location>,
  +travelTo: ?Array<Location>,
  +clearLocation: (type: 'travelTo' | 'travelFrom') => void,
  +setLocation: (
    type: LocationSearchType,
    location: Location | Location[],
  ) => void,
  +addLocation: (
    type: LocationSearchType,
    location: Location | Location[],
  ) => void,
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
    type: convertLocationTypeToOptionType(location.type),
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
    const { pickerType } = this.props;
    const selectedLocations = this.props[pickerType];

    if (selectedLocations) {
      return mapLocationsToOption(selectedLocations);
    }
    return [];
  };

  getLabel = () => {
    const { pickerType } = this.props;
    if (pickerType === 'travelTo') {
      return 'To:';
    } else if (pickerType === 'travelFrom') {
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
    const { addLocation, pickerType } = this.props;
    const location = mapOptionToLocation(option);

    addLocation(pickerType, location);

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
    const { setModalType, setLocation, pickerType } = this.props;
    const location = mapOptionToLocation(option);

    setLocation(pickerType, location);

    setModalType(MODAL_TYPE.HIDDEN);
  };

  handleClearSearch = () => {
    const { clearLocation, pickerType } = this.props;
    clearLocation(pickerType);
  };

  handlePressKey = event => {
    const key = event.nativeEvent.key;

    // handle Backspace press
    if (key === 'Backspace') {
      this.handleBackspacePress();
    }
  };

  handleBackspacePress = () => {
    const { setLocation, pickerType } = this.props;

    // check if searchText exist
    const searchTextExist = this.state.searchText.length > 0;

    // if the searchText doesn't exist removed last selected location
    if (!searchTextExist) {
      const locations = this.props[pickerType];

      if (locations && locations.length !== 0) {
        setLocation(pickerType, [...locations.slice(0, locations.length - 1)]);
      }
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
          onKeyPress={this.handlePressKey}
        />
      </View>
    );
  }
}

const getPickerType = modalType => {
  switch (modalType) {
    case MODAL_TYPE.DESTINATION:
      return 'travelTo';
    case MODAL_TYPE.ORIGIN:
      return 'travelFrom';
    default:
      return null;
  }
};

const select = ({
  travelFrom,
  travelTo,
  modalType,
  actions: { setModalType, clearLocation, addLocation, setLocation },
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  setModalType,
  clearLocation,
  addLocation,
  setLocation,
  pickerType: getPickerType(modalType),
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
          ... on LocationConnection {
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
      }
    `,
  },
  graphql`
    query PlacePickerContentRefetchQuery($input: LocationsByTermInput!) {
      ...PlacePickerContent_locations @arguments(input: $input)
    }
  `,
);
