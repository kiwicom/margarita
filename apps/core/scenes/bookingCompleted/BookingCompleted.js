// @flow

import * as React from 'react';
import {
  withNavigation,
  type Navigation,
  Routes,
} from '@kiwicom/margarita-navigation';
import {
  Illustration,
  ContentContainer,
  Separator,
} from '@kiwicom/margarita-components';
import {
  StyleSheet,
  Text,
  Button,
  RadioButton,
} from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import InformationSection from '../../components/InformationSection/InformationSection';

type Props = {|
  +navigation: Navigation,
|};

type TravellingForType = 'business' | 'fun';

type State = {|
  +isTravellingFor: TravellingForType,
|};

class BookingCompleted extends React.Component<Props, State> {
  state = {
    isTravellingFor: 'business',
  };

  handleConfirmBooking = () => {
    this.props.navigation.navigate(Routes.RESULTS);
  };

  handleTravellingForChange = (change: TravellingForType) => {
    this.setState({ isTravellingFor: change });
  };

  setTravellingForFun = () => {
    this.handleTravellingForChange('fun');
  };

  setTravellingForBusiness = () => {
    this.handleTravellingForChange('business');
  };

  render() {
    return (
      <ContentContainer>
        <Illustration name="Feedback" style={styles.illustration} />
        <Text
          style={styles.marginVerticalSmall}
          align="center"
          size="large"
          weight="bold"
          type="primary"
        >
          Thank you for booking your flight at Kiwi.com
        </Text>
        <Text style={styles.marginVertical} align="center" type="secondary">
          Booking Number: 299938283
        </Text>
        <Separator style={styles.marginVerticalMedium} />
        <InformationSection iconName="email">
          <Text
            style={styles.textHeaderSection}
            size="large"
            weight="bold"
            type="primary"
          >
            What's next?
          </Text>
          <Text size="large" type="secondary">
            We'll send your payment confirmation via email
          </Text>
        </InformationSection>
        <InformationSection iconName="accommodation">
          <Text
            style={styles.textHeaderSection}
            size="large"
            weight="bold"
            type="primary"
          >
            Get more details
          </Text>
          <Text size="large" type="secondary">
            If you don’t receive your payment confirmation within 5 minutes,
            please contact us. Please contact Kiwi.com directly for any
            assistance or queries related to your booking. support@kiwi.com
          </Text>
        </InformationSection>
        <InformationSection iconName="question-circle">
          <Text
            size="large"
            weight="bold"
            type="primary"
            style={styles.textHeaderSection}
          >
            Why are you travelling?
          </Text>
          <Text size="large" type="secondary">
            We’re working on new business features for you. We’d like to know
            who’d benefit the most from them.
          </Text>
          <RadioButton
            style={styles.marginVerticalSmall}
            checked={this.state.isTravellingFor === 'business'}
            type="check"
            onPress={this.setTravellingForBusiness}
          >
            <Text type="primary" weight="bold" style={styles.radioButtonText}>
              I am travelling for business
            </Text>
          </RadioButton>
          <RadioButton
            style={styles.marginVerticalSmall}
            checked={this.state.isTravellingFor === 'fun'}
            type="check"
            onPress={this.setTravellingForFun}
          >
            <Text type="primary" weight="bold" style={styles.radioButtonText}>
              I am travelling for fun
            </Text>
          </RadioButton>
        </InformationSection>
        <Button block={true} onPress={this.handleConfirmBooking} label="Done" />
      </ContentContainer>
    );
  }
}

const styles = StyleSheet.create({
  illustration: {
    paddingTop: parseInt(defaultTokens.spaceMedium, 10),
    paddingBottom: parseInt(defaultTokens.spaceLarge, 10),
  },
  marginVerticalMedium: {
    marginVertical: parseInt(defaultTokens.spaceMedium, 10),
  },
  marginVerticalSmall: {
    marginVertical: parseInt(defaultTokens.spaceXSmall, 10),
  },
  radioButtonText: {
    paddingHorizontal: parseInt(defaultTokens.spaceMedium, 10),
    alignItems: 'center',
    display: 'flex',
  },
  textHeaderSection: {
    marginBottom: parseInt(defaultTokens.spaceXSmall, 10),
  },
});

export default withNavigation(BookingCompleted);
