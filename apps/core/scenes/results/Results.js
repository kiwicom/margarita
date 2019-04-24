// @flow

import * as React from 'react';
import { SafeAreaView, View, Platform } from 'react-native';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import {
  LONG_DAY_MONTH_FORMAT,
  TRIP_TYPES,
  type TripTypes,
  BASIC_ISO_DATE_FORMAT,
} from '@kiwicom/margarita-config';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';
import {
  withNavigation,
  Routes,
  type Navigation,
} from '@kiwicom/margarita-navigation';
import { noop } from '@kiwicom/margarita-utils';

import SearchForm from '../../components/searchForm/SearchForm';
import type { ReturnResultsQueryResponse } from './__generated__/ReturnResultsQuery.graphql';
import type { OneWayResultsQueryResponse } from './__generated__/OneWayResultsQuery.graphql';
import ResultsList from './ResultsList';
import OneWayResultsQuery from './OneWayResultsQuery';
import ReturnResultsQuery from './ReturnResultsQuery';
import {
  withSearchContext,
  type SearchContextState,
  type Location,
} from '../search/SearchContext';
import SortTabsWrapper from '../search/SortTabsWrapper';
import { type SearchParameters } from '../search/Search';

type Props = {|
  +navigation: Navigation,
  +travelFrom: $ReadOnlyArray<Location>,
  +travelTo: $ReadOnlyArray<Location>,
  +travelFromName: string,
  +travelToName: string,
  +dateFrom: Date,
  +dateTo: Date,
  +returnDateFrom: Date,
  +returnDateTo: Date,
  +adults: number,
  +infants: number,
  +bags: number,
  +sortBy: string,
  +layout: number,
  +routerQuery: SearchParameters,
  +setStateFromQueryParams: SearchParameters => void,
|};

class Results extends React.Component<Props> {
  componentDidMount() {
    const { setStateFromQueryParams, routerQuery } = this.props;
    setStateFromQueryParams(routerQuery);
  }

  handleBookPress = (bookingToken: ?string) => {
    const { adults, infants } = this.props;
    this.props.navigation.navigate(Routes.RESULT_DETAIL, {
      adults,
      infants,
      bookingToken,
    });
  };

  renderInner = (
    props: ReturnResultsQueryResponse | OneWayResultsQueryResponse,
  ) => {
    const { searchData } = props;
    return <ResultsList data={searchData} onBookPress={this.handleBookPress} />;
  };

  parseSearchParametersByType = (type: TripTypes) => {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      adults,
      infants,
      sortBy,
    } = this.props;
    return {
      passengers: {
        adults: parseInt(adults, 10),
        infants: parseInt(infants, 10),
      },
      sort: sortBy,
      itinerary: {
        origin: {
          ids: travelFrom.map(location => location.id),
        },
        destination: {
          ids: travelTo.map(location => location.id),
        },
        outboundDate: {
          start: DateFNS.format(dateFrom, BASIC_ISO_DATE_FORMAT),
          end: DateFNS.format(dateTo, BASIC_ISO_DATE_FORMAT),
        },
        ...(type === TRIP_TYPES.RETURN
          ? {
              inboundDate: {
                start: DateFNS.format(returnDateFrom, BASIC_ISO_DATE_FORMAT),
                end: DateFNS.format(returnDateTo, BASIC_ISO_DATE_FORMAT),
              },
            }
          : {}),
      },
    };
  };

  render() {
    const {
      travelFromName,
      travelToName,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
    } = this.props;
    const getFormattedDate = (dates: $ReadOnlyArray<Date>) => {
      const stringDates: $ReadOnlyArray<string> = dates.map(date =>
        DateFNS.format(date, BASIC_ISO_DATE_FORMAT),
      );
      if (
        DateFNS.isSameDay(
          DateFNS.parseISO(stringDates[0]),
          DateFNS.parseISO(stringDates[1]),
        )
      ) {
        return DateFNS.format(
          DateFNS.parseISO(stringDates[0]),
          LONG_DAY_MONTH_FORMAT,
        );
      }
      return `${DateFNS.format(
        DateFNS.parseISO(stringDates[0]),
        LONG_DAY_MONTH_FORMAT,
      )} - ${DateFNS.format(
        DateFNS.parseISO(stringDates[1]),
        LONG_DAY_MONTH_FORMAT,
      )}`;
    };

    const tripType: TripTypes = returnDateFrom
      ? TRIP_TYPES.RETURN
      : TRIP_TYPES.ONEWAY;
    const QueryComponent =
      tripType === TRIP_TYPES.RETURN ? ReturnResultsQuery : OneWayResultsQuery;
    const props = {
      render: this.renderInner,
      variables: {
        input: this.parseSearchParametersByType(tripType),
      },
    };
    const desktopLayout = this.props.layout >= LAYOUT.desktop;
    return (
      <SafeAreaView style={styles.container}>
        {Platform.OS === 'web' ? (
          <View
            style={[
              styles.searchFormContainer,
              desktopLayout && styles.desktopSearchForm,
            ]}
          >
            <SearchForm onSubmit={noop} />
          </View>
        ) : (
          <SearchParamsSummary
            tripType={tripType}
            departure={{
              city: travelFromName,
              localizedDate: getFormattedDate([dateFrom, dateTo]),
            }}
            arrival={{
              city: travelToName,
              localizedDate: returnDateFrom
                ? getFormattedDate([returnDateFrom, returnDateTo])
                : '',
            }}
          />
        )}

        <View style={styles.resultContainer}>
          <SortTabsWrapper />
          <QueryComponent {...props} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  resultContainer: {
    backgroundColor: defaultTokens.backgroundBody,
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: designTokens.heightStatusBar,
    web: {
      marginTop: 0,
    },
    justifyContent: 'flex-start',
  },
  searchFormContainer: {
    width: '100%',
    padding: parseInt(defaultTokens.spaceMedium, 10),
  },
  desktopSearchForm: {
    web: {
      paddingHorizontal: 125,
    },
  },
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
  sortBy,
  actions: { setStateFromQueryParams },
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
  sortBy,
  setStateFromQueryParams,
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default withLayoutContext(layoutSelect)(
  withNavigation(withSearchContext(select)(Results)),
);
