// @flow strict

import * as React from 'react';
import { View } from 'react-native';
import * as DateFNS from 'date-fns';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  ConnectionCard,
  type TripSegmentWithId,
} from '@kiwicom/margarita-components';

import type { ResultsListItem as ResultsListItemType } from './__generated__/ResultsListItem.graphql';

type Props = {|
  +data: ResultsListItemType,
|};

export type Route = $PropertyType<ResultsListItemType, 'route'>;
export type RouteItem = $ElementType<$NonMaybeType<Route>, number>; // number because arrays are number-indexed

// @TODO get from config
const dateFormat = 'ddd D MMM';

class ResultListItem extends React.Component<Props> {
  parseDate = (date: ?Date) => {
    if (date) return DateFNS.parse(date);
    return null;
  };

  // @TODO Handle cases when we don't have some data from GraphQL/REST server
  getSanitizedRouteItem = (routeItem: RouteItem) => {
    const timeSimpleFormat = 'H:mm';

    const localArrival = this.parseDate(routeItem?.arrival?.localTime);
    const localDeparture = this.parseDate(routeItem?.departure?.localTime);
    const utcArrival = this.parseDate(routeItem?.arrival?.utcTime);
    const utcDeparture = this.parseDate(routeItem?.departure?.utcTime);
    const duration =
      routeItem &&
      `${DateFNS.differenceInHours(
        utcArrival,
        utcDeparture,
      )}h ${DateFNS.differenceInMinutes(utcArrival, utcDeparture) % 60}m`;

    return {
      arrival: (routeItem && routeItem.arrival?.city) ?? null,
      arrivalTime:
        (localArrival && DateFNS.format(localArrival, timeSimpleFormat)) ??
        null,
      carrier: { code: (routeItem && routeItem.airline) ?? null, name: null }, // @TODO: get name of the airline
      tripDate:
        (localDeparture && DateFNS.format(localDeparture, dateFormat)) ?? null,
      departure: (routeItem && routeItem.departure?.city) ?? null,
      departureTime:
        (localDeparture && DateFNS.format(localDeparture, timeSimpleFormat)) ??
        null,
      duration: duration ?? null,
      id: (routeItem && routeItem.id) ?? null,
    };
  };

  getSectorBorderIndex = () => {
    const { route, routes } = this.props.data;
    const isOneWay = routes != null && routes.length < 2;
    if (!route || isOneWay) {
      return null;
    }
    return route.findIndex(
      routeItem => routeItem?.departure?.cityCode === routes?.[1]?.[0],
    );
  };

  // @TODO: make ConnectionCard more universal (not only for forth and back routes)
  getSanitizedRoute = (): Array<TripSegmentWithId> => {
    const { route } = this.props.data;
    if (route) {
      return route.map((routeItem: RouteItem) =>
        this.getSanitizedRouteItem(routeItem),
      );
    }
    return [];
  };

  getSector = (
    sanitizeRoute: Array<TripSegmentWithId>,
    demandedSector: number,
    sectorBorderIndex: ?number,
  ): Array<TripSegmentWithId> => {
    if (sectorBorderIndex != null) {
      if (demandedSector === 0) {
        return sanitizeRoute.slice(0, sectorBorderIndex);
      }
      return sanitizeRoute.slice(sectorBorderIndex);
    }
    return sanitizeRoute;
  };

  getDurationBetweenSectors = (route: ?Route, sectorBorderIndex: ?number) => {
    if (route && sectorBorderIndex != null && sectorBorderIndex > 0) {
      const stopBeforeSector = route[sectorBorderIndex - 1];
      const stopAfterSector = route[sectorBorderIndex];
      const utcDeparture = this.parseDate(stopAfterSector?.departure?.utcTime);
      const utcArrival = this.parseDate(stopBeforeSector?.arrival?.utcTime);
      return DateFNS.distanceInWords(utcDeparture, utcArrival);
    }
    return null;
  };

  render() {
    const { data } = this.props;
    if (data == null) {
      return null;
    }

    const sanitizedRoute = this.getSanitizedRoute();
    const sectorBorderIndex = this.getSectorBorderIndex();
    const hasSectorBorder = sectorBorderIndex != null && sectorBorderIndex > -1;
    const { price } = data;

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

    const duration =
      this.getDurationBetweenSectors(data.route, sectorBorderIndex) ?? '';
    const hasReturnFlight = sectorBorderIndex != null && sectorBorderIndex > 0;
    const renderDuration = hasSectorBorder ? duration : '';

    // @TODO: use Card component
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
          duration={renderDuration}
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
