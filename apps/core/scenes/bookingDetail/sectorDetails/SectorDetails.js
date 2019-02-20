// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { Separator, BookingTypeRenderer } from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Header from './Header';
import SectorInfoOneWay from './SectorInfoOneWay';
import SectorInfoMulticity from './SectorInfoMulticity';
import SectorInfoReturn from './SectorInfoReturn';
import SegmentContainer from './segments/SegmentContainer';
import type { SectorDetails as BookingType } from './__generated__/SectorDetails.graphql';

type Props = {|
  +data: ?BookingType,
|};

function SectorDetails(props: Props) {
  const type = props.data?.type;
  return (
    <Card style={styles.card}>
      <Header data={props.data} />
      <Separator style={styles.separator} />
      <BookingTypeRenderer
        type={type}
        oneWayComponent={<SectorInfoOneWay data={props.data} />}
        returnComponent={<SectorInfoReturn data={props.data} />}
        multicityComponent={<SectorInfoMulticity data={props.data} />}
      />
      <Separator style={styles.bottomSeparator} />
      <SegmentContainer />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 18,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: defaultTokens.paletteInkLighter,
    paddingBottom: 0,
  },
  separator: {
    marginTop: 7,
    marginBottom: 17.5,
  },
  bottomSeparator: {
    marginHorizontal: -18,
    marginTop: 16,
  },
});

export default createFragmentContainer(
  SectorDetails,
  graphql`
    fragment SectorDetails on BookingInterface {
      ...Header
      ...SectorInfoOneWay
      ...SectorInfoMulticity
      ...SectorInfoReturn
      type
    }
  `,
);
