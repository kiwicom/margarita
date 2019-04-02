// @flow

import * as React from 'react';
import { View } from 'react-native';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import { Icon, StyleSheet, Accordion } from '@kiwicom/universal-components';

import AdditionalInfo, {
  type Props as AdditionalInfoProps,
} from './components/AdditionalInfo';
import CardHeader from './components/CardHeader';

type Props = {|
  +additionalInfo: $PropertyType<AdditionalInfoProps, 'additionalInfo'>,
  +carrier: {|
    code: ?string,
    name: ?string,
    type?: 'airline' | 'bus' | 'train',
  |},
  +duration: ?number,
|};

type HeaderProps = $Rest<
  React.ElementProps<typeof CardHeader>,
  {| +expanded: boolean |},
>;

const Header = ({ carrier, duration }: HeaderProps) => (expanded: boolean) => (
  <CardHeader carrier={carrier} expanded={expanded} duration={duration} />
);

export default function TimelineTransportDetail({
  carrier,
  duration,
  additionalInfo,
}: Props) {
  return (
    <View style={[styles.container, styles.row]}>
      <View style={styles.line}>
        <View style={styles.strip} />
        <Icon
          name="airplane-down"
          size="small"
          color={defaultTokens.paletteBlueNormal}
          style={styles.icon}
        />
        <View style={[styles.strip, styles.secondStrip]} />
      </View>
      <View style={styles.cardContainer}>
        <Accordion
          expandedDefault={false}
          header={Header({ carrier, duration })}
        >
          <AdditionalInfo additionalInfo={additionalInfo} />
        </Accordion>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  container: {
    minHeight: parseFloat(defaultTokens.heightButtonLarge),
    backgroundColor: defaultTokens.paletteWhite,
  },
  line: {
    paddingStart: 20,
    paddingEnd: 5,
  },
  strip: {
    height: 17,
    width: 2,
    backgroundColor: defaultTokens.paletteBlueNormal,
  },
  secondStrip: {
    flex: 1,
  },
  icon: {
    marginStart: -6.5,
    margin: 2,
    backgroundColor: defaultTokens.paletteWhite,
  },
  cardContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    marginEnd: 8,
  },
});
