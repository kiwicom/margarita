// @flow

import * as React from 'react';
import { MapView } from '@kiwicom/margarita-map';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import stringify from 'json-stable-stringify';

import type { DrawSegmentLine_data as SegmentType } from './__generated__/DrawSegmentLine_data.graphql';

type Props = {|
  +data: ?SegmentType,
  +color: string,
|};

const DrawSegmentLine = (props: Props) => {
  const segments = props.data?.segments ?? [];
  return segments.map(segment => {
    const coordinates = [
      { ...segment?.departure?.stop?.coordinates },
      { ...segment?.arrival?.stop?.coordinates },
    ];
    return (
      <MapView.Polyline
        key={stringify(coordinates)}
        coordinates={coordinates}
        strokeColor={props.color}
        strokeWidth={1.5}
      />
    );
  });
};

/* eslint-disable */
graphql`
  fragment DrawSegmentLine_coordinates on RouteStop @relay(mask: false) {
    stop {
      coordinates {
        latitude: lat
        longitude: lng
      }
    }
  }
`;
/* eslint-enable */

export default createFragmentContainer(DrawSegmentLine, {
  data: graphql`
    fragment DrawSegmentLine_data on Sector {
      segments {
        departure {
          ...DrawSegmentLine_coordinates @relay(mask: false)
        }
        arrival {
          ...DrawSegmentLine_coordinates @relay(mask: false)
        }
      }
    }
  `,
});
