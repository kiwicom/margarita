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

import SegmentStopInfo from './SegmentStopInfo';
import { mockTransporterData } from './SegmentConstants';
import {
  getFormattedDate,
  dateFormat,
} from '../../ItineraryCard/TripSectorHelpers';
import type { Segment_data as SegmentType } from './__generated__/Segment_data.graphql';

type Props = {|
  +data: ?SegmentType,
|};

const Segment = (props: Props) => {
  return (
    <View>
      <TimelineDate
        formattedDate={getFormattedDate(
          props.data?.departure?.time?.local,
          dateFormat,
        )}
        containerStyle={styles.timelineDate}
      />
      <SegmentStopInfo data={props.data?.departure} typeLabel="Departure" />
      <TimelineTransportDetail
        carrier={{
          code: props.data?.transporter?.name ?? '',
          name: 'Carrier name', // @TODO - mock value, value is not returned from api yet
          type: 'airline', // @TODO - mock value, carrier_type value is not returned from api yet
        }}
        additionalInfo={mockTransporterData} // @TODO - mock data, values are not returned from api yet
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
      transporter {
        name
      }
    }
  `,
});
