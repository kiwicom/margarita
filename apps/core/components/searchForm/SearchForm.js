// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import qs from 'qs';
import {
  LAYOUT,
  withLayoutContext,
  type LayoutContextState,
} from '@kiwicom/margarita-device';
import { StyleSheet, Button, Icon } from '@kiwicom/universal-components';
import { BASIC_ISO_DATE_FORMAT, TRIP_TYPES } from '@kiwicom/margarita-config';
import format from 'date-fns/format';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import {
  withAlertContext,
  type AlertContent,
  type AlertContextState,
} from '@kiwicom/margarita-components';

import {
  type SearchContextState,
  withSearchContext,
  type Location,
} from '../../contexts/searchContext';
import Placepickers from './Placepickers';
import Datepickers from './Datepickers';
import SearchFormModes from './SearchFormModes';
import type { SearchParameters } from '../../scenes/search/Search';

type Props = {
  +navigation: Navigation,
  +travelFrom: ?$ReadOnlyArray<Location>,
  +travelTo: ?$ReadOnlyArray<Location>,
  +dateFrom: Date,
  +dateTo: Date,
  +returnDateFrom: Date,
  +returnDateTo: Date,
  +isNightsInDestinationSelected: boolean,
  +nightsInDestinationFrom: string,
  +nightsInDestinationTo: string,
  +tripType: string,
  +adults: number,
  +infants: number,
  +layout: number,
  +limit: number,
  +setAlertContent: (alertContent: AlertContent | null) => void,
  +onSubmit?: SearchParameters => void,
  +showButton: boolean,
};

class SearchForm extends React.Component<Props> {
  convertLocationsToParams = (locations, field) => {
    if (Array.isArray(locations)) {
      return locations.reduce((acc, location, index) => {
        const prefix = index > 0 ? ',' : '';
        const locationField = location[field] || '';
        return `${acc}${prefix}${locationField}`;
      }, '');
    }
    return '';
  };

  getSearchParams = () => {
    const {
      travelFrom,
      travelTo,
      tripType,
      adults,
      infants,
      limit,
      isNightsInDestinationSelected,
      nightsInDestinationFrom,
      nightsInDestinationTo,
    } = this.props;

    const dateFrom = format(this.props.dateFrom, BASIC_ISO_DATE_FORMAT);
    const dateTo = format(this.props.dateTo, BASIC_ISO_DATE_FORMAT);
    const returnDateFrom = format(
      this.props.returnDateFrom,
      BASIC_ISO_DATE_FORMAT,
    );
    const returnDateTo = format(this.props.returnDateTo, BASIC_ISO_DATE_FORMAT);

    return {
      travelFrom: qs.stringify(travelFrom),
      travelTo: qs.stringify(travelTo),
      travelFromName: this.convertLocationsToParams(travelFrom, 'name'),
      travelToName: this.convertLocationsToParams(travelTo, 'name'),
      sortBy: 'QUALITY',
      limit,
      adults,
      infants,
      dateFrom,
      dateTo,
      tripType,
      ...(tripType === TRIP_TYPES.RETURN // @TODO refactor
        ? isNightsInDestinationSelected
          ? {
              isNightsInDestinationSelected,
              nightsInDestinationFrom: parseInt(nightsInDestinationFrom, 10),
              nightsInDestinationTo: parseInt(nightsInDestinationTo, 10),
            }
          : {
              returnDateFrom,
              returnDateTo,
            }
        : {}),
    };
  };

  handleSubmitPress = () => {
    const { travelFrom } = this.props;
    if (travelFrom == null || travelFrom.length === 0) {
      this.props.setAlertContent({
        message: 'Please choose an origin place',
      });
    } else {
      const searchParams = this.getSearchParams();
      this.props.navigation.navigate(Routes.RESULTS, {
        ...searchParams,
      });
    }
  };

  handleParamsUpdate = () => {
    const { travelFrom } = this.props;
    if (travelFrom == null || travelFrom.length === 0) {
      this.props.setAlertContent({
        message: 'Please choose an origin place',
      });
    } else {
      const searchParams = this.getSearchParams();
      if (this.props.onSubmit) this.props.onSubmit(searchParams);
    }
  };

  render() {
    const desktopLayout = this.props.layout >= LAYOUT.desktop;
    return (
      <>
        <SearchFormModes onParamsUpdate={this.handleParamsUpdate} />
        <View style={desktopLayout && styles.inputsDesktop}>
          <Placepickers onPlaceSelect={this.handleParamsUpdate} />
          <Datepickers onDateSelect={this.handleParamsUpdate} />
          <View style={[styles.bottom, desktopLayout && styles.bottomDesktop]}>
            {this.props.showButton && (
              <Button
                onPress={this.handleSubmitPress}
                label="Search"
                rightIcon={
                  Platform.OS === 'web' ? <Icon name="chevron-right" /> : null
                }
              />
            )}
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
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
  isNightsInDestinationSelected,
  nightsInDestinationFrom,
  nightsInDestinationTo,
  tripType,
  adults,
  infants,
  limit,
}: SearchContextState) => ({
  travelFrom,
  travelTo,
  dateFrom,
  dateTo,
  returnDateFrom,
  returnDateTo,
  isNightsInDestinationSelected,
  nightsInDestinationFrom,
  nightsInDestinationTo,
  tripType,
  adults,
  infants,
  limit,
});

const selectAlertContextState = ({
  actions: { setAlertContent },
}: AlertContextState) => ({
  setAlertContent,
});

export default withNavigation(
  withLayoutContext(layoutSelect)(
    withAlertContext(selectAlertContextState)(
      withSearchContext(selectSearchContextState)(SearchForm),
    ),
  ),
);
