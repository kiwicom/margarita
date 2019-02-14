// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { StyleSheet, Button, Icon } from '@kiwicom/universal-components';
import { Illustration } from '@kiwicom/margarita-components';
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

import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from './SearchContext';
import Placepickers from './Placepickers';
import Datepickers from './Datepickers';
import SearchModal from './SearchModal';
import { DATE_FORMAT } from './SearchConstants';
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
};

class Search extends React.Component<Props> {
  static navigationOptions = ({ navigation }: any) => ({
    header: null,
  });

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
    this.props.navigation.navigate(Routes.RESULTS, {
      travelFrom: travelFrom?.locationId,
      travelTo: travelTo?.locationId,
      travelFromName: travelFrom?.name,
      travelToName: travelTo?.name,
      dateFrom: format(dateFrom, DATE_FORMAT),
      dateTo: format(dateTo, DATE_FORMAT),
      ...(tripType === 'return'
        ? {
            returnDateFrom: format(returnDateFrom, DATE_FORMAT),
            returnDateTo: format(returnDateTo, DATE_FORMAT),
          }
        : {}),
    });
  };

  render() {
    const desktopLayout = this.props.layout >= LAYOUT.desktop;

    return (
      <>
        <View style={styles.container}>
          <View style={[styles.form, desktopLayout && styles.formDesktop]}>
            <Illustration name="Boarding" style={styles.boardingIllustration} />
            <SearchFormModes />

            <View style={desktopLayout && styles.inputsDesktop}>
              <Placepickers />
              <Datepickers />

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
          </View>
        </View>
        <SearchModal />
      </>
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
    width: '100%',
    maxWidth: 500,
    marginBottom: 100,
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
  boardingIllustration: {
    marginBottom: 20,
    web: {
      marginTop: 20,
      height: 200,
    },
  },
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

const select = ({
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

export default withNavigation(
  withLayoutContext(layoutSelect)(withSearchContext(select)(Search)),
);
