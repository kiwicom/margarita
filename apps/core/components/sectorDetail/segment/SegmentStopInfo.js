// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { formatDate } from '@kiwicom/margarita-utils';

import SegmentStopInfoRow from './SegmentStopInfoRow';
import type { SegmentStopInfo_data as RouteStopType } from './__generated__/SegmentStopInfo_data.graphql';

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
        infoText={formatDate(props.data?.time?.local)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default createFragmentContainer(SegmentStopInfo, {
  data: graphql`
    fragment SegmentStopInfo_data on RouteStop {
      time {
        local
      }
      stop {
        name
        locationId
      }
    }
  `,
});
