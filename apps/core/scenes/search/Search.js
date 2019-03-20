// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { StyleSheet, Button, Icon } from '@kiwicom/universal-components';
import {
  Illustration,
  withAlertContext,
  type AlertContextState,
  type AlertContent,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import format from 'date-fns/format';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-utils';
import { BASIC_ISO_DATE_FORMAT } from '@kiwicom/margarita-config';

import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from './SearchContext';
import Placepickers from './Placepickers';
// import Datepickers from './Datepickers';
import RangeDatePickers from './RangeDatePickers';
import SearchModal from './SearchModal';
import SearchFormModes from './SearchFormModes';

type Props = {
  +navigation: Navigation,
  +travelFrom: ?Location,
  +travelTo: ?Location,
  +dateFrom: Date,
  +dateTo: Date,
  +returnDateFrom: Date,
  +returnDateTo: Date,
  +tripType: string,
  +adults: number,
  +infants: number,
  +bags: number,
  +layout: number,
  +setAlertContent: (alertContent: AlertContent | null) => void,
};

class Search extends React.Component<Props> {
  static navigationOptions = {
    header: null,
  };

  convertLocationsToParams = (locations, field) => {
    if (Array.isArray(locations)) {
      return locations.reduce((acc, location, index) => {
        const prefix = index > 0 ? ',' : '';
        return `${acc}${prefix}${location[field]}`;
      }, '');
    }
    return '';
  };

  handleSubmitPress = () => {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      tripType,
    } = this.props;
    if (travelFrom == null) {
      this.props.setAlertContent({
        message: 'Please fill this form completely before you proceed',
      });
    } else {
      this.props.navigation.navigate(Routes.RESULTS, {
        travelFrom: this.convertLocationsToParams(travelFrom, 'locationId'),
        travelTo: this.convertLocationsToParams(travelTo, 'locationId'),
        travelFromName: this.convertLocationsToParams(travelFrom, 'name'),
        travelToName: this.convertLocationsToParams(travelTo, 'name'),
        dateFrom: format(dateFrom, BASIC_ISO_DATE_FORMAT),
        dateTo: format(dateTo, BASIC_ISO_DATE_FORMAT),
        ...(tripType === 'return'
          ? {
              returnDateFrom: format(returnDateFrom, BASIC_ISO_DATE_FORMAT),
              returnDateTo: format(returnDateTo, BASIC_ISO_DATE_FORMAT),
            }
          : {}),
      });
    }
  };

  render() {
    const desktopLayout = this.props.layout >= LAYOUT.desktop;

    return (
      <View style={styles.container}>
        <View style={[styles.form, desktopLayout && styles.formDesktop]}>
          <View style={styles.illustrationWrapper}>
            <Illustration name="Boarding" style={styles.boardingIllustration} />
          </View>
          <SearchFormModes />

          <View style={desktopLayout && styles.inputsDesktop}>
            <Placepickers />
            {/* <Datepickers /> */}
            <RangeDatePickers />

            <View
              style={[styles.bottom, desktopLayout && styles.bottomDesktop]}
            >
              <Button
                onPress={this.handleSubmitPress}
                label="Search"
                rightIcon={
                  Platform.OS === 'web' ? <Icon name="chevron-right" /> : null
                }
              />
            </View>
          </View>
          <View style={styles.bottomSpacer} />
        </View>
        <SearchModal />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    web: {
      overflowY: 'auto',
      justifyContent: 'flex-start',
    },
  },
  form: {
    flex: 1,
    width: '100%',
    maxWidth: 500,
    padding: parseInt(defaultTokens.spaceXSmall, 10),
    web: {
      maxWidth: 730,
      paddingHorizontal: parseInt(defaultTokens.spaceLarge, 10),
    },
  },
  formDesktop: {
    web: {
      maxWidth: 1100,
    },
  },
  inputsDesktop: {
    web: {
      flexDirection: 'row',
    },
  },
  bottom: {
    marginTop: parseInt(defaultTokens.spaceXSmall, 10),
    web: {
      marginTop: 0,
    },
  },
  bottomDesktop: {
    web: {
      width: 130,
    },
  },
  illustrationWrapper: {
    flex: 5,
    justifyContent: 'flex-end',
    web: {
      flex: 0,
      flexBasis: 240,
    },
  },
  boardingIllustration: {
    marginBottom: 20,
    height: '70%',
    web: {
      height: 200,
    },
  },
  bottomSpacer: {
    flex: 1,
    web: {
      flex: 0,
      flexBasis: 100,
    },
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

const selectSearchContextState = ({
  travelFrom,
  travelTo,
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  tripType,
  adults,
  infants,
  bags,
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  tripType,
  adults,
  infants,
  bags,
});

const selectAlertContextState = ({
  actions: { setAlertContent },
}: AlertContextState) => ({
  setAlertContent,
});

export default withNavigation(
  withLayoutContext(layoutSelect)(
    withAlertContext(selectAlertContextState)(
      withSearchContext(selectSearchContextState)(Search),
    ),
  ),
);
