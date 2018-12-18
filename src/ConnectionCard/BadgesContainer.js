// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import StyleSheet from '../PlatformStyleSheet';

type Props = {|
  +children: React.Node,
|};
export default function BadgesContainer({ children }: Props) {
  return (
    <ScrollView horizontal style={styles.container}>
      {children}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
