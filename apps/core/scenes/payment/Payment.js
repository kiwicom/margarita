// @flow

import * as React from 'react';
import { View, ScrollView } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { TableRow, TableRowDivider } from '@kiwicom/margarita-components';
import { withNavigation, type Navigation } from '@kiwicom/margarita-navigation';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import { PriceSummary } from '../../components/priceSummary';

type Props = {|
  +detailId: ?string,
  +navigation: Navigation,
|};

type State = {|
  +email: ?string,
  +phoneNumber: ?string,
  +phoneCountryCode: ?string,
|};

class Payment extends React.Component<Props, State> {
  state = {
    email: null,
    phoneNumber: null,
    phoneCountryCode: null,
  };

  handleReview = () => {
    // @TODO
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView />
        <PriceSummary
          buttonLabel="Review & Pay"
          onButtonPress={this.handleReview}
          renderCollapseContent={
            <>
              <TableRow label="1x Passenger" value="123 Kč" />
              <TableRow label="1x Cabin bag" value="123 Kč" />
              <TableRow label="1x Personal item" value="123 Kč" />
              <TableRowDivider />
              <TableRow label="Price" value="123 Kč" />
              <TableRow label="Service fee" value="123 Kč" />
              <TableRow label="Other fees" value="123 Kč" />

              <TableRowDivider />
            </>
          }
          renderVisibleContent={
            <TableRow
              label="Subtotal"
              value="123 Kč"
              highlightedLabel
              highlightedValue
            />
          }
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: defaultTokens.backgroundBody,
  },
});

export default withNavigation(Payment);
