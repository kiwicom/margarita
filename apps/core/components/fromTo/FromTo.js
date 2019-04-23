// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import type { FromTo_data as BookingType } from './__generated__/FromTo_data.graphql';
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
      style={styles.cityName}
      {...rest}
    />
    <FromToIcon data={data} iconColor={iconColor} />
    <CityName
      prependFlag={false}
      appendFlag={withFlags}
      data={data?.arrival}
      style={[styles.cityName, styles.alignRight]}
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
  },
  cityName: {
    flex: 1,
  },
  alignRight: {
    justifyContent: 'flex-end',
  },
});

export default createFragmentContainer(FromTo, {
  data: graphql`
    fragment FromTo_data on FromToInterface {
      departure {
        ...CityName_data
      }
      arrival {
        ...CityName_data
      }
      ...FromToIcon_data
    }
  `,
});
