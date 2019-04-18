// @flow

import * as React from 'react';
import { Card, StyleSheet } from '@kiwicom/universal-components';
import { Separator, BookingTypeRenderer } from '@kiwicom/margarita-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';

import Header from './Header';
import SectorInfoOneWay from '../../../components/sectorInfo/SectorInfoOneWay';
import SectorInfoMulticity from '../../../components/sectorInfo/SectorInfoMulticity';
import SectorInfoReturn from '../../../components/sectorInfo/SectorInfoReturn';
import SegmentContainer from './segments/SegmentContainer';
import type { SectorDetails_data as BookingType } from './__generated__/SectorDetails_data.graphql';

type Props = {|
  +data: ?BookingType,
|};

function SectorDetails(props: Props) {
  const type = props.data?.__typename;
  return (
    <Card style={styles.card}>
      <View style={styles.cardPaddingContainer}>
        <Header data={props.data} />
        <Separator style={styles.separator} />
        <BookingTypeRenderer
          type={type}
          oneWayComponent={<SectorInfoOneWay data={props.data} />}
          returnComponent={<SectorInfoReturn data={props.data} />}
          multicityComponent={<SectorInfoMulticity data={props.data} />}
        />
      </View>
      <Separator style={styles.bottomSeparator} />
      <SegmentContainer data={props.data} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: defaultTokens.paletteInkLighter,
    paddingBottom: 0,
  },
  cardPaddingContainer: {
    paddingHorizontal: 18,
  },
  separator: {
    marginTop: 7,
    marginBottom: 17.5,
  },
  bottomSeparator: {
    marginTop: 16,
  },
});

export default createFragmentContainer(SectorDetails, {
  data: graphql`
    fragment SectorDetails_data on BookingInterface {
      __typename
      ...SectorInfoOneWay_data
      ...SectorInfoReturn_data
      ...SectorInfoMulticity_data
      ...Header_data
      ...SegmentContainer_data
    }
  `,
});
