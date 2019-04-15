// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { View, Platform } from 'react-native';
import { StyleSheet, designTokens } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  withLayoutContext,
  LAYOUT,
  type LayoutContextState,
} from '@kiwicom/margarita-device';
import { Duration } from '@kiwicom/margarita-components';
import { LONG_DAY_MONTH_FORMAT } from '@kiwicom/margarita-config';

import type { TripSector_data as TripSectorType } from './__generated__/TripSector_data.graphql';
import TimelineArrow from './TimelineArrow';
import Carriers from './Carriers';
import FlightTimes from './FlightTimes';
import LocalTime from './LocalTime';
import TripCities from './TripCities';

type Props = {|
  +data: ?TripSectorType,
  +layout: number,
|};

function TripSector({ data, layout }: Props) {
  const wideLayout = layout >= LAYOUT.largeMobile;
  return (
    <View style={styles.container}>
      <View style={styles.carrierLogo}>
        <Carriers data={data} />
      </View>
      <View style={styles.tripItems}>
        <View
          style={[styles.leftSection, wideLayout && styles.leftSectionWide]}
        >
          <FlightTimes data={data} />
          {Platform.OS !== 'web' && <TimelineArrow />}
          <TripCities data={data} />
        </View>
        <View
          style={[styles.rightSection, wideLayout && styles.rightSectionWide]}
        >
          <LocalTime
            data={data?.departure}
            dateFormat={LONG_DAY_MONTH_FORMAT}
            style={[styles.infoText, styles.dateText]}
          />
          <Duration
            style={[styles.infoText, styles.durationText]}
            showIcon={false}
            duration={data?.duration}
          />
        </View>
      </View>
    </View>
  );
}

const layoutSelect = ({ layout }: LayoutContextState) => ({
  layout,
});

export default createFragmentContainer(
  withLayoutContext(layoutSelect)(TripSector),
  {
    data: graphql`
      fragment TripSector_data on Sector {
        duration
        ...FlightTimes_data
        ...TripCities_data
        departure {
          ...LocalTime_data
        }
        ...Carriers_data
      }
    `,
  },
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 70,
    web: {
      height: 'auto',
    },
  },
  carrierLogo: {
    paddingEnd: parseInt(defaultTokens.spaceMedium, 10),
    web: {
      paddingEnd: 30,
    },
  },
  tripItems: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
    web: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      marginEnd: parseInt(defaultTokens.spaceMedium, 10),
    },
  },
  leftSectionWide: {
    web: {
      minWidth: 180,
    },
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  rightSectionWide: {
    web: {
      alignItems: 'flex-start',
    },
  },
  infoText: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    color: defaultTokens.colorTextSecondary,
    lineHeight: 17,
    padding: 5,
    web: {
      padding: 0,
    },
  },
  dateText: {
    web: {
      fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
      color: designTokens.paletteBlueDark,
    },
  },
  durationText: {
    web: {
      marginTop: parseInt(defaultTokens.spaceXXSmall, 10),
      lineHeight: 14,
      color: defaultTokens.paletteInkLight,
    },
  },
});
