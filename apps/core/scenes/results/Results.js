// @flow

import * as React from 'react';
import { View } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { DateTime } from 'luxon';
import { SearchParamsSummary } from '@kiwicom/margarita-components';

import type { ResultsList as ResultsListType } from './__generated__/ResultsList.graphql';
import ResultsList from './ResultsList';

type Props = {|
  +travelFrom: string,
  +travelTo: string,
  +dateFrom: string,
  +dateTo: string,
  +returnDateFrom: string,
  +returnDateTo: string,
|};

type ResultsType = {|
  +searchItineraries: ResultsListType,
|};

export default class Results extends React.Component<Props> {
  renderInner = (props: ResultsType) => {
    const { searchItineraries } = props;
    return <ResultsList data={searchItineraries} />;
  };

  render() {
    const {
      travelFrom,
      travelTo,
      dateFrom,
      dateTo,
      returnDateFrom,
      returnDateTo,
    } = this.props;

    const dateFormat = 'd LLLL';
    const from = DateTime.fromISO(dateFrom).toFormat(dateFormat);
    const tripType = returnDateFrom ? 'Return' : 'OneWay';
    const to = returnDateFrom
      ? DateTime.fromISO(returnDateFrom).toFormat(dateFormat)
      : '';
    return (
      <View style={styles.container}>
        <SearchParamsSummary
          tripType={tripType}
          departure={{ city: travelFrom, localizedDate: from }}
          arrival={{ city: travelTo, localizedDate: to }}
        />
        <QueryRenderer
          query={graphql`
            query ResultsQuery($input: ItinerariesSearchInput!) {
              searchItineraries(input: $input) {
                ...ResultsList
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    android: {
      marginTop: 40, // @TODO create some metric for this number
    },
    ios: {
      marginTop: 40, // @TODO create some metric for this number
    },
    justifyContent: 'flex-start',
  },
});
