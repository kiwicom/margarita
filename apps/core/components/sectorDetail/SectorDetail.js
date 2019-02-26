// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { Text } from '@kiwicom/universal-components';

import type { SectorDetail as SectorType } from './__generated__/SectorDetail.graphql';

type Props = {|
  +data: ?SectorType,
|};

const SectorDetail = (props: Props) => {
  return (
    <>
      <Text>To {props.data?.arrival?.stop?.city?.name}</Text>
      <Text>TODO - segments info</Text>
    </>
  );
};

export default createFragmentContainer(
  SectorDetail,
  graphql`
    fragment SectorDetail on Sector {
      arrival {
        stop {
          city {
            name
          }
        }
      }
    }
  `,
);
