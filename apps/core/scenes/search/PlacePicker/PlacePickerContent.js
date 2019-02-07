// @flow

// TODO this is just the temporary Picker will be replaced by the OptionPicker form the 'universal-components'

import {
  graphql,
  createRefetchContainer,
  type RelayRefetchProp,
} from '@kiwicom/margarita-relay';
import * as React from 'react';
import { View, ScrollView, TouchableWithoutFeedback } from 'react-native';
import {
  Text,
  TextInput,
  Icon,
  StyleSheet,
} from '@kiwicom/universal-components';
import { debounce } from '@kiwicom/margarita-utils';

import type { PlacePickerContent_locations as PlacePickerContentType } from './__generated__/PlacePickerContent_locations.graphql.js';

type Props = {|
  +locations: ?PlacePickerContentType,
  +type: string,
  +relay: RelayRefetchProp,
  +onChoose: string => void,
|};

type State = {|
  text: string,
|};

class PlacePicker extends React.Component<Props, State> {
  state = {
    text: '',
  };

  handleChangeText = debounce((text: string) => {
    this.setState({ text });
    this.props.relay.refetch({ input: { term: text } });
  }, 250);

  getLabel = () => {
    const { type } = this.props;
    if (type === 'DESTINATION') {
      return 'To';
    } else if (type === 'ORIGIN') {
      return 'From';
    }
    return null;
  };

  render() {
    const locations = this.props.locations?.locationsByTerm?.edges ?? [];

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
        <ScrollView style={styles.list}>
          {locations.map(location => (
            <TouchableWithoutFeedback
              onPress={() => this.props.onChoose(location.node.locationId)}
              key={location?.node?.id}
            >
              <View style={styles.wrapper}>
                <Icon name="location" />
                <Text style={styles.listItem}>{location?.node?.name}</Text>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default createRefetchContainer(
  PlacePicker,
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

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  list: {
    marginStart: 25,
  },
  listItem: {
    paddingVertical: 10,
  },
});
