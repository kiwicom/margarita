// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import { ORDINAL_DAY_MONTH_FORMAT } from '@kiwicom/margarita-config';

import type { ResultsQueryResponse } from './__generated__/ResultsQuery.graphql';
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

export default class Results extends React.Component<Props> {
  renderInner = (props: ResultsQueryResponse) => {
    const { searchReturnItineraries } = props;
    return <ResultsList data={searchReturnItineraries} />;
  };

  render() {
    const {
      travelFrom,
      travelTo,
      travelFromName,
      travelToName,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
    } = this.props;

    const getFormattedDate = date =>
      DateFNS.format(DateFNS.parseISO(date), ORDINAL_DAY_MONTH_FORMAT);

    const tripType = returnDateFrom ? 'Return' : 'OneWay';
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
          query={graphql`
            query ResultsQuery($input: ItinerariesReturnSearchInput!) {
              searchReturnItineraries(input: $input) {
                ...ResultsList_data
              }
            }
          `}
          variables={{
            input: {
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
                inboundDate: {
                  start: returnDateFrom,
                  end: returnDateTo,
                },
              },
            },
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
