// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import { mobileTokens } from '@kiwicom/margarita-utils';

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
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    android: {
      marginTop: mobileTokens.heightStatusBarAndroid,
    },
    ios: {
      marginTop: mobileTokens.heightStatusBarIOS,
    },
    web: {
      marginTop: 0,
    },
    justifyContent: 'flex-start',
  },
});
