// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { TripCities as TripCitiesType } from './__generated__/TripCities.graphql';
import LocationName from './LocationName';

type Props = {|
  +data: ?TripCitiesType,
|};

const TripCities = (props: Props) => (
  <>
    <LocationName data={props.data?.departure} style={styles.text} />
    <LocationName data={props.data?.arrival} style={styles.text} />
  </>
);

const styles = StyleSheet.create({
  text: {
    fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
    lineHeight: 17,
    padding: 5,
  },
});

export default createFragmentContainer(
  TripCities,
  graphql`
    fragment TripCities on Sector {
      arrival {
        ...LocationName
      }
      departure {
        ...LocationName
      }
    }
  `,
);
