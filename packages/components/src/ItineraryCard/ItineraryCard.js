// @flow

import * as React from 'react';
import { View } from 'react-native';
import {
  Badge,
  LocalizedPrice,
  StyleSheet,
} from '@kiwicom/universal-components';
import { formatPrice } from '@kiwicom/margarita-utils';
import * as DateFNS from 'date-fns';

import ItineraryCardRow from './ItineraryCardRow';
import type { Sector } from './ItineraryCardTypes';
import BadgesContainer from './BadgesContainer';
import HorizontalDash from './HorizontalDash';
import TripSegment from './TripSegment';

type Props = {|
  +padding?: boolean,
  +sectors?: ?Array<Sector>,
  +collapsedSectors?: boolean,
  +duration?: string,
  ...React.ElementProps<typeof BadgesContainer>,
  +price: {|
    +amount: number,
    +currency: string,
  |},
|};

const SectorBorder = ({
  sectors,
  sector,
  sectorIndex,
  segment,
  segmentIndex,
}) => {
  const showSectorBorder =
    sectors &&
    segmentIndex + 1 === sector.segments?.length &&
    sectorIndex !== sectors.length - 1;

  return (
    showSectorBorder && (
      <ItineraryCardRow>
        <View style={styles.leftShift}>
          <Badge type="neutral">
            Returns in{' '}
            {getDuration(
              segment.departureTime?.utc,
              sectors[sectorIndex + 1].segments?.[0].arrivalTime?.utc,
            )}
          </Badge>
        </View>
      </ItineraryCardRow>
    )
  );
};

const CollapsedSector = ({ sectors, sector, sectorIndex, collapsed }) => {
  if (!sector) {
    return null;
  }
  const firstSegment = sector.segments?.[0];
  const lastSegment =
    sector.segments && sector.segments[sector.segments.length - 1];
  return (
    <>
      <ItineraryCardRow>
        {
          <TripSegment
            segment={{
              arrivalTime: lastSegment?.departureTime,
              departureTime: firstSegment?.departureTime,
              destination: { ...sector.destination },
              duration: sector.duration,
              id: null,
              origin: { ...sector.origin },
              transporter: sector.segments
                ? sector.segments.map(segment => segment.transporter) // ?Transporter | ?Array<Transporter>,
                : null,
              vehicle:
                sector.segments &&
                sector.segments.map(segment => segment.vehicle),
            }}
          />
        }
      </ItineraryCardRow>
      {sector.segments &&
        sector.segments.map<React.Node>((segment, segmentIndex) => (
          <SectorBorder
            key={segment.id}
            sectors={sectors}
            sector={sector}
            sectorIndex={sectorIndex}
            segment={segment}
            segmentIndex={segmentIndex}
          />
        ))}
    </>
  );
};

const ExpandedSector = ({ sectors, sector, sectorIndex, collapsed }) => {
  if (!sector.segments) {
    return null;
  }
  return sector.segments.map<React.Node>((segment, segmentIndex) => (
    <React.Fragment key={segment.id}>
      <ItineraryCardRow>
        {segment && <TripSegment segment={segment} />}
      </ItineraryCardRow>
      <SectorBorder
        sectors={sectors}
        sector={sector}
        sectorIndex={sectorIndex}
        segment={segment}
        segmentIndex={segmentIndex}
      />
    </React.Fragment>
  ));
};

const RenderSector = props => {
  const { collapsed } = props;
  return (
    <View>
      {collapsed ? (
        <CollapsedSector {...props} />
      ) : (
        <ExpandedSector {...props} />
      )}
    </View>
  );
};

const getDuration = (arrivalTime, departureTime) => {
  return DateFNS.distanceInWords(departureTime, arrivalTime);
};
export default function ItineraryCard({
  collapsedSectors = false,
  sectors,
  price,
  badges,
}: Props) {
  return (
    <View>
      {sectors &&
        sectors.map<React.Node>((sector, sectorIndex) => (
          <RenderSector
            sectors={sectors}
            sector={sector}
            sectorIndex={sectorIndex}
            collapsed={collapsedSectors}
          />
        ))}
      <HorizontalDash />

      <ItineraryCardRow style={styles.lastRow}>
        <BadgesContainer badges={badges} />
        <LocalizedPrice localizedPrice={formatPrice(price)} />
      </ItineraryCardRow>
    </View>
  );
}
const styles = StyleSheet.create({
  lastRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 5,
    marginTop: 2,
  },
  leftShift: {
    paddingStart: 103,
  },
});
