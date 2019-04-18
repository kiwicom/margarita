// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { Separator } from '@kiwicom/margarita-components';
import { StyleSheet } from '@kiwicom/universal-components';

import SectorInfo from './SectorInfo';
import type { SectorInfoMulticity_data as BookingType } from './__generated__/SectorInfoMulticity_data.graphql';

type Props = {|
  +data: ?BookingType,
|};

function SectorInfoMulticity(props: Props) {
  const trips = props.data?.sectors ?? [];
  return trips.map((trip, index) => (
    <React.Fragment key={index}>
      <SectorInfo data={trip} />
      {index !== trips.length - 1 && <Separator style={styles.separator} />}
    </React.Fragment>
  ));
}

const styles = StyleSheet.create({
  separator: {
    marginHorizontal: -18,
    marginVertical: 8,
  },
});

export default createFragmentContainer(SectorInfoMulticity, {
  data: graphql`
    fragment SectorInfoMulticity_data on MulticityInterface {
      sectors {
        ...SectorInfo_data
      }
    }
  `,
});
