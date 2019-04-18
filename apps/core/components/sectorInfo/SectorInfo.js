// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { SectorInfo_data as BookingType } from './__generated__/SectorInfo_data.graphql';
import FromTo from '../fromTo/FromTo';
import FromToWrapper from '../fromTo/FromToWrapper';
import SectorDates from './SectorDates';

type Props = {|
  +data: ?BookingType,
|};

const SectorInfo = (props: Props) => {
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
      <SectorDates data={props.data} />
    </>
  );
};

export default createFragmentContainer(SectorInfo, {
  data: graphql`
    fragment SectorInfo_data on Sector {
      ...FromTo_data
      ...SectorDates_data
    }
  `,
});
