// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { Text } from '@kiwicom/universal-components';
import format from 'date-fns/format';
import {
  HOURS_MINUTES_FORMAT,
  DAY_MONTH_DATE_FORMAT,
} from '@kiwicom/margarita-config';

import type { TripDate as BookingType } from './__generated__/TripDate.graphql';

type Props = {|
  +data: ?BookingType,
  +type: 'date' | 'time',
|};

const TripDate = (props: Props) => {
  const departureDate = props.data?.time?.local;

  if (departureDate == null) {
    return null;
  }

  const isDateType = props.type === 'date';
  const typeFormat = isDateType ? DAY_MONTH_DATE_FORMAT : HOURS_MINUTES_FORMAT;
  const textSize = isDateType ? 'normal' : 'small';
  const textType = isDateType ? null : 'secondary';

  return (
    <Text size={textSize} type={textType}>
      {format(departureDate, typeFormat)}
    </Text>
  );
};

export default createFragmentContainer(
  TripDate,
  graphql`
    fragment TripDate on RouteStop {
      time {
        local
      }
    }
  `,
);
