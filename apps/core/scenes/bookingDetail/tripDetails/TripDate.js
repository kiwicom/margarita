// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { Text } from '@kiwicom/universal-components';
import format from 'date-fns/format';

import type { TripDate as BookingType } from './__generated__/TripDate.graphql';

type Props = {|
  +data: ?BookingType,
  +type: 'date' | 'time',
|};

const DATE_FORMAT = 'ddd MM/DD';
const TIME_FORMAT = 'HH:mm';

const TripDate = (props: Props) => {
  const departureDate = props.data?.time?.local;

  if (departureDate == null) {
    return null;
  }

  const isDateType = props.type === 'date';
  const typeFormat = isDateType ? DATE_FORMAT : TIME_FORMAT;
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
