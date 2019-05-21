// @flow

import * as React from 'react';
import {
  ContactDetailsForm,
  TableRow,
  TableRowDivider,
  ContentContainer,
  withAlertContext,
  type AlertContent,
  type AlertContextState,
} from '@kiwicom/margarita-components';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { formatPrice } from '@kiwicom/margarita-localization';

import {
  type PassengerType,
  withBookingContext,
  type BookingContextState,
} from '../../../components/bookingContext/BookingContext';
import { PriceSummary } from '../../../components/priceSummary';
import ResultDetailPassenger from './ResultDetailPassenger';
import type { ResultDetailContent_itinerary as ResultDetailContentType } from './__generated__/ResultDetailContent_itinerary.graphql';
import ItinerarySectorDetails from '../../../components/sectorDetails/ItinerarySectorDetails';

type Props = {|
  +itinerary: ?ResultDetailContentType,
  +navigation: Navigation,
  +passengers: Array<PassengerType>,
  +setAlertContent: (alertContent: AlertContent | null) => void,
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
    const { passengers, setAlertContent, navigation } = this.props;
    if (passengers.length === 0) {
      setAlertContent({
        message: 'At least one passenger is required',
      });
    } else {
      navigation.navigate(Routes.PAYMENT);
    }
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

const selectAlertContextState = ({
  actions: { setAlertContent },
}: AlertContextState) => ({
  setAlertContent,
});

const bookingContextState = ({ passengers }: BookingContextState) => ({
  passengers,
});
export default createFragmentContainer(
  withAlertContext(selectAlertContextState)(
    withBookingContext(bookingContextState)(
      withNavigation(ResultDetailContent),
    ),
  ),
  {
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
  },
);
