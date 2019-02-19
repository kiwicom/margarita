// @flow

import * as React from 'react';
import { Text, StyleSheet } from '@kiwicom/universal-components';
import { createFragmentContainer, graphql } from '@kiwicom/margarita-relay';
import { Image, View } from 'react-native';

import type { CityName as CityNameType } from './__generated__/CityName.graphql';

type Props = {|
  +data: ?CityNameType,
  +textType: 'white' | 'attention',
  +fontSize: 'normal' | 'large',
  +prependFlag: boolean,
  +appendFlag: boolean,
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
    <View style={styles.row}>
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

export default createFragmentContainer(
  CityName,
  graphql`
    fragment CityName on RouteStop {
      stop {
        countryFlagURL
        city {
          name
        }
      }
    }
  `,
);
