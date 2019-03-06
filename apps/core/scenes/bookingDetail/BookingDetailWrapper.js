// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';

import SectorDetails from './sectorDetails/SectorDetails';
import ManageMenuGroup from './menuGroups/Manage';
import ServicesMenuGroup from './menuGroups/Services';
import TripInfoMenuGroup from './menuGroups/TripInfo';
import Passengers from './menuGroups/Passengers';
import type { BookingDetailWrapper_data as BookingDetailWrapperType } from './__generated__/BookingDetailWrapper_data.graphql';

type Props = {|
  +data: ?BookingDetailWrapperType,
|};

class BookingDetailWrapper extends React.Component<Props> {
  render() {
    return (
      <ScrollView containerContentStyle={styles.container}>
        <SectorDetails data={this.props.data} />
        <TripInfoMenuGroup />
        <Passengers data={this.props.data} />
        <ServicesMenuGroup />
        <ManageMenuGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default createFragmentContainer(BookingDetailWrapper, {
  data: graphql`
    fragment BookingDetailWrapper_data on BookingInterface {
      ...SectorDetails_data
      ...Passengers_data
    }
  `,
});
