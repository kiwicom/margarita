// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { FromTo as BookingType } from './__generated__/FromTo.graphql';
import CityName from './CityName';
import FromToIcon from './FromToIcon';

type Props = {|
  +data: ?BookingType,
  +textType: 'white' | 'attention',
  +fontSize: 'normal' | 'large',
  +iconColor: string,
  +withFlags: boolean,
|};

const FromTo = ({ data, iconColor, withFlags, ...rest }: Props) => (
  <View style={styles.container}>
    <CityName
      prependFlag={withFlags}
      appendFlag={false}
      data={data?.departure}
      {...rest}
    />
    <FromToIcon data={data} iconColor={iconColor} />
    <CityName
      prependFlag={false}
      appendFlag={withFlags}
      data={data?.arrival}
      {...rest}
    />
  </View>
);

FromTo.defaultProps = {
  textType: 'white',
  fontSize: 'normal',
  iconColor: defaultTokens.paletteWhite,
  withFlags: false,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default createFragmentContainer(
  FromTo,
  graphql`
    fragment FromTo on FromToInterface {
      departure {
        ...CityName
      }
      arrival {
        ...CityName
      }
      ...FromToIcon
    }
  `,
);
