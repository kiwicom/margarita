// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Text } from '@kiwicom/universal-components';

import FromTo from '../../../components/fromTo/FromTo';
import FromToWrapper from '../../../components/fromTo/FromToWrapper';
import TripDates from './TripDates';
import type { TripInfoReturn as BookingType } from './__generated__/TripInfoReturn.graphql';

type Props = {|
  +data: ?BookingType,
|};

function TripInfoReturn(props: Props) {
  return (
    <>
      <FromToWrapper>
        <FromTo
          textType="attention"
          fontSize="large"
          iconColor={defaultTokens.colorIconSecondary}
          data={props.data}
          withFlags={true}
        />
      </FromToWrapper>
      <Text style={styles.title} type="secondary">
        DEPARTURE
      </Text>
      <TripDates data={props.data?.outbound} />
      <Text style={[styles.title, styles.return]} type="secondary">
        RETURN
      </Text>
      <TripDates data={props.data?.inbound} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    marginBottom: 4,
  },
  return: {
    marginTop: 12,
  },
});

export default createFragmentContainer(
  TripInfoReturn,
  graphql`
    fragment TripInfoReturn on BookingInterface {
      ... on BookingReturn {
        ...FromTo
        inbound {
          ...TripDates
        }
        outbound {
          ...TripDates
        }
      }
    }
  `,
);
