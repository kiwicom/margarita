// @flow

import * as React from 'react';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';

import type { FlightTimes as FlightTimesType } from './__generated__/FlightTimes.graphql';
import LocalTime from './LocalTime';

type Props = {|
  +data: ?FlightTimesType,
|};

const FlightTimes = (props: Props) => (
  <>
    <LocalTime data={props.data?.departure} style={styles.highlightedText} />
    <LocalTime data={props.data?.arrival} style={styles.highlightedText} />
  </>
);

const styles = StyleSheet.create({
  highlightedText: {
    fontWeight: 'bold',
    fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
    color: defaultTokens.colorTextAttention,
    padding: 5,
  },
});

export default createFragmentContainer(
  FlightTimes,
  graphql`
    fragment FlightTimes on Sector {
      arrival {
        ...LocalTime
      }
      departure {
        ...LocalTime
      }
    }
  `,
);
