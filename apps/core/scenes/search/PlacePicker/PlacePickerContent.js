// @flow

// TODO this is just the temporary Picker will be replaced by the OptionPicker form the 'universal-components'

import * as React from 'react';
import { View } from 'react-native';
import {
  Text,
  TextInput,
  Icon,
  StyleSheet,
} from '@kiwicom/universal-components';
import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';
import { debounce } from '@kiwicom/margarita-utils';

import { MODAL_TYPE } from '../SearchConstants';
import { DEBOUNCE_TIME } from '../../../config';
import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from '../SearchContext';
import PlacePickerList from './PlacePickerList';
import type { PlacePickerContent_locations as PlacePickerContentType } from './__generated__/PlacePickerContent_locations.graphql';

type Props = {|
  locations: ?PlacePickerContentType,
  relay: RelayRefetchProp,
  +onChangeText: string => void,
  +travelFrom: ?Location,
  +travelTo: ?Location,
  +type: 'DESTINATION' | 'ORIGIN',
  +setTravelTo: Location => void,
  +setTravelFrom: Location => void,
  +setModalType: string => void,
|};

type State = {|
  text: string,
|};

const setDefaultValue = (pickerType: string, from: string, to: string) => {
  if (pickerType === MODAL_TYPE.ORIGIN) return from;
  if (pickerType === MODAL_TYPE.DESTINATION) return to;
  return '';
};

class PlacePickerContent extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      text: setDefaultValue(
        props.type,
        props.travelFrom?.name,
        props.travelTo?.name,
      ),
    };
  }

  getLabel = () => {
    const { type } = this.props;
    if (type === MODAL_TYPE.DESTINATION) {
      return 'To';
    } else if (type === MODAL_TYPE.ORIGIN) {
      return 'From';
    }
    return null;
  };

  handleChangeText = debounce((text: string) => {
    this.setState({ text });
    this.props.relay.refetch({ input: { term: text } });
  }, DEBOUNCE_TIME);

  handleListItemClick = location => {
    const { type, setTravelFrom, setTravelTo, setModalType } = this.props;

    if (type === MODAL_TYPE.ORIGIN) {
      setTravelFrom(location);
    }
    if (type === MODAL_TYPE.DESTINATION) {
      setTravelTo(location);
    }
    setModalType(MODAL_TYPE.HIDDEN);
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text weight="bold">{this.getLabel()}:</Text>
          <TextInput
            placeholder="write a place..."
            onChangeText={this.handleChangeText}
            value={this.state.text}
            prefix={<Icon name="search" />}
          />
        </View>
        <PlacePickerList
          locations={this.props.locations?.locationsByTerm}
          onPressItem={this.handleListItemClick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '50%',
    margin: 10,
  },
});

const select = ({
  travelFrom,
  travelTo,
  modalType,
  actions: { setTravelTo, setTravelFrom, setModalType },
}: SearchContextState) => ({
  setTravelFrom,
  setTravelTo,
  travelFrom,
  travelTo,
  type: modalType,
  setModalType,
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
          ...PlacePickerList_locations
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
