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

import SearchForm from '../../components/searchForm/SearchForm';
import type { ReturnResultsQueryResponse } from './__generated__/ReturnResultsQuery.graphql';
import type { OneWayResultsQueryResponse } from './__generated__/OneWayResultsQuery.graphql';
import ResultsList from './ResultsList';
import OneWayResultsQuery from './OneWayResultsQuery';
import ReturnResultsQuery from './ReturnResultsQuery';
import {
  withSearchContext,
  type SearchContextState,
} from '../search/SearchContext';
import SortTabsWrapper from '../search/SortTabsWrapper';
import type { SearchParameters } from '../search/Search';

type Props = {|
  +navigation: Navigation,
  +travelFrom: string,
  +travelTo: string,
  +travelFromName: string,
  +travelToName: string,
  +dateFrom: string,
  +dateTo: string,
  +returnDateFrom: string,
  +returnDateTo: string,
  +adults: string | number,
  +infants: string | number,
  +bags: string | number,
  +sortBy: string,
  +layout: number,
  +onSubmit?: SearchParameters => void,
|};

class Results extends React.Component<Props> {
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
          ids: [travelFrom],
        },
        destination: {
          ids: [travelTo],
        },
        outboundDate: {
          start: dateFrom,
          end: dateTo,
        },
        ...(type === TRIP_TYPES.RETURN
          ? {
              inboundDate: {
                start: returnDateFrom,
                end: returnDateTo,
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
      onSubmit,
    } = this.props;

    const getFormattedDate = (dates: $ReadOnlyArray<string>) => {
      if (
        DateFNS.isSameDay(
          DateFNS.parseISO(dates[0]),
          DateFNS.parseISO(dates[1]),
        )
      ) {
        return DateFNS.format(
          DateFNS.parseISO(dates[0]),
          LONG_DAY_MONTH_FORMAT,
        );
      }
      return `${DateFNS.format(
        DateFNS.parseISO(dates[0]),
        LONG_DAY_MONTH_FORMAT,
      )} - ${DateFNS.format(
        DateFNS.parseISO(dates[1]),
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
            <SearchForm onSubmit={onSubmit} />
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

const select = ({ sortBy }: SearchContextState) => ({
  sortBy,
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default withLayoutContext(layoutSelect)(
  withNavigation(withSearchContext(select)(Results)),
);
