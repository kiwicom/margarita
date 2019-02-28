// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { type StylePropType, Text } from '@kiwicom/universal-components';

import type { LocationName_data as LocationNameType } from './__generated__/LocationName_data.graphql';

type Props = {|
  +data: ?LocationNameType,
  +style?: StylePropType,
|};

function LocationName({ data, style }: Props) {
  return (
    <Text style={style} numberOfLines={1}>
      {data?.stop?.city?.name}
    </Text>
  );
}

export default createFragmentContainer(LocationName, {
  data: graphql`
    fragment LocationName_data on RouteStop {
      stop {
        city {
          name
        }
      }
    }
  `,
});
