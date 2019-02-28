// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { type StylePropType, Text } from '@kiwicom/universal-components';

import { getFormattedDate } from './TripSectorHelpers';
import type { LocalTime_data as LocalTimeType } from './__generated__/LocalTime_data.graphql';

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

export default createFragmentContainer(LocalTime, {
  data: graphql`
    fragment LocalTime_data on RouteStop {
      time {
        local
      }
    }
  `,
});
