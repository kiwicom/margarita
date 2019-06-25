// @flow

import * as React from 'react';
import { SafeAreaView, View, Platform, Image } from 'react-native';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import {
  LONG_DAY_MONTH_FORMAT,
  TRIP_TYPES,
  type TripType,
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

import SearchForm from '../../components/searchForm/SearchForm';
import type { ReturnResultsQueryResponse } from './__generated__/ReturnResultsQuery.graphql';
import type { OneWayResultsQueryResponse } from './__generated__/OneWayResultsQuery.graphql';
import ResultsList from './ResultsList';
import OneWayResultsQuery from './OneWayResultsQuery';
import ReturnResultsQuery from './ReturnResultsQuery';
import {
  withSearchContext,
  type Location,
  type SearchContextState,
} from '../../contexts/searchContext';
import SortTabsWrapper from '../search/SortTabsWrapper';
import { type SearchParameters } from '../search/Search';
import AlphaGradient from './assets/alpha-to-white-vertical.png';

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
  +sortBy: string,
  +layout: number,
  +limit: number,
  +nightsInDestinationFrom: string,
  +nightsInDestinationTo: string,
  +isNightsInDestinationSelected: boolean,
  +tripType: TripType,
  +setBookingToken: string => void,
  +onSubmit: SearchParameters => void,
|};

class Results extends React.Component<Props> {
  handleBookPress = (bookingToken: string) => {
    const { adults, infants } = this.props;
    this.props.setBookingToken(bookingToken);
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

  parseSearchParametersByType = (type: TripType) => {
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
      limit,
      nightsInDestinationFrom,
      nightsInDestinationTo,
      isNightsInDestinationSelected,
    } = this.props;
    return {
      passengers: {
        adults: parseInt(adults, 10),
        infants: parseInt(infants, 10),
      },
      sort: sortBy,
      limit,
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
          ? !isNightsInDestinationSelected
            ? {
                inboundDate: {
                  start: DateFNS.format(returnDateFrom, BASIC_ISO_DATE_FORMAT),
                  end: DateFNS.format(returnDateTo, BASIC_ISO_DATE_FORMAT),
                },
              }
            : {
                nightsInDestination: {
                  from: parseInt(nightsInDestinationFrom, 10),
                  to: parseInt(nightsInDestinationTo, 10),
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
      tripType,
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

    const QueryComponent =
      tripType === TRIP_TYPES.RETURN ? ReturnResultsQuery : OneWayResultsQuery;
    const props = {
      render: this.renderInner,
      variables: {
        input: this.parseSearchParametersByType(tripType),
      },
    };
    const isWeb = Platform.OS === 'web';
    const desktopLayout = this.props.layout >= LAYOUT.desktop;
    return (
      <SafeAreaView style={styles.container}>
        {isWeb ? (
          <View
            style={[
              styles.searchFormContainer,
              desktopLayout && styles.desktopSearchForm,
            ]}
          >
            <SearchForm showButton={false} onSubmit={onSubmit} />
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
        <SortTabsWrapper />
        <View style={styles.gradientOverlapContainer}>
          <Image
            source={AlphaGradient}
            style={styles.gradientOverlapImage}
            resizeMode="stretch"
          />
        </View>
        <View style={styles.resultContainer}>
          <QueryComponent {...props} />
        </View>
      </SafeAreaView>
    );
  }
}

const gradientHeight = 20;
const styles = StyleSheet.create({
  gradientOverlapContainer: {
    position: 'relative',
    zIndex: parseFloat(defaultTokens.zIndexDefault),
    marginBottom: -gradientHeight,
  },
  gradientOverlapImage: {
    height: gradientHeight,
    width: '100%',
  },
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
      paddingLeft: 125,
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
  sortBy,
  limit,
  nightsInDestinationFrom,
  nightsInDestinationTo,
  isNightsInDestinationSelected,
  actions: { setBookingToken },
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
  sortBy,
  limit,
  nightsInDestinationFrom,
  nightsInDestinationTo,
  isNightsInDestinationSelected,
  setBookingToken,
});

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default withLayoutContext(layoutSelect)(
  withNavigation(withSearchContext(select)(Results)),
);
