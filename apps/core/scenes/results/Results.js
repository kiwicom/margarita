// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import { ORDINAL_DAY_MONTH_FORMAT } from '@kiwicom/margarita-config';

import type { ResultsReturnQueryResponse } from './__generated__/ResultsReturnQuery.graphql';
import type { ResultsOneWayQueryResponse } from './__generated__/ResultsOneWayQuery.graphql';
import ResultsList from './ResultsList';

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

type TripTypes = 'Return' | 'OneWay';

export default class Results extends React.Component<Props> {
  renderInner = (
    props: ResultsReturnQueryResponse | ResultsOneWayQueryResponse,
  ) => {
    const { searchData } = props;
    return <ResultsList data={searchData} />;
  };

  getSearchQueryByType = (type: TripTypes) => {
    let query;
    switch (type) {
      case 'Return':
        query = graphql`
          query ResultsReturnQuery($input: ItinerariesReturnSearchInput!) {
            searchData: searchReturnItineraries(input: $input) {
              ...ResultsList_data
            }
          }
        `;
        break;
      case 'OneWay':
        query = graphql`
          query ResultsOneWayQuery($input: ItinerariesOneWaySearchInput!) {
            searchData: searchOneWayItineraries(input: $input) {
              ...ResultsList_data
            }
          }
        `;
        break;
    }
    return query;
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
        ...(type === 'Return'
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

    const tripType: TripTypes = returnDateFrom ? 'Return' : 'OneWay';
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
        <QueryRenderer
          query={this.getSearchQueryByType(tripType)}
          variables={{
            input: this.parseSearchParametersByType(tripType),
          }}
          render={this.renderInner}
        />
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
