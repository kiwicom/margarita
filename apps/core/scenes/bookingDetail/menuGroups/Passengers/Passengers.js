// @flow

import * as React from 'react';
import { MenuGroup, MenuItem, Icon } from '@kiwicom/universal-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import PassengersList from './PassengersList';
import VisaInfoSummary from './VisaInfoSummary';
import type { Passengers_data as PassengersType } from './__generated__/Passengers_data.graphql';

type Props = {|
  +data: ?PassengersType,
  +navigation: Navigation,
|};

class Passengers extends React.Component<Props> {
  onPress = () => {
    this.props.navigation.navigate(Routes.PASSENGER_DETAIL);
  };

  render() {
    return (
      <>
        <MenuGroup
          title="Passengers"
          footer={<PassengersList data={this.props.data} />}
        >
          <MenuItem
            icon={<Icon name="passengers" />}
            title="Details"
            subTitle="All documents are filled in"
            onPress={this.onPress}
          />
        </MenuGroup>
        <VisaInfoSummary data={this.props.data} />
      </>
    );
  }
}

const passengersFragment = createFragmentContainer(Passengers, {
  data: graphql`
    fragment Passengers_data on BookingInterface {
      ...PassengersList_data
      ...VisaInfoSummary_data
    }
  `,
});

export default withNavigation(passengersFragment);
