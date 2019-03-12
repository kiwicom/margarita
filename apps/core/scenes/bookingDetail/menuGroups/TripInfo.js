// @flow

import * as React from 'react';
import { MenuGroup, MenuItem, Icon } from '@kiwicom/universal-components';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';

type Props = {|
  +navigation: Navigation,
|};

class TripInfoMenuGroup extends React.Component<Props> {
  onPressTickets = () => {
    this.props.navigation.navigate(Routes.TRIPINFO_TICKETS);
  };

  onPressTimeline = () => {
    this.props.navigation.navigate(Routes.TRIPINFO_TIMELINE);
  };

  render() {
    return (
      <MenuGroup title="Trip info">
        <MenuItem
          icon={<Icon name="ticket" />}
          title="Tickets"
          subTitle="Boarding passes"
          onPress={this.onPressTickets}
        />
        <MenuItem
          icon={<Icon name="clock" />}
          title="Timeline"
          subTitle="Trip information"
          onPress={this.onPressTimeline}
        />
      </MenuGroup>
    );
  }
}

export default withNavigation(TripInfoMenuGroup);
