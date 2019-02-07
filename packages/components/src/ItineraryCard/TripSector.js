// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Text, StyleSheet, CarrierLogo } from '@kiwicom/universal-components';
import * as DateFNS from 'date-fns';
import { uniq } from 'ramda';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { TripSector as TripSectorType } from './__generated__/TripSector.graphql';
import TimelineArrow from './TimelineArrow';

type Props = {|
  +data: ?TripSectorType,
|};
const timeSimpleFormat = 'H:mm';
const dateFormat = 'ddd D MMM';

const getFormattedDate = (time, format = timeSimpleFormat) =>
  DateFNS.format(DateFNS.parse(time), format);

const getDuration = durationInMinutes => {
  return (
    durationInMinutes &&
    `${Math.floor(durationInMinutes / 60)}h ${durationInMinutes % 60}m`
  );
};

const mapTransporters = segments => {
  const carriers =
    segments &&
    uniq(
      segments.map(segment => ({
        name: '',
        code: segment && segment.transporter?.name,
      })),
    );

  return carriers;
};

function TripSector({ data }: Props) {
  const firstSegment = data?.segments?.[0];
  const lastSegment =
    data && data.segments && data.segments[data.segments.length - 1];
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.carrierLogo}>
          <CarrierLogo
            size="medium"
            carriers={mapTransporters(data?.segments)}
          />
        </View>
        <View style={styles.tripItems}>
          <View style={styles.time}>
            <Text style={styles.highlightedText} numberOfLines={1}>
              {getFormattedDate(firstSegment?.departureTime?.local)}
            </Text>
            <Text style={styles.highlightedText} numberOfLines={1}>
              {getFormattedDate(lastSegment?.arrivalTime?.local)}
            </Text>
          </View>
          <TimelineArrow />
          <View style={styles.places}>
            <Text style={styles.text} numberOfLines={1}>
              {firstSegment?.origin?.name}
            </Text>
            <Text style={styles.text} numberOfLines={1}>
              {lastSegment?.destination?.name}
            </Text>
          </View>
          <View style={styles.infoItems}>
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {getFormattedDate(firstSegment?.departureTime?.local, dateFormat)}
            </Text>
            <Text style={[styles.text, styles.info]} numberOfLines={1}>
              {getDuration(data?.duration)}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

export default createFragmentContainer(
  TripSector,
  graphql`
    fragment TripSector on Sector {
      duration
      segments {
        arrivalTime {
          local
        }
        departureTime {
          local
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
  `,
);

const styles = StyleSheet.create({
  container: {
    height: 70,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 0,
  },
  carrierLogo: {
    width: 30,
  },
  tripItems: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
  },
  time: {
    minWidth: 65,
    paddingHorizontal: 10,
  },
  highlightedText: {
    fontWeight: 'bold',
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    color: defaultTokens.colorTextAttention,
    padding: 5,
  },
  places: {
    flex: 1,
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    lineHeight: 17,
    padding: 5,
  },
  infoItems: {
    alignItems: 'flex-end',
  },
  info: {
    color: defaultTokens.colorTextSecondary,
  },
});
