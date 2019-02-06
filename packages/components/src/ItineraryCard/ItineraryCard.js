// @flow

import * as React from 'react';
import { View } from 'react-native';
import { LocalizedPrice, StyleSheet } from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import ItineraryCardRow from './ItineraryCardRow';
import type { ItineraryCardProps } from './ItineraryCardTypes';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';
import CollapsedSector from './CollapsedSector';
// import type { ItineraryCard as ItineraryCardType } from './__generated__/ItineraryCard.graphql';

type Props = {|
  +data: any,
|};
// export type Sectors = $PropertyType<ItineraryCardType, 'sectors'>;
export type Sectors2 = $PropertyType<ItineraryCardProps, 'sectors'>;

class ItineraryCard extends React.Component<Props> {
  sanitizeSectors = (sectors: any) => {
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
    const sanitizedSectors = this.sanitizeSectors(sectors);
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

    return (
      <View style={styles.card}>
        <View>
          {sanitizedSectors &&
            sanitizedSectors.map<React.Node>((sector, sectorIndex) => (
              <CollapsedSector
                sectors={sanitizedSectors}
                sector={sector}
                sectorIndex={sectorIndex}
              />
            ))}
          <HorizontalDash />
          <ItineraryCardRow style={styles.lastRow}>
            <BadgesContainer badges={badges} />
            <LocalizedPrice localizedPrice={formatPrice(priceObject)} />
          </ItineraryCardRow>
        </View>
      </View>
    );
  }
}

export default createFragmentContainer(
  ItineraryCard,
  graphql`
    fragment ItineraryCard on Itinerary {
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
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginTop: 2,
  },
  card: {
    marginBottom: 10,
    backgroundColor: defaultTokens.backgroundCard,
    borderColor: defaultTokens.borderColorCard,
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
});
