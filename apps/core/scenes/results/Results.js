// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import {
  ORDINAL_DAY_MONTH_FORMAT,
  TRIP_TYPES,
  type TripTypes,
} from '@kiwicom/margarita-config';

import type { ReturnResultsQueryResponse } from './__generated__/ReturnResultsQuery.graphql';
import type { OneWayResultsQueryResponse } from './__generated__/OneWayResultsQuery.graphql';
import ResultsList from './ResultsList';
import OneWayResultsQuery from './OneWayResultsQuery';
import ReturnResultsQuery from './ReturnResultsQuery';

type Props = {|
  +travelFrom: string,
  +travelTo: string,
  +travelFromName: string,
  +travelToName: string,
  +dateFrom: string,
  +dateTo: string,
  +returnDateFrom: string,
  +returnDateTo: string,
|};

export default class Results extends React.Component<Props> {
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
    } = this.props;
    return {
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
      returnDateFrom,
    } = this.props;

    const getFormattedDate = date =>
      DateFNS.format(DateFNS.parseISO(date), ORDINAL_DAY_MONTH_FORMAT);

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
            localizedDate: getFormattedDate(dateFrom),
          }}
          arrival={{
            city: travelToName,
            localizedDate: returnDateFrom
              ? getFormattedDate(returnDateFrom)
              : '',
          }}
        />
        <QueryComponent {...props} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: designTokens.heightStatusBar,
    web: {
      marginTop: 0,
    },
    justifyContent: 'flex-start',
  },
});
