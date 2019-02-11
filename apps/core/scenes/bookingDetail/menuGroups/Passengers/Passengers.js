// @flow

import * as React from 'react';
import {
  MenuGroup,
  MenuItem,
  Icon,
  StyleSheet,
} from '@kiwicom/universal-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import PassengersList from './PassengersList';
import VisaDetail from './VisaDetail';
import type { Passengers as PassengersType } from './__generated__/Passengers.graphql';

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
          titleStyle={styles.menuGroupTitle}
          footer={<PassengersList data={this.props.data} />}
        >
          <MenuItem
            icon={<Icon name="passengers" />}
            title="Details"
            subTitle="All documents are filled in"
            onPress={this.onPress}
          />
        </MenuGroup>
        <VisaDetail data={this.props.data} />
      </>
    );
  }
}

const styles = StyleSheet.create({
  menuGroupTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

const passengersFragment = createFragmentContainer(
  Passengers,
  graphql`
    fragment Passengers on BookingInterface {
      ...PassengersList
      ...VisaDetail
    }
  `,
);

export default withNavigation(passengersFragment);
