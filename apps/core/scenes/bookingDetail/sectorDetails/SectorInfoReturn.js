// @flow

import * as React from 'react';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet, Text } from '@kiwicom/universal-components';

import FromTo from '../../../components/fromTo/FromTo';
import FromToWrapper from '../../../components/fromTo/FromToWrapper';
import SectorDates from './SectorDates';
import type { SectorInfoReturn as BookingType } from './__generated__/SectorInfoReturn.graphql';

type Props = {|
  +data: ?BookingType,
|};

function SectorInfoReturn(props: Props) {
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
      <SectorDates data={props.data?.outbound} />
      <Text style={[styles.title, styles.return]} type="secondary">
        RETURN
      </Text>
      <SectorDates data={props.data?.inbound} />
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
  SectorInfoReturn,
  graphql`
    fragment SectorInfoReturn on BookingInterface {
      ... on BookingReturn {
        ...FromTo
        inbound {
          ...SectorDates
        }
        outbound {
          ...SectorDates
        }
      }
    }
  `,
);
