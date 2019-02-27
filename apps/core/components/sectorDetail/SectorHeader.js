// @flow

import * as React from 'react';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text, Duration } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { View } from 'react-native';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { SectorHeader as SectorType } from './__generated__/SectorHeader.graphql';

type Props = {|
  +data: ?SectorType,
|};

const SectorHeader = (props: Props) => {
  const locationName = props.data?.arrival?.stop?.city?.name;
  return (
    <View style={styles.container}>
      <Text weight="bold" style={styles.location}>
        {locationName ? `To ${locationName}` : ''}
      </Text>
      <Duration
        weight="bold"
        showIcon={false}
        style={styles.duration}
        duration={props.data?.duration}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: parseInt(defaultTokens.spaceMedium, 10),
    marginHorizontal: parseInt(defaultTokens.spaceMedium, 10),
  },
  location: {
    fontSize: parseInt(defaultTokens.fontSizeHeadingTitle3, 10),
    color: defaultTokens.colorHeading,
  },
  duration: {
    fontSize: parseInt(defaultTokens.fontSizeHeadingTitle3, 10),
    color: defaultTokens.colorTextSecondary,
    web: {
      fontWeight: defaultTokens.fontWeightMedium,
    },
  },
});

export default createFragmentContainer(
  SectorHeader,
  graphql`
    fragment SectorHeader on Sector {
      duration
      arrival {
        stop {
          city {
            name
          }
        }
      }
    }
  `,
);
