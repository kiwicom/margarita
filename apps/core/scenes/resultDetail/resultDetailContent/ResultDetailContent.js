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
  withUserContext,
  type UserContextState,
  type PhoneNumber,
} from '../../../contexts/userContext/UserContext';
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
  +userEmail: ?string,
  +setUserPhoneNumber: PhoneNumber => void,
  +userId: ?string,
  +userPhoneNumber: ?PhoneNumber,
  +passengers: Array<PassengerType>,
  +setAlertContent: (alertContent: AlertContent | null) => void,
|};

type State = {|
  email: ?string,
  phoneCountryCode: ?string,
  phoneNumber: ?string,
  userId: ?string,
|};

class ResultDetailContent extends React.Component<Props, State> {
  constructor(props) {
    super(props);

    this.state = {
      userId: props.userId ?? null,
      email: props.userEmail ?? null,
      phoneCountryCode: props.userPhoneNumber?.countryCode ?? null,
      phoneNumber: props.userPhoneNumber?.number ?? null,
    };
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    // if a user login state change
    if (props.userId !== state.userId) {
      return {
        userId: props.userId,
        email: props.userEmail,
        phoneCountryCode: props.userPhoneNumber?.countryCode,
        phoneNumber: props.userPhoneNumber?.number,
      };
    }

    return null;
  }

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
      this.props.setUserPhoneNumber({
        countryCode: this.state.phoneCountryCode,
        number: this.state.phoneNumber,
      });
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
            disableEmail={Boolean(this.props.userId)}
            phoneCountryCode={this.state.phoneCountryCode}
            phoneNumber={this.state.phoneNumber}
            email={this.state.email}
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

const selectUserContextState = ({
  userEmail,
  userPhoneNumber,
  userId,
  actions: { setUserPhoneNumber },
}: UserContextState) => ({
  userEmail,
  userPhoneNumber,
  setUserPhoneNumber,
  userId,
});

const selectAlertContextState = ({
  actions: { setAlertContent },
}: AlertContextState) => ({
  setAlertContent,
});

const bookingContextState = ({ passengers }: BookingContextState) => ({
  passengers,
});

export default createFragmentContainer(
  withUserContext(selectUserContextState)(
    withAlertContext(selectAlertContextState)(
      withBookingContext(bookingContextState)(
        withNavigation(ResultDetailContent),
      ),
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
