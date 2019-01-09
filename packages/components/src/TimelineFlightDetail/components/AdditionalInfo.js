// @flow

import * as React from 'react';
import { View } from 'react-native';
import { StyleSheet } from '@kiwicom/universal-components';

import AdditionalInfoCard, {
  type Props as AdditionalInfoCardProps,
} from './AdditionalInfoCard';

export type Props = {| +additionalInfo: Array<AdditionalInfoCardProps> |};

export default function AdditionalInfo({ additionalInfo }: Props) {
  return (
    <View style={styles.container}>
      {additionalInfo.map(({ title, information }, index) => (
        <View
          style={[styles.infoCard, index === 0 && styles.firstInfoCard]}
          key={title}
        >
          <AdditionalInfoCard title={title} information={information} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  infoCard: {
    marginTop: 4,
  },
  firstInfoCard: {
    marginTop: 0,
  },
});
