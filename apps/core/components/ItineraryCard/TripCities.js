// @flow

import * as React from 'react';
import { View, Platform } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Icon } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { TripCities_data as TripCitiesType } from './__generated__/TripCities_data.graphql';
import LocationName from './LocationName';

type Props = {|
  +data: ?TripCitiesType,
|};

const TripCities = (props: Props) => (
  <View style={styles.container}>
    <LocationName data={props.data?.departure} style={styles.text} />
    {Platform.OS === 'web' && (
      <Icon
        name="route-no-stops"
        color={defaultTokens.colorIconTertiary}
        size="large"
      />
    )}
    <LocationName data={props.data?.arrival} style={styles.text} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    web: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: parseInt(defaultTokens.spaceXXSmall, 10),
      height: 14,
    },
  },
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    lineHeight: 17,
    padding: 5,
    web: {
      lineHeight: 14,
      padding: 0,
      color: defaultTokens.paletteInkLight,
    },
  },
});

export default createFragmentContainer(TripCities, {
  data: graphql`
    fragment TripCities_data on Sector {
      arrival {
        ...LocationName_data
      }
      departure {
        ...LocationName_data
      }
    }
  `,
});
