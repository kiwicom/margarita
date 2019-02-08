// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import { type Location } from '../SearchContext';
import PlaceItem from './PlaceItem';

type Locations = $ReadOnlyArray<?{|
  +node: ?{|
    +id: string,
    +name: ?string,
    +locationId: ?string,
  |},
|}>;

type Props = {|
  +locations: Locations,
  +onPressItem: Location => void,
|};

const PlacePickerList = ({ locations, onPressItem }: Props) => {
  return (
    <ScrollView style={styles.container}>
      {locations.map(location => (
        <PlaceItem
          key={location?.node?.id}
          location={location?.node}
          onPress={onPressItem}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginStart: 25,
  },
});

export default PlacePickerList;
