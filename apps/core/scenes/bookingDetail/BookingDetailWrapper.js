// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import TripDetails from './tripDetails/TripDetails';
import ManageMenuGroup from './menuGroups/Manage';
import ServicesMenuGroup from './menuGroups/Services';
import TripInfoMenuGroup from './menuGroups/TripInfo';
import type { BookingDetailWrapper as BookingDetailWrapperType } from './__generated__/BookingDetailWrapper.graphql';

type Props = {|
  +data: ?BookingDetailWrapperType,
|};

class BookingDetailWrapper extends React.Component<Props> {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <TripDetails data={this.props.data} />
        <TripInfoMenuGroup />
        <ServicesMenuGroup />
        <ManageMenuGroup />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTokens.paletteCloudLight,
  },
});

export default createFragmentContainer(
  BookingDetailWrapper,
  graphql`
    fragment BookingDetailWrapper on BookingInterface {
      ...TripDetails
    }
  `,
);
