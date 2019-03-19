// @flow

import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { QueryRenderer, graphql } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { SearchParamsSummary } from '@kiwicom/margarita-components';
import { margaritaTokens } from '@kiwicom/margarita-design-tokens';
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

    const from = DateFNS.format(
      DateFNS.parseISO(dateFrom),
      ORDINAL_DAY_MONTH_FORMAT,
    );

    const tripType = returnDateFrom ? 'Return' : 'OneWay';
    const to = returnDateFrom
      ? DateFNS.format(
          DateFNS.parseISO(returnDateFrom),
          ORDINAL_DAY_MONTH_FORMAT,
        )
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
              travelFrom: [travelFrom],
              travelTo: [travelTo],
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
    marginTop: margaritaTokens.heightStatusBar,
    web: {
      marginTop: 0,
    },
    justifyContent: 'flex-start',
  },
});
