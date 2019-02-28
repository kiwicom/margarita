// @flow

import * as React from 'react';
import { StyleSheet } from '@kiwicom/universal-components';
import { Text, StopoverDuration } from '@kiwicom/margarita-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { SectorStopoverDuration_data as SectorType } from './__generated__/SectorStopoverDuration_data.graphql';

type Props = {|
  +data: ?SectorType,
|};

const SectorStopoverDuration = (props: Props) => {
  const stopoverDuration = props.data?.stopoverDuration;
  if (stopoverDuration) {
    const locationName = props.data?.departure?.stop?.city?.name;
    return (
      <Text style={styles.text}>
        <StopoverDuration
          stopoverDuration={stopoverDuration}
          locationName={locationName}
        />
      </Text>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  text: {
    fontSize: parseInt(defaultTokens.fontSizeTextSmall, 10),
    color: defaultTokens.colorTextSecondary,
    marginTop: parseInt(defaultTokens.spaceSmall, 10),
    marginBottom: parseInt(defaultTokens.spaceMedium, 10),
    marginStart: 48,
  },
});

export default createFragmentContainer(SectorStopoverDuration, {
  data: graphql`
    fragment SectorStopoverDuration_data on Sector {
      stopoverDuration
      departure {
        stop {
          city {
            name
          }
        }
      }
    }
  `,
});
