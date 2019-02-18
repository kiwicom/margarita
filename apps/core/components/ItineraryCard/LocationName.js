// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { type StylePropType, Text } from '@kiwicom/universal-components';

import type { LocationName as LocationNameType } from './__generated__/LocationName.graphql';

type Props = {|
  +data: ?LocationNameType,
  +style?: StylePropType,
|};

function LocationName({ data, style }: Props) {
  return (
    <Text style={style} numberOfLines={1}>
      {data?.cityName}
    </Text>
  );
}

export default createFragmentContainer(
  LocationName,
  graphql`
    fragment LocationName on RouteStop {
      cityName
    }
  `,
);
