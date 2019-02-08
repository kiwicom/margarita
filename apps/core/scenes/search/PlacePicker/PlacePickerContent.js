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
  withSearchContext,
  type SearchContextState,
  type Location,
} from '../SearchContext';
import PlacePickerList from './PlacePickerList';

type Locations = $ReadOnlyArray<?{|
  +node: ?{|
    +id: string,
    +name: ?string,
    +locationId: ?string,
  |},
|}>;

type Props = {|
  +locations: Locations,
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
  if (pickerType === 'ORIGIN') return from;
  if (pickerType === 'DESTINATION') return to;
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

    if (type === 'DESTINATION') {
      return 'To';
    } else if (type === 'ORIGIN') {
      return 'From';
    }
    return null;
  };

  handleChangeText = (text: string) => {
    this.setState({ text });
    this.props.onChangeText(text);
  };

  handleListItemClick = location => {
    const { type, setTravelFrom, setTravelTo, setModalType } = this.props;

    if (type === 'ORIGIN') {
      setTravelFrom(location);
    }
    if (type === 'DESTINATION') {
      setTravelTo(location);
    }
    setModalType('HIDDEN');
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text weight="bold">{this.getLabel()}:</Text>
          <TextInput
            autofoucs
            placeholder="write a place..."
            onChangeText={this.handleChangeText}
            value={this.state.text}
            prefix={<Icon name="search" />}
          />
        </View>
        <PlacePickerList
          locations={this.props.locations}
          onPressItem={this.handleListItemClick}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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

export default withSearchContext(select)(PlacePickerContent);
