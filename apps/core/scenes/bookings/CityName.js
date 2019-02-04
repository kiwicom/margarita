// @flow

import * as React from 'react';
import { Text } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';

import type { CityName as CityNameType } from './__generated__/CityName.graphql';

type Props = {|
  +data: ?CityNameType,
|};

const CityName = (props: Props) => (
  <Text type="white">{props.data?.cityName}</Text>
);

export default createFragmentContainer(
  CityName,
  graphql`
    fragment CityName on RouteStop {
      cityName
    }
  `,
);
