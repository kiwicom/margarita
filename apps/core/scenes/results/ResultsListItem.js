// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import { DateTime, Duration } from 'luxon';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { ConnectionCard, StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

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

  intervalToString = (interval: Duration, type: 'days' | 'hours' = 'hours') => {
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
      const localArrival = DateTime.fromISO(route.localArrival);
      const localDeparture = DateTime.fromISO(route.localDeparture);
      const utcArrival = DateTime.fromISO(route.utcArrival);
      const utcDeparture = DateTime.fromISO(route.utcDeparture);
      return {
        arrival: route.cityTo ?? '',
        arrivalTime:
          (localArrival && localArrival.toLocaleString(DateTime.TIME_SIMPLE)) ??
          '',
        carrier: { code: route.airline ?? '', name: '' }, // @TODO: get name of the airline
        tripDate: (localDeparture && localDeparture.toFormat(dateFormat)) ?? '',
        departure: route.cityFrom ?? '',
        departureTime:
          (localDeparture &&
            localDeparture.toLocaleString(DateTime.TIME_SIMPLE)) ??
          '',
        duration: this.intervalToString(
          this.getDateTimeInterval(utcArrival, utcDeparture),
        ),
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
    // @TODO polish awful condition if it's possible
    return route.findIndex(
      routeItem =>
        routeItem &&
        routes &&
        routes.length === 2 &&
        routes[1] &&
        routeItem.flyFrom === routes[1][0],
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
    if (demandedSector === null || sectorBorderIndex === null) {
      return route;
    }
    if (demandedSector === 0) {
      return route.slice(0, sectorBorderIndex);
    }
    return route.slice(sectorBorderIndex);
  };

  getSectorBorderDuration = (route: ?Route, sectorBorderIndex: ?number) => {
    if (
      route &&
      sectorBorderIndex !== null &&
      sectorBorderIndex !== undefined &&
      sectorBorderIndex >= 0
    ) {
      const stopBeforeSector = route[sectorBorderIndex - 1];
      const stopAfterSector = route[sectorBorderIndex];

      const utcDeparture =
        stopAfterSector && DateTime.fromISO(stopAfterSector.utcDeparture);
      const utcArrival =
        stopBeforeSector && DateTime.fromISO(stopBeforeSector.utcArrival);
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
    if (data == null) {
      return null;
    }
    const { currency, price } = data;
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
      value: price ?? 0,
      currency: currency ?? 'CZK',
      locale: 'cs-CZ',
    };
    // @TODO: use Card component
    return (
      <View style={styles.card}>
        <ConnectionCard
          wayForth={this.getSector(sanitizedRoute, 0, sectorBorderIndex)}
          wayBack={this.getSector(sanitizedRoute, 1, sectorBorderIndex)}
          badges={badges}
          price={priceObject}
          duration={
            sectorBorderIndex !== null &&
            sectorBorderIndex !== undefined &&
            sectorBorderIndex > -1 &&
            this.intervalToString(
              this.getSectorBorderDuration(data.route, sectorBorderIndex),
              'days',
            )
          }
        />
      </View>
    );
  }
}

export default createFragmentContainer(
  ResultListItem,
  graphql`
    fragment ResultsListItem on Itinerary {
      currency
      price
      localDeparture
      localArrival
      route {
        airline
        cityFrom
        cityTo
        flyFrom
        id
        localArrival
        utcArrival
        localDeparture
        utcDeparture
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
