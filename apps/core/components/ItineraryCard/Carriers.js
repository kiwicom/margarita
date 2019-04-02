// @flow

import * as React from 'react';
import { Platform } from 'react-native';
import { CarrierLogo } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { uniq } from 'ramda';

import type { Carriers_data as CarriersType } from './__generated__/Carriers_data.graphql';

type SegmentsType = $PropertyType<CarriersType, 'segments'>;

type Props = {|
  +data: ?CarriersType,
|};

const mapCarriers = (segments: SegmentsType) => {
  const carriers =
    segments &&
    uniq(
      segments.map(segment => ({
        name: segment?.carrier?.name,
        code: segment?.carrier?.code,
      })),
    );

  return carriers;
};

function Carriers({ data }: Props) {
  const carriers = mapCarriers(data?.segments);

  if (carriers == null) {
    return null;
  }

  return (
    <CarrierLogo
      size={Platform.OS === 'web' ? 'large' : 'medium'}
      carriers={carriers}
    />
  );
}

export default createFragmentContainer(Carriers, {
  data: graphql`
    fragment Carriers_data on Sector {
      segments {
        carrier {
          name
          code
        }
      }
    }
  `,
});
