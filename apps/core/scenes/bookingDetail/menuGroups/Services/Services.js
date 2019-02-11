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

import Footer from './Footer';

type Props = {|
  +navigation: Navigation,
|};

class ServicesMenuGroup extends React.Component<Props> {
  onPressFlightServices = () => {
    this.props.navigation.navigate(Routes.SERVICES_FLIGHT_SERVICES);
  };

  onPressTripServices = () => {
    this.props.navigation.navigate(Routes.SERVICES_TRIP_SERVICES);
  };

  render() {
    return (
      <MenuGroup
        title="services"
        titleStyle={styles.menuGroupTitle}
        footer={<Footer />}
      >
        <MenuItem
          icon={<Icon name="flight-services" />}
          title="Flight Services"
          subTitle="Wi-Fi, Food, Sports equipment"
          onPress={this.onPressFlightServices}
        />
        <MenuItem
          icon={<Icon name="insurance-confirmed" />}
          title="Trip Services"
          subTitle="Insurance, Hotels, Transfers"
          onPress={this.onPressTripServices}
        />
      </MenuGroup>
    );
  }
}

const styles = StyleSheet.create({
  menuGroupTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default withNavigation(ServicesMenuGroup);
