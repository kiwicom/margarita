// @flow

import * as React from 'react';
import {
  ContactDetailsForm,
  TableRow,
  TableRowDivider,
  ContentContainer,
} from '@kiwicom/margarita-components';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { formatPrice } from '@kiwicom/margarita-localization';

import { PriceSummary } from '../../../components/priceSummary';
import ResultDetailPassenger from './ResultDetailPassenger';
import type { ResultDetailContent_itinerary as ResultDetailContentType } from './__generated__/ResultDetailContent_itinerary.graphql';
import ItinerarySectorDetails from '../../../components/sectorDetails/ItinerarySectorDetails';

type Props = {|
  +itinerary: ?ResultDetailContentType,
  +navigation: Navigation,
|};

type State = {|
  +email: ?string,
  +phoneNumber: ?string,
  +phoneCountryCode: ?string,
|};

class ResultDetailContent extends React.Component<Props, State> {
  state = {
    email: null,
    phoneNumber: null,
    phoneCountryCode: null,
  };

  handleChangeEmail = email => {
    this.setState({ email });
  };

  handleChangePhoneNumber = phoneNumber => {
    this.setState({ phoneNumber });
  };

  handleChangePhoneCountryCode = phoneCountryCode => {
    this.setState({ phoneCountryCode });
  };

  handleContinue = () => {
    this.props.navigation.navigate(Routes.PAYMENT);
  };

  render() {
    const localizedPrice = formatPrice(
      this.props.itinerary?.price?.amount,
      this.props.itinerary?.price?.currency,
    );
    return (
      <>
        <ContentContainer>
          <ItinerarySectorDetails itinerary={this.props.itinerary} />
          <ResultDetailPassenger itinerary={this.props.itinerary} />
          <ContactDetailsForm
            onChangeEmail={this.handleChangeEmail}
            onChangePhoneNumber={this.handleChangePhoneNumber}
            onChangeCountryCode={this.handleChangePhoneCountryCode}
          />
        </ContentContainer>
        <PriceSummary
          isLoading={!this.props.itinerary?.isChecked}
          onButtonPress={this.handleContinue}
          renderCollapseContent={
            <>
              <TableRow label="1x Passenger" value="€100" />
              <TableRow label="1x Cabin bag" value="€100" />
              <TableRow label="1x Personal item" value="€100" />
              <TableRowDivider />
            </>
          }
          renderVisibleContent={
            <TableRow
              label="Subtotal"
              value={localizedPrice}
              highlightedLabel
              highlightedValue
            />
          }
        />
      </>
    );
  }
}

export default createFragmentContainer(withNavigation(ResultDetailContent), {
  itinerary: graphql`
    fragment ResultDetailContent_itinerary on ItineraryInterface {
      isChecked
      price {
        currency
        amount
      }
      ...ResultDetailPassenger_itinerary
      ...ItinerarySectorDetails_itinerary
    }
  `,
});
