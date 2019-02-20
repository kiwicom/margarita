// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { SectorInfo as BookingType } from './__generated__/SectorInfo.graphql';
import FromTo from '../../../components/fromTo/FromTo';
import FromToWrapper from '../../../components/fromTo/FromToWrapper';
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

export default createFragmentContainer(
  SectorInfo,
  graphql`
    fragment SectorInfo on Sector {
      ...FromTo
      ...SectorDates
    }
  `,
);
