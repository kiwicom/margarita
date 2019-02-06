// @flow

import * as React from 'react';

import ItineraryCardRow from './ItineraryCardRow';
import TripSegment from './TripSegment';
import SectorBorder from './SectorBorder';
import type { Sector } from './ItineraryCardTypes';

type Props = {|
  +sectors: ?$ReadOnlyArray<?Sector>,
  +sector: ?Sector,
  +sectorIndex: number,
|};

export default function CollapsedSector({
  sectors,
  sector,
  sectorIndex,
}: Props) {
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
              origin: { ...sector.origin },
              transporter: sector.transporters,
            }}
          />
        }
      </ItineraryCardRow>
      {sector.segments &&
        sector.segments.map<React.Node>((segment, segmentIndex) => (
          <SectorBorder
            sectors={sectors}
            sector={sector}
            sectorIndex={sectorIndex}
            segment={segment}
            segmentIndex={segmentIndex}
          />
        ))}
    </>
  );
}
