// @flow

/* eslint-disable relay/unused-fields */ // latitude & longitude are used by Polyline

import * as React from 'react';
import { MapView } from '@kiwicom/margarita-map';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import stringify from 'json-stable-stringify';

import type { DrawSegmentLine as SegmentType } from './__generated__/DrawSegmentLine.graphql';

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

export default createFragmentContainer(
  DrawSegmentLine,
  graphql`
    fragment DrawSegmentLineStopCoordinates on RouteStop {
      stop {
        coordinates {
          latitude: lat
          longitude: lng
        }
      }
    }
    fragment DrawSegmentLine on Sector {
      segments {
        departure {
          ...DrawSegmentLineStopCoordinates @relay(mask: false)
        }
        arrival {
          ...DrawSegmentLineStopCoordinates @relay(mask: false)
        }
      }
    }
  `,
);
