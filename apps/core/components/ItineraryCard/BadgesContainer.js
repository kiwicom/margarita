// @flow

import * as React from 'react';
import { ScrollView } from 'react-native';
import { Badge, StyleSheet } from '@kiwicom/universal-components';

type BadgeWithId = { ...React.ElementProps<typeof Badge>, id: string };

type Props = {|
  +badges?: Array<BadgeWithId>,
|};

export default function BadgesContainer({ badges }: Props) {
  if (badges == null) {
    return null;
  }
  return (
    <ScrollView horizontal style={styles.container}>
      <>
        {badges.map(badge => (
          <Badge key={badge.id} type={badge.type} style={styles.badge}>
            {badge.children}
          </Badge>
        ))}
      </>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  badge: {
    marginEnd: 10,
  },
});
