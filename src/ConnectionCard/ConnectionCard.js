// @flow

import * as React from 'react';
import { View } from 'react-native';
import { Badge } from '../Badge';
import { LocalizedPrice } from '../LocalizedPrice';
import ConnectionCardRow from './ConnectionCardRow';
import TripSector from './TripSector';
import BadgesContainer from './BadgesContainer';
import type { BadgeProps } from '../Badge/BadgeTypes';
import type { LocalizedPriceProps } from '../LocalizedPrice/LocalizedPriceTypes';
import type { TripSectorProps } from './ConnectionCardTypes';
import { StyleSheet } from '../PlatformStyleSheet';

type TripSectorWithId = { ...TripSectorProps, id: number };
type BadgeWithId = { ...BadgeProps, id: number };

type Props = {|
  +padding?: boolean,
  +wayForth: Array<TripSectorWithId>,
  +wayBack?: Array<TripSectorWithId>,
  +duration?: string,
  +badges?: Array<BadgeWithId>,
  ...LocalizedPriceProps,
|};

const renderTripSector = way =>
  way &&
  way.map(connection => (
    <TripSector
      key={connection.id}
      arrival={connection.arrival}
      arrivalTime={connection.arrivalTime}
      carrier={connection.carrier}
      tripDate={connection.tripDate}
      departure={connection.departure}
      departureTime={connection.departureTime}
      duration={connection.duration}
    />
  ));

const renderBadges = badges =>
  badges &&
  badges.map(badge => (
    <Badge key={badge.id} type={badge.type} style={styles.badge}>
      {badge.children}
    </Badge>
  ));

export default function ConnectionCard({
  padding = true,
  wayForth,
  wayBack,
  localizedPrice,
  duration,
  badges,
}: Props) {
  const hasWayBack = wayBack && wayBack.length > 0;
  return (
    <View style={[styles.container, { paddingHorizontal: padding ? 10 : 0 }]}>
      <ConnectionCardRow>{renderTripSector(wayForth)}</ConnectionCardRow>
      {hasWayBack && (
        <React.Fragment>
          {duration && (
            <ConnectionCardRow>
              <View style={styles.leftShift}>
                <Badge type="neutral">Returns in {duration}</Badge>
              </View>
            </ConnectionCardRow>
          )}
          <ConnectionCardRow>{renderTripSector(wayBack)}</ConnectionCardRow>
        </React.Fragment>
      )}
      <ConnectionCardRow style={styles.lastRow}>
        <BadgesContainer>{renderBadges(badges)}</BadgesContainer>
        <LocalizedPrice localizedPrice={localizedPrice} />
      </ConnectionCardRow>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  leftShift: {
    paddingStart: 103,
  },
  badge: {
    marginEnd: 10,
  },
});
