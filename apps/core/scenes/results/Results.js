// @flow

import * as React from 'react';
import { SafeAreaView, View } from 'react-native';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import {
  SHORT_DAY_MONTH_FORMAT,
  TRIP_TYPES,
  type TripTypes,
} from '@kiwicom/margarita-config';

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

type Props = {|
  +travelFrom: string,
  +travelTo: string,
  +travelFromName: string,
  +travelToName: string,
  +dateFrom: string,
  +dateTo: string,
  +returnDateFrom: string,
  +returnDateTo: string,
  +sortBy: string,
|};

class Results extends React.Component<Props> {
  renderInner = (
    props: ReturnResultsQueryResponse | OneWayResultsQueryResponse,
  ) => {
    const { searchData } = props;
    return <ResultsList data={searchData} />;
  };

  parseSearchParametersByType = (type: TripTypes) => {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
      sortBy,
    } = this.props;
    return {
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
    } = this.props;

    const getFormattedDate = (dates: Array<string>) => {
      if (
        DateFNS.isSameDay(
          DateFNS.parseISO(dates[0]),
          DateFNS.parseISO(dates[1]),
        )
      ) {
        return DateFNS.format(
          DateFNS.parseISO(dates[0]),
          SHORT_DAY_MONTH_FORMAT,
        );
      }
      return `${DateFNS.format(
        DateFNS.parseISO(dates[0]),
        SHORT_DAY_MONTH_FORMAT,
      )} - ${DateFNS.format(
        DateFNS.parseISO(dates[1]),
        SHORT_DAY_MONTH_FORMAT,
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
    return (
      <SafeAreaView style={styles.container}>
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
});

const select = ({ sortBy }: SearchContextState) => ({
  sortBy,
});

export default withSearchContext(select)(Results);
