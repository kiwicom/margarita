// @flow

import * as React from 'react';
import { StyleSheet, Button, Card } from '@kiwicom/universal-components';
import { defaultTokens } from '@kiwicom/orbit-design-tokens';
import {
  Illustration,
  ContentContainer,
  Text,
} from '@kiwicom/margarita-components';

type Props = {||};

export default class Profile extends React.Component<Props> {
  handleSignIn = () => {
    // @TODO
  };

  render() {
    return (
      <ContentContainer>
        <Illustration name="Lounge" style={styles.illustration} />
        <Card style={styles.card}>
          <Text size="large" type="primary" weight="bold">
            Sign In
          </Text>
          <Text size="small" type="secondary" style={styles.description}>
            Sign in to see your bookings and tickets
          </Text>
          <Button onPress={this.handleSignIn} label="Sign In" />
        </Card>
      </ContentContainer>
    );
  }
}

const styles = StyleSheet.create({
  illustration: {
    paddingTop: parseInt(defaultTokens.spaceMedium, 10),
    paddingBottom: parseInt(defaultTokens.spaceLarge, 10),
  },
  description: {
    marginVertical: parseInt(defaultTokens.spaceSmall, 10),
  },
});
