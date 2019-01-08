// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { DateTime, Duration } from 'luxon';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { ConnectionCard } from '@kiwicom/margarita-components';

import type { ResultsListItem as ResultsListItemType } from './__generated__/ResultsListItem.graphql';

type Props = {|
  +data: ResultsListItemType,
|};

// @TODO make TripSectorProps and CarrierData exportable from universal-components
export type CarrierData = {
  code: string,
  name: string,
  type?: 'airline' | 'bus' | 'train',
};

export type TripSectorProps = {
  +id: string,
  +arrival: string,
  +arrivalTime: string,
  +carrier: CarrierData,
  +tripDate: string,
  +departure: string,
  +departureTime: string,
  +duration: string,
};

export type Route = $PropertyType<ResultsListItemType, 'route'>;
export type RouteItem = $ElementType<$NonMaybeType<Route>, number>; // number because arrays are number-indexed

const dateFormat = 'ccc d LLL';

class ResultListItem extends React.Component<Props> {
  getDateTimeInterval = (
    to: DateTime,
    from: DateTime,
    unit: string | string[] = ['hours', 'minutes'],
  ) => {
    return to.diff(from, unit).toObject();
  };

  intervalToString = (
    interval?: Duration,
    type?: 'days' | 'hours' = 'hours',
  ): ?string => {
    if (!interval) {
      return '';
    }
    if (type === 'days') {
      switch (interval.days) {
        case 0:
          return `${Math.floor(interval.hours)} hours`;
        case 1:
          return `${interval.days} day`;
        default:
          return `${interval.days} days`;
      }
    }
    return (
      (interval.hours ? interval.hours + 'h' : '') +
      (interval.minutes ? ' ' + interval.minutes + 'm' : '')
    );
  };

  // @TODO Handle cases when we don't have some data from GraphQL/REST server
  getSanitizedRouteItem = (route: RouteItem): ?TripSectorProps => {
    if (route) {
      const localArrival = DateTime.fromISO(route.arrival?.localTime);
      const localDeparture = DateTime.fromISO(route.departure?.localTime);
      const utcArrival = DateTime.fromISO(route.arrival?.utcTime);
      const utcDeparture = DateTime.fromISO(route.departure?.utcTime);
      const duration = this.intervalToString(
        this.getDateTimeInterval(utcArrival, utcDeparture),
      );
      return {
        arrival: route.arrival?.city ?? '',
        arrivalTime:
          (localArrival && localArrival.toLocaleString(DateTime.TIME_SIMPLE)) ??
          '',
        carrier: { code: route.airline ?? '', name: '' }, // @TODO: get name of the airline
        tripDate: (localDeparture && localDeparture.toFormat(dateFormat)) ?? '',
        departure: route.departure?.city ?? '',
        departureTime:
          (localDeparture &&
            localDeparture.toLocaleString(DateTime.TIME_SIMPLE)) ??
          '',
        duration: duration ?? '',
        id: route.id ?? '',
      };
    }
    return null;
  };

  getSectorBorderIndex = (): ?number => {
    const { route, routes } = this.props.data;
    if (!route) {
      return null;
    }
    return route.findIndex(
      routeItem => routeItem?.departure?.cityCode === routes?.[1]?.[0],
    );
  };

  // @TODO: make ConnectionCard more universal (not only for forth and back routes)
  getSanitizedRoute = (): ?Array<?TripSectorProps> => {
    const { route } = this.props.data;
    return (
      route &&
      route.map((routeItem: RouteItem) => this.getSanitizedRouteItem(routeItem))
    );
  };

  getSector = (
    route: ?Array<?TripSectorProps>,
    demandedSector: ?number,
    sectorBorderIndex: ?number,
  ): ?Array<?TripSectorProps> => {
    if (!route) {
      return null;
    }
    if (
      demandedSector === null ||
      sectorBorderIndex === null ||
      sectorBorderIndex === -1
    ) {
      return route;
    }
    if (demandedSector === 0) {
      return route.slice(0, sectorBorderIndex);
    }
    return route.slice(sectorBorderIndex);
  };

  getSectorBorderDuration = (route: ?Route, sectorBorderIndex: ?number) => {
    if (route && sectorBorderIndex != null && sectorBorderIndex > 0) {
      const stopBeforeSector = route[sectorBorderIndex - 1];
      const stopAfterSector = route[sectorBorderIndex];

      const utcDeparture =
        stopAfterSector &&
        stopAfterSector.departure &&
        DateTime.fromISO(stopAfterSector.departure.utcTime);
      const utcArrival =
        stopBeforeSector &&
        stopBeforeSector.arrival &&
        DateTime.fromISO(stopBeforeSector.arrival.utcTime);
      return this.getDateTimeInterval(utcDeparture, utcArrival, [
        'days',
        'hours',
      ]);
    }
    return null;
  };

  render() {
    const { data } = this.props;
    const sanitizedRoute = this.getSanitizedRoute();
    const sectorBorderIndex = this.getSectorBorderIndex();
    const hasSectorBorder = sectorBorderIndex != null && sectorBorderIndex > -1;
    if (data == null) {
      return null;
    }
    const { price } = data;
    /**
     * TODO: properly handle possible undefined props in final version of list
     * (for example: should be entry with undefined price still displayed?)
     *
     * NOTE: ugly form of string creation below is used for now because
     * using ?? inside template literals caused problems with code styling
     * inside VS Code (this part will be probably completely replaced
     * in next iteration, so it's temporary solution)
     */
    const badges = [
      {
        id: 1,
        type: 'warning',
        children: 'Cheapest',
      },
      {
        id: 2,
        type: 'neutral',
        children: 'Wi-fi',
      },
    ];
    const priceObject = {
      amount: price?.amount ?? 0,
      currency: price?.currency ?? 'CZK',
      locale: 'cs-CZ',
    };
    // @TODO: use Card component
    const duration =
      this.intervalToString(
        this.getSectorBorderDuration(data.route, sectorBorderIndex),
        'days',
      ) ?? '';
    const hasReturnFlight = sectorBorderIndex != null && sectorBorderIndex > 0;
    return (
      <View style={styles.card}>
        <ConnectionCard
          wayForth={this.getSector(sanitizedRoute, 0, sectorBorderIndex)}
          wayBack={
            hasReturnFlight
              ? this.getSector(sanitizedRoute, 1, sectorBorderIndex)
              : undefined
          }
          badges={badges}
          price={priceObject}
          duration={hasSectorBorder ? duration : ''}
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  ResultListItem,
  graphql`
    fragment ResultsListItem on Itinerary {
      price {
        currency
        amount
      }
      route {
        airline
        arrival {
          city
          cityCode
          localTime
          utcTime
        }
        departure {
          city
          cityCode
          localTime
          utcTime
        }
        id
      }
      routes
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
