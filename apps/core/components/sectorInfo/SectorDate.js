// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { Text } from '@kiwicom/universal-components';
import {
  HOURS_MINUTES_FORMAT,
  DAY_MONTH_DATE_FORMAT,
} from '@kiwicom/margarita-config';
import { formatDate } from '@kiwicom/margarita-utils';

import type { SectorDate_data as BookingType } from './__generated__/SectorDate_data.graphql';

type Props = {|
  +data: ?BookingType,
  +type: 'date' | 'time',
|};

const SectorDate = (props: Props) => {
  const departureDate = props.data?.time?.local;

  if (departureDate == null) {
    return null;
  }

  const isDateType = props.type === 'date';
  const typeFormat = isDateType ? DAY_MONTH_DATE_FORMAT : HOURS_MINUTES_FORMAT;
  const textSize = isDateType ? 'normal' : 'small';
  const textType = isDateType ? 'primary' : 'secondary';

  return (
    <Text size={textSize} type={textType}>
      {formatDate(departureDate, typeFormat)}
    </Text>
  );
};

export default createFragmentContainer(SectorDate, {
  data: graphql`
    fragment SectorDate_data on RouteStop {
      time {
        local
      }
    }
  `,
});
