// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';

import Text from '../Text';
import { Icon } from '../Icon';
import Touchable from '../Button/Touchable';

type Props = {|
  +type: 'destination' | 'airplane' | 'bus' | 'train',
  +header: string | React.Node,
  +subheader: string | React.Node,
  +onItemPress: () => void,
  +onAddPress: () => void,
|};

export default function RowOption({
  type,
  header,
  subheader,
  onItemPress,
  onAddPress,
}: Props) {
  let icon = '';

  switch (type) {
    case 'destination':
      icon = 'city';
      break;
    case 'airplane':
      icon = 'airplane-up';
      break;
    case 'bus':
      icon = 'bus';
      break;
    case 'train':
      icon = 'train';
      break;
    default:
      icon = 'city';
  }
  return (
    <Touchable onPress={onItemPress}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <View style={{ alignItems: 'center', flexDirection: 'row' }}>
          <Icon
            name={icon}
            style={{ padding: 10 }}
            color={defaultTokens.colorIconSecondary}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderColor: defaultTokens.paletteInkLighter,
              borderBottomWidth: parseFloat(defaultTokens.borderWidthCard),
              width: '100%',
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: parseFloat(defaultTokens.fontSizeTextNormal),
                }}
                type="primary"
              >
                {header}
              </Text>
              <Text
                type="secondary"
                style={{
                  fontSize: parseFloat(defaultTokens.fontSizeTextSmall),
                  marginBottom: 5,
                }}
              >
                {subheader}
              </Text>
            </View>
            <Touchable
              onPress={onAddPress}
              style={{
                backgroundColor: defaultTokens.backgroundAlertSuccess,
                borderRadius: parseFloat(defaultTokens.borderRadiusNormal),
                marginEnd: 10,
              }}
            >
              <Icon
                name="plus"
                size="small"
                style={{ padding: 2 }}
                color={defaultTokens.paletteProductNormal}
              />
            </Touchable>
          </View>
        </View>
      </View>
    </Touchable>
  );
}
