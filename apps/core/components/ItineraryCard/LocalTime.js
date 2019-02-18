// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { type StylePropType, Text } from '@kiwicom/universal-components';

import { getFormattedDate } from './TripSectorHelpers';
import type { LocalTime as LocalTimeType } from './__generated__/LocalTime.graphql';

type Props = {|
  +data: ?LocalTimeType,
  +dateFormat?: ?string,
  +style?: StylePropType,
|};

function LocalTime({ data, dateFormat, style }: Props) {
  return (
    <Text style={style} numberOfLines={1}>
      {getFormattedDate(data?.time?.local, dateFormat)}
    </Text>
  );
}

export default createFragmentContainer(
  LocalTime,
  graphql`
    fragment LocalTime on RouteStop {
      time {
        local
      }
    }
  `,
);
