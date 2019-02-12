// @flow

import * as React from 'react';
import { graphql, createFragmentContainer } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { StyleSheet } from '@kiwicom/universal-components';
import { View } from 'react-native';

import type { TripInfo as BookingType } from './__generated__/TripInfo.graphql';
import FromTo from '../../../components/fromTo/FromTo';
import TripDates from './TripDates';

type Props = {|
  +data: ?BookingType,
|};

const TripInfo = (props: Props) => {
  if (props.data == null) {
    return null;
  }
  return (
    <>
      <View style={styles.fromToWrapper}>
        <FromTo
          textType="attention"
          fontSize="large"
          iconColor={defaultTokens.colorIconSecondary}
          data={props.data}
          withFlags={true}
        />
      </View>
      <TripDates data={props.data} />
    </>
  );
};

const styles = StyleSheet.create({
  fromToWrapper: {
    marginBottom: 16,
  },
});

export default createFragmentContainer(
  TripInfo,
  graphql`
    fragment TripInfo on Trip {
      ...FromTo
      ...TripDates
    }
  `,
);
