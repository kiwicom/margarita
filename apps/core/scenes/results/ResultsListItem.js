// @flow strict

import * as React from 'react';
import { DateTime, Duration } from 'luxon';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { ConnectionCard } from '@kiwicom/universal-components';

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

export type Routes = $PropertyType<ResultsListItemType, 'routes'>;
export type Route = $ElementType<$NonMaybeType<Routes>, number>; // number because arrays are number-indexed

const dateFormat = 'ccc d LLL';

class ResultListItem extends React.Component<Props> {
  getDateTimeInterval = (to: DateTime, from: DateTime) => {
    return to.diff(from, ['hours', 'minutes']).toObject();
  };

  intervalToString = (interval: Duration) => {
    return `${interval.hours}h${
      interval.minutes ? ' ' + interval.minutes + 'm' : ''
    }`;
  };

  getRoute = (route: Route): ?TripSectorProps => {
    const localArrival = route && DateTime.fromISO(route.localArrival);
    const localDeparture = route && DateTime.fromISO(route.localDeparture);
    const utcArrival = route && DateTime.fromISO(route.utcArrival);
    const utcDeparture = route && DateTime.fromISO(route.utcDeparture);
    return (
      route && {
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
      }
    );
  };

  getRoutes = (): ?Array<?TripSectorProps> => {
    const { routes } = this.props.data;
    return routes && routes.map(this.getRoute);
  };

  render() {
    const { data } = this.props;
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
    return (
      <ConnectionCard
        wayForth={this.getRoutes()}
        badges={badges}
        price={priceObject}
      />
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
      routes {
        airline
        cityFrom
        cityTo
        id
        localArrival
        utcArrival
        localDeparture
        utcDeparture
      }
    }
  `,
);
