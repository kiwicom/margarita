// @flow

import * as React from 'react';
import { MapView } from '@kiwicom/margarita-map';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { getCenter } from 'geolib';
import memoize from 'memoize-one';
import { uniqBy, prop } from 'ramda';

import type { SegmentMap_data as BookingType } from './__generated__/SegmentMap_data.graphql';
import MapLines from './MapLines';
import SegmentMapMarker from './SegmentMapMarker';

type Props = {|
  +data: ?BookingType,
|};

type MarkerData = {|
  +latitude: ?number,
  +longitude: ?number,
  +name: ?string,
  +locationId: string,
|};

type CompareByType = {|
  +locationId: string,
|};

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

const mapMarkerData = memoize((props: Props) => {
  switch (props.data?.type) {
    case 'BOOKING_ONE_WAY':
      return mapSegmentsToMarkerData(props.data?.sector?.segments);
    case 'BOOKING_RETURN':
      return mapSegmentsToMarkerData(getReturnSegments(props));
    case 'BOOKING_MULTICITY':
      return mapSegmentsToMarkerData(getMulticitySegments(props));
    default:
      return null;
  }
});

const getReturnSegments = (props: Props) => {
  const outbound = props.data?.outbound?.segments ?? [];
  const inbound = props.data?.inbound?.segments ?? [];
  return [...outbound, ...inbound];
};

const getMulticitySegments = (props: Props) => {
  const sectors = props.data?.sectors ?? [];
  return sectors.reduce((acc, curr) => {
    const segments = curr?.segments ?? [];
    return [...acc, ...segments];
  }, []);
};

const mapSegmentsToMarkerData = segments => {
  if (segments == null) {
    return [];
  }
  const bookingSegments = segments.reduce((acc, curr) => {
    return [
      ...acc,
      {
        ...curr?.departure?.stop?.coordinates,
        name: curr?.departure?.stop?.city?.name,
        locationId: curr?.departure?.stop?.locationId ?? '',
      },
      {
        ...curr?.arrival?.stop?.coordinates,
        name: curr?.arrival?.stop?.city?.name,
        locationId: curr?.arrival?.stop?.locationId ?? '',
      },
    ];
  }, []);

  return uniqBy<MarkerData, CompareByType>(
    prop<string, MarkerData>('locationId'),
    bookingSegments,
  );
};

// eslint-disable-next-line relay/generated-flow-types
export class SegmentMap extends React.Component<Props> {
  map: ?React.Ref<typeof MapView>;

  setRef = (ref: ?React.Ref<typeof MapView>) => {
    this.map = ref;
  };

  getMarkerData = () => mapMarkerData(this.props);

  fit = () => {
    if (this.map != null) {
      // $FlowExpectedError: fitToCoordinates does exist on map, but flow is confused by .native|.web exports
      this.map.fitToCoordinates(this.getMarkerData(), {
        edgePadding: DEFAULT_PADDING,
      });
    }
  };

  render() {
    const locations = this.getMarkerData() ?? [];
    const center = getCenter(this.getMarkerData());
    return (
      <MapView
        ref={this.setRef}
        style={styles.mapView}
        initialRegion={{
          latitude: parseFloat(center.latitude),
          longitude: parseFloat(center.longitude),
          latitudeDelta: 1,
          longitudeDelta: 1,
        }}
        zoomEnabled={false}
        rotateEnabled={false}
        pitchEnabled={false}
        onMapReady={this.fit}
      >
        {locations.map(location => (
          <SegmentMapMarker
            key={location?.locationId}
            latitude={location?.latitude}
            longitude={location?.longitude}
            name={location?.name}
          />
        ))}
        <MapLines data={this.props.data} />
      </MapView>
    );
  }
}

const styles = StyleSheet.create({
  mapView: {
    flex: 1,
    height: 200,
  },
});

/* eslint-disable */
graphql`
  fragment SegmentMap_segmentMapStop on RouteStop @relay(mask: false) {
    stop {
      locationId
      city {
        name
      }
      coordinates {
        latitude: lat
        longitude: lng
      }
    }
  }
`;

graphql`
  fragment SegmentMap_segmentMapSegment on Sector @relay(mask: false) {
    segments {
      arrival {
        ...SegmentMap_segmentMapStop @relay(mask: false)
      }
      departure {
        ...SegmentMap_segmentMapStop @relay(mask: false)
      }
    }
  }
`;
/* eslint-enable */

export default createFragmentContainer(SegmentMap, {
  data: graphql`
    fragment SegmentMap_data on BookingInterface {
      ...MapLines_data
      type
      ... on BookingOneWay {
        sector {
          ...SegmentMap_segmentMapSegment @relay(mask: false)
        }
      }
      ... on BookingReturn {
        inbound {
          ...SegmentMap_segmentMapSegment @relay(mask: false)
        }
        outbound {
          ...SegmentMap_segmentMapSegment @relay(mask: false)
        }
      }
      ... on BookingMulticity {
        sectors {
          ...SegmentMap_segmentMapSegment @relay(mask: false)
        }
      }
    }
  `,
});
