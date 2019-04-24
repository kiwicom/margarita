// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import {
  TimelineTransportDetail,
  TimelineDate,
} from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { LONG_DAY_MONTH_FORMAT } from '@kiwicom/margarita-config';
import { formatDate } from '@kiwicom/margarita-utils';

import SegmentStopInfo from './SegmentStopInfo';
import { mockCarrierData } from './SegmentConstants';
import type { Segment_data as SegmentType } from './__generated__/Segment_data.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const Segment = (props: Props) => {
  const formattedDate = formatDate(
    props.data?.departure?.time?.local,
    LONG_DAY_MONTH_FORMAT,
  );
  return (
    <View>
      {formattedDate && (
        <TimelineDate
          formattedDate={formattedDate}
          containerStyle={styles.timelineDate}
        />
      )}
      <SegmentStopInfo data={props.data?.departure} typeLabel="Departure" />
      <TimelineTransportDetail
        carrier={{
          code: props.data?.carrier?.code,
          name: props.data?.carrier?.name,
          type: 'airline', // @TODO - mock value, carrier_type value is not returned from api yet
        }}
        additionalInfo={mockCarrierData} // @TODO - mock data, values are not returned from api yet
        duration={props.data?.duration}
      />
      <SegmentStopInfo data={props.data?.arrival} typeLabel="Arrival" />
    </View>
  );
};

const styles = StyleSheet.create({
  timelineDate: {
    marginHorizontal: parseInt(defaultTokens.spaceXSmall, 10),
    marginBottom: parseInt(defaultTokens.spaceXXSmall, 10),
  },
});

export default createFragmentContainer(Segment, {
  data: graphql`
    fragment Segment_data on Segment {
      duration
      arrival {
        ...SegmentStopInfo_data
      }
      departure {
        time {
          local
        }
        ...SegmentStopInfo_data
      }
      carrier {
        name
        code
      }
    }
  `,
});
