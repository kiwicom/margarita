// @flow

import * as React from 'react';
import {
  Text,
  StyleSheet,
  type StylePropType,
} from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { Image, View } from 'react-native';

import type { CityName_data as CityNameType } from './__generated__/CityName_data.graphql';

type Props = {|
  +data: ?CityNameType,
  +textType: 'white' | 'attention',
  +fontSize: 'normal' | 'large',
  +prependFlag: boolean,
  +appendFlag: boolean,
  +style?: StylePropType,
|};

const CityName = (props: Props) => {
  const flag = (
    <Image
      source={{ uri: props.data?.stop?.countryFlagURL ?? '' }}
      style={[
        styles.flag,
        props.prependFlag && styles.prepend,
        props.appendFlag && styles.append,
      ]}
    />
  );
  return (
    <View style={[styles.row, props.style]}>
      {props.prependFlag && flag}
      <Text size={props.fontSize} type={props.textType}>
        {props.data?.stop?.city?.name}
      </Text>
      {props.appendFlag && flag}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flag: {
    width: 20,
    height: 14,
  },
  prepend: {
    marginEnd: 10,
  },
  append: {
    marginStart: 8,
  },
});

export default createFragmentContainer(CityName, {
  data: graphql`
    fragment CityName_data on RouteStop {
      stop {
        countryFlagURL
        city {
          name
        }
      }
    }
  `,
});
