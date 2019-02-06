// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { TripInfo as BookingType } from './__generated__/TripInfo.graphql';
import FromTo from '../../../components/fromTo/FromTo';

type Props = {|
  +data: ?BookingType,
|};

const TripInfo = (props: Props) => {
  return (
    <FromTo
      textType="attention"
      fontSize="large"
      iconColor={defaultTokens.colorIconSecondary}
      data={props.data}
      withFlags={true}
    />
  );
};

export default createFragmentContainer(
  TripInfo,
  graphql`
    fragment TripInfo on CustomerBooking {
      ...FromTo
    }
  `,
);
