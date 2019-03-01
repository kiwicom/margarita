// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';

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

const statusBarHeight = 20; // @TODO add to orbit design tokens

export default class Results extends React.Component<Props> {
  renderInner = (props: ResultsQueryResponse) => {
    const { searchItineraries } = props;
    return <ResultsList data={searchItineraries} />;
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

    // @TODO get from config
    const dateFormat = 'Do MMMM';

    const from = DateFNS.format(DateFNS.parse(dateFrom), dateFormat);
    const tripType = returnDateFrom ? 'Return' : 'OneWay';
    const to = returnDateFrom
      ? DateFNS.format(DateFNS.parse(returnDateFrom), dateFormat)
      : '';
    return (
      <SafeAreaView style={styles.container}>
        <SearchParamsSummary
          tripType={tripType}
          departure={{ city: travelFromName, localizedDate: from }}
          arrival={{ city: travelToName, localizedDate: to }}
        />
        <QueryRenderer
          query={graphql`
            query ResultsQuery($input: ItinerariesSearchInput!) {
              searchItineraries(input: $input) {
                ...ResultsList_data
              }
            }
          `}
          variables={{
            input: {
              travelFrom,
              travelTo,
              dateFrom,
              dateTo,
              returnDateFrom,
              returnDateTo,
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
    marginTop: statusBarHeight,
    web: {
      marginTop: 0,
    },
    justifyContent: 'flex-start',
  },
});
