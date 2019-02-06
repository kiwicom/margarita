// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import * as DateFNS from 'date-fns';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  ItineraryCard,
  type ItineraryCardProps,
} from '@kiwicom/margarita-components';

import type { ResultsListItem as ResultsListItemType } from './__generated__/ResultsListItem.graphql';

type Props = {|
  +data: ResultsListItemType,
|};

export type Sectors = $PropertyType<ResultsListItemType, 'sectors'>;
export type Sectors2 = $PropertyType<ItineraryCardProps, 'sectors'>;
// export type RouteItem = $ElementType<$NonMaybeType<Route>, number>; // number because arrays are number-indexed

class ResultListItem extends React.Component<Props> {
  parseDate = (date: ?Date) => {
    if (date) return DateFNS.parse(date);
    return null;
  };

  sanitizeSectors = (sectors: Sectors) => {
    return (
      sectors &&
      sectors.map<Sectors2>(sector => ({
        ...sector,
        transporters:
          sector &&
          sector.segments &&
          sector.segments.map(segment => segment && segment.transporter),
      }))
    );
  };

  render() {
    const { data } = this.props;
    if (data == null) {
      return null;
    }

    const { price, sectors } = data;

    console.log('sectors', data);
    // @TODO use real badges
    const badges = [
      {
        id: '1',
        type: 'warning',
        children: 'Cheapest',
      },
      {
        id: '2',
        type: 'neutral',
        children: 'Wi-fi',
      },
    ];
    const priceObject = {
      amount: parseFloat(price?.amount) ?? 0,
      currency: price?.currency ?? 'CZK',
    };

    // @TODO: use Card component
    return (
      <View style={styles.card}>
        <ItineraryCard
          sectors={this.sanitizeSectors(sectors)}
          collapsedSectors={true}
          badges={badges}
          price={priceObject}
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  ResultListItem,
  graphql`
    fragment ResultsListItem on Itinerary {
      sectors {
        duration
        destination {
          name
        }
        origin {
          name
        }

        segments {
          id
          arrivalTime {
            local
            utc
          }
          departureTime {
            local
            utc
          }
          destination {
            name
          }
          duration
          origin {
            name
          }
          transporter {
            name
          }
        }
      }

      price {
        currency
        amount
      }
    }
  `,
);

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    backgroundColor: defaultTokens.backgroundCard,
    borderColor: defaultTokens.borderColorCard,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
