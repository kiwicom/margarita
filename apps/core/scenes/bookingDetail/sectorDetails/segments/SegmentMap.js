// @flow

import * as React from 'react';
import { MapView } from '@kiwicom/margarita-map';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { getCenter } from 'geolib';
import memoize from 'memoize-one';
import stringify from 'json-stable-stringify';

import type { SegmentMap as BookingType } from './__generated__/SegmentMap.graphql';

type Props = {|
  +data: ?BookingType,
|};

const DEFAULT_PADDING = { top: 40, right: 40, bottom: 40, left: 40 };

const mapCoordinates = memoize(
  (segmentLocations: ?$PropertyType<BookingType, 'segmentLocations'>) => {
    const coordinates = segmentLocations ?? [];
    return coordinates.map(coordinate => ({
      latitude: coordinate?.lat,
      longitude: coordinate?.lng,
    }));
  },
);

class SegmentMap extends React.Component<Props> {
  map: ?React.Ref<typeof MapView>;

  setRef = (ref: ?React.Ref<typeof MapView>) => {
    this.map = ref;
  };

  getMappedCoordinates = () => {
    return mapCoordinates(this.props.data?.segmentLocations);
  };

  fit = () => {
    if (this.map != null) {
      // $FlowExpectedError: fitToCoordinates does exist on map, but flow is confused by .native|.web exports
      this.map.fitToCoordinates(this.getMappedCoordinates(), {
        edgePadding: DEFAULT_PADDING,
      });
    }
  };

  render() {
    const coordinates = this.props.data?.segmentLocations ?? [];
    const center = getCenter(this.getMappedCoordinates());
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
        onMapReady={this.fit}
      >
        {/* TODO: This should be improved with lines and arrows indicating to from */}
        {coordinates.map(coordinate => (
          <MapView.Marker
            key={stringify(coordinate)}
            coordinate={{
              latitude: coordinate?.lat,
              longitude: coordinate?.lng,
            }}
          />
        ))}
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

export default createFragmentContainer(
  SegmentMap,
  graphql`
    fragment SegmentMap on BookingInterface {
      segmentLocations {
        lat
        lng
      }
    }
  `,
);
