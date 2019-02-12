// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { TripInfo as BookingType } from './__generated__/TripInfo.graphql';
import FromTo from '../../../components/fromTo/FromTo';
import FromToWrapper from '../../../components/fromTo/FromToWrapper';
import TripDates from './TripDates';

type Props = {|
  +data: ?BookingType,
|};

const TripInfo = (props: Props) => {
  if (props.data == null) {
    return null;
  }
  return (
    <>
      <FromToWrapper>
        <FromTo
          textType="attention"
          fontSize="large"
          iconColor={defaultTokens.colorIconSecondary}
          data={props.data}
          withFlags={true}
        />
      </FromToWrapper>
      <TripDates data={props.data} />
    </>
  );
};

export default createFragmentContainer(
  TripInfo,
  graphql`
    fragment TripInfo on Trip {
      ...FromTo
      ...TripDates
    }
  `,
);
