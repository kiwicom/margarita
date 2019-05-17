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

import {
  withUserContext,
  type UserContextState,
} from '../../../components/userContext/UserContext';
import { PriceSummary } from '../../../components/priceSummary';
import ResultDetailPassenger from './ResultDetailPassenger';
import type { ResultDetailContent_itinerary as ResultDetailContentType } from './__generated__/ResultDetailContent_itinerary.graphql';
import ItinerarySectorDetails from '../../../components/sectorDetails/ItinerarySectorDetails';

type Props = {|
  +itinerary: ?ResultDetailContentType,
  +navigation: Navigation,
  +userEmail: ?String,
|};

type State = {|
  +email: ?string,
  +phoneNumber: ?string,
  +phoneCountryCode: ?string,
  +phoneNumber: ?number,
|};

class ResultDetailContent extends React.Component<Props, State> {
  state = {
    email: null,
    phoneNumber: 111000111,
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
            phoneCountryCode={this.state.phoneCountryCode}
            phoneNumber={this.state.phoneNumber}
            email={this.props.userEmail}
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

const selectUserContextState = ({ userEmail }: UserContextState) => ({
  userEmail,
});

export default createFragmentContainer(
  withNavigation(withUserContext(selectUserContextState)(ResultDetailContent)),
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
