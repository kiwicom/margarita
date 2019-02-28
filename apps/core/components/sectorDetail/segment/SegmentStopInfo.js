// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import SegmentStopInfoRow from './SegmentStopInfoRow';
import { getFormattedDate } from '../../ItineraryCard/TripSectorHelpers';
import type { SegmentStopInfo as RouteStopType } from './__generated__/SegmentStopInfo.graphql';

type Props = {|
  +data: ?RouteStopType,
  +typeLabel: string,
|};

const SegmentStopInfo = (props: Props) => {
  return (
    <View style={styles.container}>
      <SegmentStopInfoRow
        iconName="location"
        infoLabel={props.data?.stop?.locationId}
        infoText={props.data?.stop?.name}
        infoTextWeight="bold"
      />
      <SegmentStopInfoRow
        iconName="clock"
        infoLabel={props.typeLabel}
        infoText={getFormattedDate(props.data?.time?.local)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default createFragmentContainer(
  SegmentStopInfo,
  graphql`
    fragment SegmentStopInfo on RouteStop {
      time {
        local
      }
      stop {
        name
        locationId
      }
    }
  `,
);
